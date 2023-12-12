const Experience = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#006BA6]">Experience</h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Freelance Web Developer (2016 - Present)</h3>
        <p className="text-gray-600 mb-2">
          I embarked on my freelancing journey in 2016, specializing in web development and content management systems (CMS). My expertise spans platforms such as WordPress, Shopify, Weebly, and Wix. I have successfully delivered tailored websites for international clients, catering to their unique needs and preferences.
        </p>
        <p className="text-gray-600">
          My commitment to excellence is reflected in my extensive portfolio of projects, showcasing proficiency in crafting dynamic and user-friendly websites on various CMS platforms.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Fiverr Freelancer (2016 - Present)</h3>
        <p className="text-gray-600 mb-2">
          At Fiverr, I have completed over 2,000 jobs, consistently earning a remarkable 5-star rating in more than 1,700 of them. This achievement underscores my dedication to delivering high-quality solutions and exceeding client expectations.
        </p>
        <p className="text-gray-600">
          My work on Fiverr encompasses a diverse range of projects, demonstrating adaptability and expertise in meeting the unique requirements of each client. I take pride in contributing to the success of businesses and individuals through my web development skills.
        </p>
        <hr className="my-4" />

        <a
          href="https://www.fiverr.com/rntprince"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white text-center px-4 py-2 rounded-md bg-[#0C3C68] hover:bg-[#092B49] transition duration-300"
          >
          Fiverr link
          </a>
      </div>
    </div>
  );
};

export default Experience;
