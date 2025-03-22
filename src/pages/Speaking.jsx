import React from 'react';

const Speaking = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="icon-container">
          <div className="hardhat">🦺</div>
          <div className="wrench">🔧</div>
        </div>

        <h1 className="title">Yapım Aşamasında</h1>

        <p className="subtitle">
          Sayfamız şu anda geliştiriliyor. Çok yakında sizlerle!
        </p>

        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>

        <p className="contact">
          Sorularınız için: info@example.com
        </p>

        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <style jsx>{`
        body {
          margin: 0; /* Varsayılan margin'i sıfırlayın */
          overflow: hidden; /* Kaydırma çubuklarını gizle */
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          color: #1976d2;
          padding: 1rem;
          font-family: Arial, sans-serif;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          max-width: 42rem;
          margin: 0 auto;
          text-align: center;
        }

        .icon-container {
          position: relative;
          font-size: 64px; 
        }

        .hardhat {
          animation: bounce 2s infinite;
          color: #1976d2;
        }

        .wrench {
          position: absolute;
          top: 50%;
          right: -4rem;
          animation: spin 3s linear infinite;
          color: #1976d2;
          font-size: 48px;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(to right, #60a5fa, #1976d2);
          -webkit-background-clip: text;
          background-clip: text;
          animation: pulse 2s infinite;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #1976d2;
        }

        .progress-container {
          width: 100%;
          max-width: 28rem;
          height: 1rem;
          background-color: #374151;
          border-radius: 9999px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: #60a5fa;
          border-radius: 9999px;
          animation: progress 2s ease-in-out infinite alternate;
        }

        .contact {
          color: #1976d2;
          font-size: 1.125rem;
        }

        .dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 0.75rem;
          height: 0.75rem;
          background-color: #60a5fa;
          border-radius: 50%;
        }

        .dot:nth-child(1) { animation: bounce 1s infinite; }
        .dot:nth-child(2) { animation: bounce 1s infinite 0.2s; }
        .dot:nth-child(3) { animation: bounce 1s infinite 0.4s; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1rem); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 70%; }
        }

        @media (min-width: 768px) {
          .title {
            font-size: 4rem;
          }
          
          .subtitle {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Speaking;