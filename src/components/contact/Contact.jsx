import './contact.scss';
import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
  const [toSend, setToSend] = useState({
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_2xi3ffe',
      'template_9aywdrq',
      toSend,
      'user_IItCBgCoHrX7aw5GlpVex'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
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
        <img src="assets/skyline.webp" height="720px" alt="cincy skyline" />
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
        </form>
      </div>
    </div>
  );
}

export default Contact;
