import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="font-Inter text-xs">
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">Tours</a>
        </li>
        <div>
          <a href="">
            <img src={logo} alt="" className="w-[180px] h-[61px] mt-[-20px]" />
          </a>
        </div>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
