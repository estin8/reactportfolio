import './topbar.scss';
import { Mail, PhoneAndroid } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            natehill
          </a>
          <div className="itemContainer">
            <PhoneAndroid className="icon" />
            <span className="links">
              <a
                className={'links ' + (menuOpen && 'active')}
                href="tel:5132023217"
              >
                513 202 3217
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a
                className={'links ' + (menuOpen && 'active')}
                href="mailto:natehilldev@gmail.com"
              >
                natehilldev@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
