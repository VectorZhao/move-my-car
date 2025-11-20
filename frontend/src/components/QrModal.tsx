import React from 'react';

interface Props {
  qrUrl: string | null;
  onClose: () => void;
}

const QrModal: React.FC<Props> = ({ qrUrl, onClose }) => {
  if (!qrUrl) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0 }}>二维码</h3>
        <img src={qrUrl} alt="QR" style={{ width: '260px', height: '260px' }} />
        <button className="primary" style={{ marginTop: '1rem' }} onClick={onClose}>
          关闭
        </button>
      </div>
    </div>
  );
};

export default QrModal;
