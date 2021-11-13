import './contact.scss';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Image from 'material-ui-image';

function Contact() {
  // Style for left-side image
  const imgStyle = {
    width: '1900px',
    height: '100%',
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
  return (
    <div className="contact" id="contact">
      <div className="left">
        <Image
          src="assets/skyline.webp"
          imageStyle={imgStyle}
          alt="cincy skyline"
        />
      </div>
      <div className="right">
        <h2>Contact</h2>
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
            <span>Thanks! I'll get back to you as soon as possible.</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
