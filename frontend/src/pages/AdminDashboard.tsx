import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  fetchAdminVehicles,
  regenerateShareCode,
  deleteVehicle,
  fetchNotifyTypes
} from '../api/vehicles';
import { createAdminUser, deleteAdminUser, fetchAdminUsers } from '../api/admin';
import { VehicleRecord, NotifyTypeOption, AdminUser } from '../types';

const AdminDashboard = () => {
  const { logout, user, token } = useAuth();
  const [vehicles, setVehicles] = useState<Array<VehicleRecord & { owner: { id: string; name: string; email?: string } }>>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [types, setTypes] = useState<NotifyTypeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userForm, setUserForm] = useState({ username: '', name: '', password: '', role: 'USER' as 'USER' | 'ADMIN' });
  const [userMessage, setUserMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    const load = async () => {
      try {
        const [typeOptions, vehicleList, userList] = await Promise.all([fetchNotifyTypes(), fetchAdminVehicles(), fetchAdminUsers()]);
        setTypes(typeOptions);
        setVehicles(vehicleList);
        setUsers(userList);
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载失败');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token]);

  const stats = useMemo(() => {
    const total = vehicles.length;
    const notifyEnabled = vehicles.filter((item) => item.notifyEnabled).length;
    const callEnabled = vehicles.filter((item) => item.callEnabled).length;
    return { total, notifyEnabled, callEnabled };
  }, [vehicles]);

  const providerName = (id: string) => types.find((t) => t.id === id)?.name ?? id;

  const handleRegenerate = async (id: string) => {
    const updated = await regenerateShareCode(id);
    setVehicles((prev) => prev.map((item) => (item.id === id ? { ...item, ...updated } : item)));
  };

  const handleDeleteVehicle = async (id: string) => {
    if (!confirm('确认删除该车辆？')) return;
    await deleteVehicle(id);
    setVehicles((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCreateUser = async () => {
    if (!userForm.username || !userForm.password) return;
    const created = await createAdminUser(userForm);
    setUsers((prev) => [created, ...prev]);
    setUserForm({ username: '', name: '', password: '', role: 'USER' });
    setUserMessage('账号已创建，记得将初始密码告知车主');
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm('确认删除该账号？')) return;
    await deleteAdminUser(id);
    setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="main-content" style={{ alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <header className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ letterSpacing: '0.4em', color: '#8f9ff5', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.4rem' }}>COMMAND CENTER</p>
          </div>
          <button className="primary" style={{ background: 'rgba(255,255,255,0.08)' }} onClick={logout}>
            安全退出
          </button>
        </header>

        <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[{ title: '车辆总数', value: stats.total }, { title: '消息通知开启', value: stats.notifyEnabled }, { title: '电话通知开启', value: stats.callEnabled }, { title: '账号数量', value: users.length }].map((card) => (
            <div key={card.title} className="glass-card" style={{ padding: '1.5rem' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>{card.title}</p>
              <h2 style={{ margin: 0 }}>{card.value}</h2>
            </div>
          ))}
        </section>

        <section className="glass-card" style={{ overflowX: 'auto' }}>
          <h3 style={{ marginTop: 0 }}>车辆列表</h3>
          {error && <div style={{ color: '#ff6b81' }}>{error}</div>}
          {loading ? (
            <p>数据加载中...</p>
          ) : vehicles.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>暂无车辆。</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ textAlign: 'left', opacity: 0.7 }}>
                  <th style={{ padding: '0.75rem 0.5rem' }}>车牌</th>
                  <th>车主</th>
                  <th>电话</th>
                  <th>通知方式</th>
                  <th>消息通知</th>
                  <th>电话通知</th>
                  <th>链接</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{vehicle.carPlate}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{vehicle.owner?.name ?? '未知'}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{vehicle.phone}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{providerName(vehicle.notifyType)}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{vehicle.notifyEnabled ? '开启' : '关闭'}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{vehicle.callEnabled ? '开启' : '关闭'}</td>
                    <td style={{ padding: '0.75rem 0.5rem', maxWidth: 220 }}>{vehicle.shareUrl}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <button className="primary" style={{ padding: '0.3rem 0.6rem' }} onClick={() => navigator.clipboard.writeText(vehicle.shareUrl)}>
                          复制
                        </button>
                        <button className="primary" style={{ padding: '0.3rem 0.6rem', background: '#9b51e0' }} onClick={() => handleRegenerate(vehicle.id)}>
                          重置
                        </button>
                        <button className="primary" style={{ padding: '0.3rem 0.6rem', background: '#ff6b81' }} onClick={() => handleDeleteVehicle(vehicle.id)}>
                          删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        <section className="glass-card">
          <h3 style={{ marginTop: 0 }}>添加车主账号</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <label>
              <span>账号</span>
              <input value={userForm.username} onChange={(e) => setUserForm((prev) => ({ ...prev, username: e.target.value }))} placeholder="carowner01" />
            </label>
            <label>
              <span>姓名</span>
              <input value={userForm.name} onChange={(e) => setUserForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="张车主" />
            </label>
            <label>
              <span>初始密码</span>
              <input type="password" value={userForm.password} onChange={(e) => setUserForm((prev) => ({ ...prev, password: e.target.value }))} placeholder="至少6位" />
            </label>
            <label>
              <span>角色</span>
              <select value={userForm.role} onChange={(e) => setUserForm((prev) => ({ ...prev, role: e.target.value as 'USER' | 'ADMIN' }))}>
                <option value="USER">车主</option>
                <option value="ADMIN">管理员</option>
              </select>
            </label>
          </div>
          {userMessage && <div style={{ marginTop: '0.5rem', color: '#7ed957' }}>{userMessage}</div>}
          <div style={{ marginTop: '1rem' }}>
            <button className="primary" onClick={handleCreateUser}>
              创建账号
            </button>
          </div>

          <h4 style={{ marginTop: '2rem' }}>账号列表</h4>
          {users.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>暂无账号</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0.5rem' }}>
              <thead>
                <tr style={{ textAlign: 'left', opacity: 0.7 }}>
                  <th style={{ padding: '0.5rem' }}>账号</th>
                  <th style={{ padding: '0.5rem' }}>姓名</th>
                  <th style={{ padding: '0.5rem' }}>角色</th>
                  <th style={{ padding: '0.5rem' }}>创建时间</th>
                  <th style={{ padding: '0.5rem' }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.5rem' }}>{item.username}</td>
                    <td style={{ padding: '0.5rem' }}>{item.name}</td>
                    <td style={{ padding: '0.5rem' }}>{item.role === 'ADMIN' ? '管理员' : '车主'}</td>
                    <td style={{ padding: '0.5rem' }}>{new Date(item.createdAt).toLocaleString()}</td>
                    <td style={{ padding: '0.5rem' }}>
                      {item.username !== 'admin' && (
                        <button className="primary" style={{ padding: '0.3rem 0.6rem', background: '#ff6b81' }} onClick={() => handleDeleteUser(item.id)}>
                          删除
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
