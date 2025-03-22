import React from 'react';
import '../styles/aboutUs.css'

const AboutUs = () => {
  const features = [
    {
      icon: '📘',
      title: 'Sözcükler',
      description: 'Oxford tarafından olmazsa olmaz denilen kelimelerle, kelime bilginize güç katın',
    },
    {
      icon: '🖇️',
      title: 'Bağlaçlar',
      description: 'Akıcı İnglizce konuşmanın verimi için bağlaçların kullanımına hakim olun',
    },
    {
      icon: '📖',
      title: 'Deyimler',
      description: 'Detaylı deyim hazinemiz ile deyimleri daha iyi anlayın',
    },
    {
      icon: '🔗',
      title: 'Deyimleşmiş Fiiller',
      description: 'Fiillerin detayına inerek günlük konuşma becerilerinizi artırın ',
    },
    {
      icon: '📚',
      title: 'Hikayeler',
      description: 'Çeşitli hikayeler ile dil kullanımının çeşitli yönlerine hakim olun',
    },
    {
      icon: '🗣️',
      title: 'Konuşma',
      description: 'Yapım aşamasında olan konuşma araçlarımızla İnglizceyi her daim konuşma fırsatına sahip olun',
    },
  ];

  const team = [
    {
      name: 'Selçuk Erdoğan',
      role: 'Kurucu & CEO',
      description: '10+ yıl yöneticilik deneyimi',
    },
    {
      name: 'Ayşe Kaya',
      role: 'İçerik Editörü',
      description: '15+ yıl araştırmacı yazar ',
    },
    {
      name: 'Mehmet Demir',
      role: 'Veri Analisti',
      description: 'İstatistik ve veri analizi uzmanı',
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Hakkımızda</h1>

      <div className="about-intro">
        <h2>İngilizce Tutkusu</h2>
        <p>
          2025 yılında kurulan English App, İngilizceye hakim olan veya hakim olmak isteyen kişiler için kapsamlı bir bilgi kaynağı olmayı hedeflemektedir. Amacımız, dilin gereksinimlerini edinmek isteyen kişilere fazla bilgiyi tek bir kaynak ile en hızlı şekilde ulaştırmaktır.
        </p>
      </div>

      <h2 className="about-subtitle">Özelliklerimiz</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mission-vision">
        <div className="mission">
          <h2>Misyonumuz</h2>
          <p>
            İngilizcenin öğrenilmesine katkıda bulunmak ve insanlara en kaliteli içeriği 
            sunmak için çalışıyoruz. İngilizcenin öğrenim ve kullanımını yaygınlaştırmak ve dil sevgisini 
            artırmak temel hedeflerimiz arasındadır.
          </p>
        </div>
        <div className="vision">
          <h2>Vizyonumuz</h2>
          <p>
            En zengin ve kapsamlı İngilizce platformu olmak için çalışıyoruz. 
            Teknoloji ve dili bir araya getirerek, İngilizce severlere benzersiz bir deneyim 
            sunmayı amaçlıyoruz.
          </p>
        </div>
      </div>

      <h2 className="about-subtitle">Ekibimiz</h2>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="avatar">{member.name[0]}</div>
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;