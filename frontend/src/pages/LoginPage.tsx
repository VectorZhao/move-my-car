import { FormEvent, useMemo, useState } from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import { loginRequest } from '../api/auth';
import { useAuth } from '../context/AuthContext';

type LoginMode = 'user' | 'admin';

const LoginPage: React.FC<{ mode?: LoginMode }> = ({ mode = 'user' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const message = (location.state as { message?: string } | undefined)?.message;
  const isAdminMode = useMemo(() => mode === 'admin', [mode]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = await loginRequest(identifier, password);
      if (isAdminMode && payload.user.role !== 'ADMIN') {
        setError('请使用管理员账号登录');
        return;
      }
      login(payload);
      const from = (location.state as { from?: Location })?.from;
      navigate(from?.pathname ?? (payload.user.role === 'ADMIN' ? '/admin' : '/dashboard'), { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="glass-card" style={{ width: '100%', maxWidth: 420 }}>
        <p style={{ letterSpacing: '0.4em', color: '#8f9ff5', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.4rem' }}>
          🚗 MOVE MY CAR
        </p>
        <h2 style={{ marginTop: 0 }}>{isAdminMode ? '管理员登录' : '欢迎回来'}</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>
          {isAdminMode ? '仅管理员可访问后台控制台。' : '登录你的挪车控制台，管理员可添加车主账号。'}
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          <label>
            <span>账号</span>
            <input value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder={isAdminMode ? 'admin' : '示例：yourname'} autoComplete="username" required type="text" />
          </label>
          <label>
            <span>密码</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" autoComplete="current-password" required />
          </label>
          {error && <div style={{ color: '#ff6b81' }}>{error}</div>}
          {message && <div style={{ color: 'rgba(255,255,255,0.7)' }}>{message}</div>}
          <button className="primary" disabled={loading} type="submit">
            {loading ? '正在登录...' : '进入系统'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
