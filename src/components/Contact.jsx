import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_USER_ID
    )
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again.');
          setIsSending(false);
      });

    formRef.current.reset();
  };

  return (
    <section id="contact" className="p-8 bg-gradient-to-r from-lightPrimary to-lightSecondary min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white p-12 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6 text-secondary">Contact Me</h2>
          <p className="text-lg mb-8 text-secondaryLight">Feel free to reach out via email or social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="md:w-1/2 space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-blue transition duration-300 ${isSending ? 'animate-pulse' : ''}`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
