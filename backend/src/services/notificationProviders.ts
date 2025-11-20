import { config } from '../config/index.js';

export interface NotificationProviderMeta {
  id: string;
  name: string;
  hint: string;
}

export interface NotificationPayload {
  carPlate: string;
  message: string;
}

export interface NotificationResult {
  success: boolean;
  detail?: string;
}

const postJson = async (url: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed (${response.status}): ${text}`);
  }

  return response.json().catch(() => ({}));
};

const getJson = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed (${response.status}): ${text}`);
  }
  return response.json().catch(() => ({}));
};

const bark = async (configString: string, payload: NotificationPayload): Promise<NotificationResult> => {
  const [tokenRaw, soundRaw, urlRaw, levelRaw, volumeRaw, callRaw] = configString.split('|');
  const token = tokenRaw?.trim();
  if (!token) {
    throw new Error('Bark token 未填写');
  }
  const sound = soundRaw?.trim() || 'multiwayinvitation';
  let endpoint = urlRaw?.trim();
  if (!endpoint) {
    throw new Error('Bark 推送 URL 未配置');
  }
  if (!/^https?:\/\//i.test(endpoint)) {
    endpoint = `https://${endpoint}`;
  }
  let cleaned = endpoint.replace(/\/+$/, '');
  if (/\/push$/i.test(cleaned)) {
    cleaned = cleaned.replace(/\/push$/i, '');
  }
  const normalizedEndpoint = `${cleaned}/push`;
  const allowedLevels = ['critical', 'active', 'timeSensitive', 'passive'];
  const level = allowedLevels.includes(levelRaw?.trim() ?? '') ? levelRaw!.trim() : 'critical';
  const vol = Number(volumeRaw);
  const volume = Number.isFinite(vol) ? Math.min(10, Math.max(0, vol)) : 1;
  const call = callRaw?.trim() === '0' ? undefined : '1';
  const data = await postJson(normalizedEndpoint, {
    body: payload.message,
    title: '挪车通知',
    device_key: token,
    sound,
    group: 'MoveMyCar',
    level,
    volume,
    call
  });
  if (data.code === 200) {
    return { success: true };
  }
  throw new Error(data?.message || 'Bark 推送失败');
};

const wxPusher = async (configString: string, payload: NotificationPayload): Promise<NotificationResult> => {
  const [appToken, uid] = configString.split('|').map((item) => item?.trim()).filter(Boolean) as string[];
  if (!appToken || !uid) {
    throw new Error('WxPusher 配置格式错误，应形如 AT_xxx|UID_xxx');
  }
  const data = await postJson('https://wxpusher.zjiecode.com/api/send/message', {
    appToken,
    content: payload.message,
    contentType: 1,
    summary: `挪车-${payload.carPlate}`,
    uids: [uid]
  });
  if (data.code === 1000 || data.code === 0) {
    return { success: true };
  }
  throw new Error(data.msg || 'WxPusher 推送失败');
};

const feishu = async (token: string, payload: NotificationPayload): Promise<NotificationResult> => {
  const trimmed = token.trim();
  if (!trimmed) throw new Error('请输入飞书 Webhook token');
  const data = await postJson(`https://open.feishu.cn/open-apis/bot/v2/hook/${trimmed}`, {
    msg_type: 'text',
    content: { text: payload.message }
  });
  if (data.code === 0) {
    return { success: true };
  }
  throw new Error(data.msg || '飞书机器人推送失败');
};

const wechatWork = async (token: string, payload: NotificationPayload): Promise<NotificationResult> => {
  const trimmed = token.trim();
  if (!trimmed) throw new Error('请输入企业微信 Webhook token');
  const data = await postJson(`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${trimmed}`, {
    msgtype: 'text',
    text: { content: payload.message }
  });
  if (data.errcode === 0) {
    return { success: true };
  }
  throw new Error(data.errmsg || '企业微信机器人推送失败');
};

const dingTalk = async (token: string, payload: NotificationPayload): Promise<NotificationResult> => {
  const trimmed = token.trim();
  if (!trimmed) throw new Error('请输入钉钉 Webhook token');
  const data = await postJson(`https://oapi.dingtalk.com/robot/send?access_token=${trimmed}`, {
    msgtype: 'text',
    text: { content: payload.message }
  });
  if (data.errcode === 0) {
    return { success: true };
  }
  throw new Error(data.errmsg || '钉钉机器人推送失败');
};

const oneBot = async (configString: string, payload: NotificationPayload): Promise<NotificationResult> => {
  const [endpoint, token, uid] = configString.split('|').map((part) => part?.trim());
  if (!endpoint || !uid) {
    throw new Error('OneBot 配置格式错误，应形如 http://host:port/send_private_msg|token|123456');
  }
  const body: Record<string, unknown> = { message: payload.message };
  if (endpoint.includes('send_private_msg')) {
    body.user_id = Number(uid);
  } else {
    body.group_id = Number(uid);
  }
  const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
  const data = await postJson(endpoint, body, headers);
  if (data.retcode === 0) {
    return { success: true };
  }
  throw new Error('OneBot 推送失败');
};

export const notificationProviders: NotificationProviderMeta[] = [
  { id: 'BARK', name: 'Bark', hint: 'token|sound|url|level|volume|call（level 默认 critical, volume 默认 1, call 默认 1）' },
  { id: 'WX_PUSHER', name: 'WxPusher', hint: 'AT_xxx|UID_xxx' },
  { id: 'FEISHU_BOT', name: '飞书机器人', hint: 'Webhook token' },
  { id: 'WECHAT_WORK_BOT', name: '企业微信机器人', hint: 'Webhook token' },
  { id: 'DINGTALK_BOT', name: '钉钉机器人', hint: 'Webhook token' },
  { id: 'ONEBOT', name: 'OneBot / NapCat / Lagrange', hint: 'http://host/send_private_msg|access_token|接收人ID' }
];

export const sendNotification = async (
  providerId: string,
  configString: string,
  payload: NotificationPayload
): Promise<NotificationResult> => {
  const normalizedMessage = payload.message || config.notifyMessage;
  const data = { ...payload, message: normalizedMessage };
  switch (providerId) {
    case 'BARK':
      return bark(configString, data);
    case 'WX_PUSHER':
      return wxPusher(configString, data);
    case 'FEISHU_BOT':
      return feishu(configString, data);
    case 'WECHAT_WORK_BOT':
      return wechatWork(configString, data);
    case 'DINGTALK_BOT':
      return dingTalk(configString, data);
    case 'ONEBOT':
      return oneBot(configString, data);
    default:
      throw new Error('未知的通知渠道');
  }
};
