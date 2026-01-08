import lockIcon from '../../assets/lock.png';
import barsIcon from '../../assets/bars.png';
import cupIcon from '../../assets/cup.png';
import './Services.css';

function Services() {
  const features = [
    {
      icon: lockIcon,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: barsIcon,
      title: '1000+ of reviews',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: cupIcon,
      title: 'And more!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-list">
          {features.map((item) => (
            <div className="service" key={item.title}>
                <div className="service-icon">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    aria-hidden="true"
                    loading="lazy" 
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-text">{item.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;