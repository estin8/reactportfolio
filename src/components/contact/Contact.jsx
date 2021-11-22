import './contact.scss';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Image from 'material-ui-image';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Contact() {
  // Style for left-side image
  const imgStyle = {
    minWidth: '200%',
    maxHeight: '100%',
    objectFit: 'fill',
    marginLeft: '-250px',
    marginRight: '-250px',
    overflow: 'hidden',
    '@include mobile': {
      display: 'none',
    },
  };

  // Code to deal with contact form
  const [toSend, setToSend] = useState({
    message: '',
    reply_to: '',
  });

  // Code to deal with success message after contact submit
  const [sentSuccess, setSentSuccess] = useState(false);

  const onSubmit = (e) => {
    const apiKey = process.env.REACT_APP_EMAIL_API_KEY;
    e.preventDefault();
    send('service_2xi3ffe', 'template_9aywdrq', toSend, apiKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSentSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const iconStyle = {
    width: '80px',
    height: '80px',
    fontWeight: 'bold',
    m: -0.5,
    '&:hover': {
      color: 'lightblue',
    },
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <Image
          src="https://nates.vercel.app/assets/skyline.webp"
          imageStyle={imgStyle}
          alt="cincy skyline"
        />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <div className="socials">
          <a href="https://github.com/estin8" aria-label="Github">
            <GitHubIcon sx={iconStyle} />
          </a>
          <a href="https://www.twitter.com/yabba_dabba_ew" aria-label="Twitter">
            <TwitterIcon sx={iconStyle} />
          </a>
          <a href="mailto:natehilldev@gmail.com" aria-label="Email">
            <AlternateEmailIcon sx={iconStyle} />
          </a>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
          {sentSuccess && (
            <span style={{ color: 'white' }}>
              Thanks! I'll get back to you as soon as possible.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
