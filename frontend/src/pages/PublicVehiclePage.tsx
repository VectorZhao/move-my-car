import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPublicVehicle, notifyVehicle, callVehicle } from '../api/public';
import { PublicVehicle } from '../types';
import axios from 'axios';

const PublicVehiclePage = () => {
  const { shareCode } = useParams();
  const [vehicle, setVehicle] = useState<PublicVehicle | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (!shareCode) return;
    const load = async () => {
      try {
        const data = await fetchPublicVehicle(shareCode);
        setVehicle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '车辆信息获取失败');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [shareCode]);

  const handleNotify = async () => {
    if (!shareCode) return;
    try {
      setFeedback(null);
      const resp = await notifyVehicle(shareCode, message.trim());
      if (resp.rateLimited) {
        setFeedback(resp.message ?? '发送太频繁，请稍等');
      } else {
        setFeedback(resp.message ?? '通知已发送，感谢配合');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const raw = err.response?.data?.message ?? err.message;
        try {
          const parsed = raw && typeof raw === 'string' ? JSON.parse(raw) : raw;
          if (parsed?.message) {
            setFeedback(parsed.message);
          } else {
            setFeedback(typeof parsed === 'string' ? parsed : '发送失败');
          }
        } catch {
          setFeedback(raw ?? '发送失败');
        }
      } else {
        setFeedback(err instanceof Error ? err.message : '发送失败');
      }
    }
  };

  const handleCall = async () => {
    if (!shareCode) return;
    try {
      const phoneNumber = await callVehicle(shareCode);
      window.location.href = `tel:${phoneNumber}`;
      setFeedback(`正在呼叫 ${phoneNumber}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const raw = err.response?.data?.message ?? err.message;
        try {
          const parsed = raw && typeof raw === 'string' ? JSON.parse(raw) : raw;
          if (parsed?.message) {
            setFeedback(parsed.message);
          } else {
            setFeedback(typeof parsed === 'string' ? parsed : '无法获取电话');
          }
        } catch {
          setFeedback(raw ?? '无法获取电话');
        }
      } else {
        setFeedback(err instanceof Error ? err.message : '无法获取电话');
      }
    }
  };

  if (loading) {
    return (
      <div className="main-content">
        <div className="glass-card" style={{ maxWidth: 480 }}>载入中...</div>
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="main-content">
        <div className="glass-card" style={{ maxWidth: 480 }}>
          <h2>链接无效</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>{error ?? '未找到车辆，请联系车主确认二维码或链接。'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="glass-card" style={{ width: '100%', maxWidth: 520 }}>
        <p style={{ letterSpacing: '0.3em', color: '#8f9ff5', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.4rem' }}>🚗 MOVE MY CAR</p>
        <h2 style={{ margin: 0 }}>{vehicle.carPlate}</h2>
        {vehicle.label && <p style={{ marginTop: '0.4rem', color: 'rgba(255,255,255,0.7)' }}>{vehicle.label}</p>}
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>如需挪车，请使用以下方式通知车主。</p>

        {vehicle.notifyEnabled ? (
          <div style={{ marginTop: '1rem' }}>
            <label>
              <span>留言（可选）</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="请简要描述堵塞原因" />
            </label>
            <button className="primary" style={{ width: '100%', marginTop: '0.6rem' }} onClick={handleNotify}>
              发送通知
            </button>
          </div>
        ) : (
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)' }}>车主暂未开启消息通知。</p>
        )}

        {vehicle.callEnabled ? (
          <button className="primary" style={{ width: '100%', marginTop: '0.8rem', background: '#2f80ed' }} onClick={handleCall}>
            拨打电话
          </button>
        ) : (
          <p style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>车主暂未公开电话。</p>
        )}

        {feedback && <div style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>{feedback}</div>}

        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
          本服务由 🚗 Move My Car 提供。<br />
          <Link to="/login" style={{ color: '#9fe5ff' }}>我是车主</Link>
        </p>
      </div>
    </div>
  );
};

export default PublicVehiclePage;
