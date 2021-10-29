import './intro.scss';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.webp" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi, I'm Nate</h1>

          <h3>Let's build something awesome together</h3>
        </div>
        <a href="#portfolio">
          <ArrowCircleDownSharpIcon />
        </a>
      </div>
    </div>
  );
}
