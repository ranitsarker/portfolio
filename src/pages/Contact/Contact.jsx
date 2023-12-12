const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">
        I did love to hear from you! Feel free to reach out through the form below or connect with me on social media.
      </p>
      <form className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
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
          <a href="https://linkedin.com/in/your-username" className="text-blue-500 hover:underline">LinkedIn</a>
        </li>
        <li className="list-inline-item ml-4">
          <a href="https://github.com/your-username" className="text-gray-800 hover:underline">GitHub</a>
        </li>
        {/* Add more social media links as needed */}
      </ul>
    </div>
  );
};

export default Contact;
