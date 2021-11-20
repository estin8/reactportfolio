import './intro.scss';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      {/* Container holding circle w/ image on left side */}
      <div className="left">
        <div className="imgContainer">
          <img
            src="assets/cinskyline.webp"
            width="1384px"
            height="558px"
            alt="cincinnati skyline"
          />
        </div>
      </div>
      {/* Container holding text on right side */}
      <div className="right">
        <div className="wrapper">
          <h1>Hi, I'm Nate</h1>

          <h2>Let's build something awesome together</h2>
        </div>
        <a href="#portfolio" aria-label="arrow pointing down">
          <DoubleArrowSharpIcon
            sx={{ transform: 'rotate(90deg)' }}
            alt="arrow pointing down"
          />
        </a>
      </div>
    </div>
  );
}
