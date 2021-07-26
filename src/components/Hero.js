import heroImage from '../assets/hero-image.png';

const Banner = () => {

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image">
          {/* <h2>Hello</h2> */}
          <img src={heroImage} alt="Image of The Goonies movie poster" />
        </div>
      </div>
    </section>
  )
}

export default Banner;