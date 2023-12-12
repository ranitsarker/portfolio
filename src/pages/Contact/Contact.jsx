import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully');
        form.current.reset();

      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
    <Toaster></Toaster>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">
        I would love to hear from you! Feel free to reach out through the form below or connect with me on social media.
      </p>
      <form ref={form} onSubmit={sendEmail} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
          <input type="text" id="name" name="user_name" className="w-full p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
          <input type="email" id="email" name="user_email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded-md" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
      <p>
        You can also find me on:
      </p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/ranit-sarker-586074b4/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><u>LinkedIn</u></a>
        </li>
        <li className="list-inline-item">
          <a href="https://github.com/ranitsarker" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><u>GitHub</u></a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
