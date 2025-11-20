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
      <div
        className="glass-card"
        style={{
          padding: '1.75rem',
          textAlign: 'center',
          minWidth: 360,
          maxWidth: '90vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ margin: 0, letterSpacing: '0.05em' }}>二维码</h3>
        <div
          style={{
            background: '#fff',
            padding: '1rem',
            borderRadius: 12,
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src={qrUrl} alt="QR" style={{ width: '260px', height: '260px' }} />
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <button
            className="primary"
            style={{ padding: '0.85rem 1.8rem', borderRadius: 999 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = qrUrl;
              link.download = 'move-my-car-qr.png';
              link.click();
            }}
          >
            保存
          </button>
          <button className="primary" style={{ padding: '0.85rem 1.8rem' }} onClick={onClose}>
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrModal;
