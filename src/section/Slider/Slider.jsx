import { useMemo, useState } from 'react';
import microsoftLogo from '../../assets/microsoft-logo.png';
import twitterLogo from '../../assets/twitter-logo.png';
import cocaColaLogo from '../../assets/cola-logo.png';
import sliderLine from '../../assets/slider-line.png';
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import './Slider.css';

function Slider() {
  const logos = useMemo(
    () => [
      { name: 'Microsoft', src: microsoftLogo },
      { name: 'Twitter', src: twitterLogo },
      { name: 'Coca-Cola', src: cocaColaLogo },
    ],
    [],
  );

  const [startIndex, setStartIndex] = useState(0);

  const visible = (count) =>
    new Array(count)
      .fill(null)
      .map((_, i) => logos[(startIndex + i) % logos.length]);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % logos.length);
  };

  const itemsToShow = Math.min(3, logos.length);

  return (
    <section className="slider" aria-labelledby="slider-heading">
      <div className="container">
        <div className="slider-top">
          <div className="slider-heading-wrap">
            <h2 className="slider-heading">Trusted by</h2>
            <img 
              src={sliderLine} 
              alt="" 
              className="slider-underline" 
            />
          </div>

          <p className="slider-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Vitae, in tristique senectus dui pharetra sit.
          </p>
        </div>

        <div className="slider-track">
          <button
            type="button"
            className="slider-arrow"
            onClick={prevSlide}
            aria-label="Show previous brand"
          >
            <img src={chevronLeft} alt="" aria-hidden="true" />
          </button>

          <div className="slider-logos">
            {visible(itemsToShow).map((logo) => (
              <div className="slider-logo-wrap" key={logo.name}>
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="slider-logo" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow"
            onClick={nextSlide}
            aria-label="Show next brand"
          >
            <img src={chevronRight} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Slider;