import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form verileri:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">İletişim</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>İletişim Bilgileri</h2>
          <div className="contact-info-item">
            <span className="icon">📧</span>
            <div>
              <h3>E-posta</h3>
              <p>info@englishapp.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="icon">📞</span>
            <div>
              <h3>Telefon</h3>
              <p>+90 (232) 555 0000</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Adres</h3>
              <p>
                İngilizce Caddesi No:1
                <br />
                35320 İzmir, Türkiye
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Mesaj Gönder</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Adınız</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>E-posta Adresiniz</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Konu</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mesajınız</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Gönder
            </button>
          </form>
        </div>
      </div>

      {openSnackbar && (
        <div className="snackbar">
          <span>Mesajınız başarıyla gönderildi!</span>
          <button onClick={handleCloseSnackbar}>Kapat</button>
        </div>
      )}
    </div>
  );
};

export default Contact;