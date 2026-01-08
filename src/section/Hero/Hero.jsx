import heroIllustration from '../../assets/hero-img.png';
import avatarOne from '../../assets/avatar-one.png';
import avatarTwo from '../../assets/avatar-two.png';
import avatarThree from '../../assets/avatar-three.png';
import heroLine from '../../assets/hero-line.png';
import './Hero.css';

function Hero() {
  const testimonials = [
    {
      name: 'Andrew Schultz',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      avatar: avatarOne,
    },
    {
      name: 'Andrew Schultz',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      avatar: avatarTwo,
    },
    {
      name: 'Andrew Schultz',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
      avatar: avatarThree,
    },
  ];

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-left">
            <div className="hero-brand">
              <h1 id="hero-heading">
                Lorem ipsum{' '}
                <span className='hero-underline-text'>
                  dolor 
                  <img 
                    src={heroLine} 
                    alt="" 
                    aria-hidden="true" 
                  />
                </span>
                {' '}sit amet yo 
                <span aria-hidden="true">👋</span> 
              </h1>
            </div>

            <div className="hero-cards" aria-label="Testimonials">
              {testimonials.map((card, idx) => (
                <article 
                  className="hero-card" 
                  key={`${card.name}-${idx}`}
                >
                  <div className="card-avatar">
                    <img 
                      src={card.avatar} 
                      alt={`${card.name} avatar`} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="card-content">
                    <h2 className="card-name">{card.name}</h2>
                    <p className="card-text">{card.text}</p>
                  </div>
                </article>
              ))}

              <div className="hero-card-gradient" aria-hidden="true" />

            </div>
          </div>

          <div className="hero-right">
            <img 
              src={heroIllustration} 
              alt="Digital transaction illustration" 
              className="hero-image"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;