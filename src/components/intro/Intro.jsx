import './intro.scss';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      {/* Container holding circle w/ image on left side */}
      <div className="left">
        <div className="imgContainer">
          <img
            src="assets/profile-pic.png"
            width="700px"
            height="700px"
            alt="nate hill"
          />
        </div>
      </div>
      {/* Container holding text on right side */}
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
