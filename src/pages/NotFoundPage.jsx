import React from 'react'
function NotFoundPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}>
      <h1 style={{ marginBottom: '20px', color:"firebrick", fontSize:"80px"}}>Bu siteye ulaşılamıyor</h1>
      <h2>Yazımda hata olup olmadığını kontrol edin.</h2>
      <h2>Yazım doğruysa Windows Ağ Teşhisi'ni çalıştırmayı deneyin.</h2>
    </div>
  );
}

export default NotFoundPage