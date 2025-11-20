import { FormEvent, useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode';
import QrModal from '../components/QrModal';
import { useAuth } from '../context/AuthContext';
import {
  fetchVehicles,
  fetchNotifyTypes,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  regenerateShareCode
} from '../api/vehicles';
import { NotifyTypeOption, VehicleRecord } from '../types';

const defaultForm = {
  label: '',
  carPlate: '',
  phone: '',
  notifyType: 'BARK',
  notifyConfig: '',
  notifyEnabled: true,
  callEnabled: true
};

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [vehicles, setVehicles] = useState<VehicleRecord[]>([]);
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [types, setTypes] = useState<NotifyTypeOption[]>([]);
  const [form, setForm] = useState(defaultForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [typeOptions, vehicleList] = await Promise.all([fetchNotifyTypes(), fetchVehicles()]);
        setTypes(typeOptions);
        setVehicles(vehicleList);
        setForm((prev) => ({ ...prev, notifyType: typeOptions[0]?.id ?? 'BARK' }));
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载车辆失败');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const resetForm = () => {
    setForm((prev) => ({ ...defaultForm, notifyType: prev.notifyType || 'BARK' }));
    setEditingId(null);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    try {
      if (editingId) {
        const updated = await updateVehicle(editingId, form);
        setVehicles((prev) => prev.map((item) => (item.id === editingId ? updated : item)));
        setSuccess('车辆信息已更新');
      } else {
        const created = await createVehicle(form);
        setVehicles((prev) => [created, ...prev]);
        setSuccess('添加成功');
      }
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : '保存失败');
    } finally {
      setSaving(false);
    }
  };

  const beginEdit = (vehicle: VehicleRecord) => {
    setEditingId(vehicle.id);
    setForm({
      label: vehicle.label ?? '',
      carPlate: vehicle.carPlate,
      phone: vehicle.phone,
      notifyType: vehicle.notifyType,
      notifyConfig: vehicle.notifyConfig,
      notifyEnabled: vehicle.notifyEnabled,
      callEnabled: vehicle.callEnabled
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除该车辆么？')) return;
    await deleteVehicle(id);
    setVehicles((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRegenerate = async (id: string) => {
    const updated = await regenerateShareCode(id);
    setVehicles((prev) => prev.map((item) => (item.id === id ? updated : item)));
  };

  const handleToggle = async (vehicle: VehicleRecord, field: 'notifyEnabled' | 'callEnabled') => {
    const updated = await updateVehicle(vehicle.id, { [field]: !vehicle[field] });
    setVehicles((prev) => prev.map((item) => (item.id === vehicle.id ? updated : item)));
  };

  const showQr = async (vehicle: VehicleRecord) => {
    const dataUrl = await QRCode.toDataURL(vehicle.shareUrl, { width: 320 });
    setQrUrl(dataUrl);
  };

  const notifyTypeOptions = useMemo(() => types, [types]);
  const currentType = useMemo(() => notifyTypeOptions.find((t) => t.id === form.notifyType), [notifyTypeOptions, form.notifyType]);

  return (
    <div className="main-content" style={{ alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <header className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ letterSpacing: '0.4em', color: '#8f9ff5', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.4rem' }}>Control Center</p>
            <h2 style={{ margin: 0 }}>你好，{user?.name ?? '车主'}</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>添加你的车辆，配置通知渠道，生成分享链接贴在车上。</p>
          </div>
          <button className="primary" style={{ background: 'rgba(255,255,255,0.08)' }} onClick={logout}>
            退出登录
          </button>
        </header>

        <section className="glass-card">
          <h3 style={{ marginTop: 0 }}>{editingId ? '编辑车辆' : '添加车辆'}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: '1rem' }}>
            <label>
              <span>车辆备注（可选）</span>
              <input value={form.label} onChange={(e) => setForm((prev) => ({ ...prev, label: e.target.value }))} placeholder="地库 A3" />
            </label>
            <label>
              <span>车牌号</span>
              <input value={form.carPlate} onChange={(e) => setForm((prev) => ({ ...prev, carPlate: e.target.value }))} required placeholder="粤CF12345" />
            </label>
            <label>
              <span>联系电话</span>
              <input value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} required placeholder="138****0000" />
            </label>
            <label>
              <span>通知方式</span>
              <select value={form.notifyType} onChange={(e) => setForm((prev) => ({ ...prev, notifyType: e.target.value }))}>
                {notifyTypeOptions.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ gridColumn: '1 / -1' }}>
              <span>通知配置</span>
              <input
                value={form.notifyConfig}
                onChange={(e) => setForm((prev) => ({ ...prev, notifyConfig: e.target.value }))}
                required
                placeholder="例如：token|sound|url|level|volume|badge|call"
              />
            </label>
            <label>
              <span>消息通知</span>
              <select value={form.notifyEnabled ? 'on' : 'off'} onChange={(e) => setForm((prev) => ({ ...prev, notifyEnabled: e.target.value === 'on' }))}>
                <option value="on">开启</option>
                <option value="off">关闭</option>
              </select>
            </label>
            <label>
              <span>电话通知</span>
              <select value={form.callEnabled ? 'on' : 'off'} onChange={(e) => setForm((prev) => ({ ...prev, callEnabled: e.target.value === 'on' }))}>
                <option value="on">开启</option>
                <option value="off">关闭</option>
              </select>
            </label>
            {error && (
              <div style={{ gridColumn: '1 / -1', color: '#ff6b81' }}>{error}</div>
            )}
            {success && (
              <div style={{ gridColumn: '1 / -1', color: '#7ed957' }}>{success}</div>
            )}
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '1rem' }}>
              <button className="primary" type="submit" disabled={saving}>
                {saving ? '保存中...' : editingId ? '保存变更' : '添加车辆'}
              </button>
              {editingId && (
                <button
                  type="button"
                  style={{ color: '#9fe5ff', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '0 1.5rem' }}
                  onClick={resetForm}
                >
                  取消编辑
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ marginTop: 0 }}>我的车辆</h3>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{vehicles.length} 台</span>
          </div>
          {loading ? (
            <p>数据加载中...</p>
          ) : vehicles.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>尚未添加车辆。</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1rem' }}>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.2rem', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong>{vehicle.carPlate}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>{vehicle.notifyType}</span>
                  </div>
                  {vehicle.label && <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>{vehicle.label}</p>}
                  <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    <div>联系电话：{vehicle.phone}</div>
                    <div>消息通知：{vehicle.notifyEnabled ? '开启' : '关闭'}</div>
                    <div>电话通知：{vehicle.callEnabled ? '开启' : '关闭'}</div>
                  </div>
                  <div style={{ marginTop: '0.8rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{vehicle.shareUrl}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.8rem' }}>
                    <button
                      type="button"
                      className="primary"
                      style={{ padding: '0.4rem 0.9rem', background: '#2f80ed' }}
                      onClick={() => showQr(vehicle)}
                    >
                      二维码
                    </button>
                    <button
                      type="button"
                      className="primary"
                      style={{ padding: '0.4rem 0.9rem' }}
                      onClick={() => navigator.clipboard.writeText(vehicle.shareUrl)}
                    >
                      复制链接
                    </button>
                    <button type="button" className="primary" style={{ padding: '0.4rem 0.9rem', background: '#2f80ed' }} onClick={() => beginEdit(vehicle)}>
                      编辑
                    </button>
                    <button
                      type="button"
                      className="primary"
                      style={{ padding: '0.4rem 0.9rem', background: '#9b51e0' }}
                      onClick={() => handleRegenerate(vehicle.id)}
                    >
                      重置链接
                    </button>
                    <button
                      type="button"
                      className="primary"
                      style={{ padding: '0.4rem 0.9rem', background: '#ff6b81' }}
                      onClick={() => handleDelete(vehicle.id)}
                    >
                      删除
                    </button>
                  </div>
                  <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      style={{ flex: 1, minWidth: '120px', padding: '0.35rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', background: vehicle.notifyEnabled ? 'rgba(0, 199, 111, 0.2)' : 'transparent', color: '#fff' }}
                      onClick={() => handleToggle(vehicle, 'notifyEnabled')}
                    >
                      {vehicle.notifyEnabled ? '关闭通知' : '开启通知'}
                    </button>
                    <button
                      type="button"
                      style={{ flex: 1, minWidth: '120px', padding: '0.35rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', background: vehicle.callEnabled ? 'rgba(45, 156, 219, 0.2)' : 'transparent', color: '#fff' }}
                      onClick={() => handleToggle(vehicle, 'callEnabled')}
                    >
                      {vehicle.callEnabled ? '关闭电话' : '开启电话'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {qrUrl && <QrModal qrUrl={qrUrl} onClose={() => setQrUrl(null)} />}
      </div>
    </div>
  );
};

export default UserDashboard;
