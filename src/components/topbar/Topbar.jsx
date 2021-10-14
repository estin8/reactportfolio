import './topbar.scss';
import { Mail, PhoneAndroid } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            natehill.
          </a>
          <div className="itemContainer">
            <PhoneAndroid className="icon" />
            <span>513 207 5985</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>nathantylerhill88@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
