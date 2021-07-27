import logo from '../assets/netflix-retro-logo.png';
import profileImg from '../assets/profile-chris.png'

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="retro netflix logo" />
      {/* image src Rafael Serra https://www.fael.pt/ */}
      <img className="nav__user" src={profileImg} alt="User icon" />
    </nav>
  )
}

export default Navbar;