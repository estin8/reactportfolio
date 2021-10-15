import './intro.scss';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me_transOutline.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Nate Hill</h1>
          <h3>Front End Web Developer</h3>
        </div>
        <a href="#portfolio">
          <ArrowCircleDownSharpIcon />
        </a>
      </div>
    </div>
  );
}
