import { FaPlay, FaInfo } from 'react-icons/fa';
import titleImage from '../assets/hero-title.png';

const Banner = () => {

  return (
    <section className="hero">
        <div className="hero__image"></div>
      <div className="hero__container">
        <div className="hero__text">
          <img src={titleImage} alt="Goonies movie title" />
          <p>A young teenager named Mikey Walsh finds an old treasure map in his father's attic. Hoping to save their homes from demolition, Mikey and his friends Data Wang, Chunk Cohen, and Mouth Devereaux run off on a big quest to find the secret stash of Pirate One-Eyed Willie.</p>
          <div className="hero__buttons">
            <button className="hero__buttons-play"><FaPlay className="hero__buttons-icon" />Play</button>
            <button className="hero__buttons-info"><FaInfo className="hero__buttons-icon" />More Info</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;