import banner from '../../assets/banner/banner.png';
import resumePDF from '../../assets/resume/resume.pdf';
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  const handleDownloadResume = () => {
    // Create an invisible link element
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?id=1qtf7mmHHCNvatuH4xj5caEYtCk1s93JQ';
    link.target = '_blank'; // Open the link in a new tab
    link.download = 'Ranit-Sarker-Resume.pdf'; // Specify the name of the downloaded file

    // Append the link to the document
    document.body.appendChild(link);

    // Simulate a click on the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero rounded-lg" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content my-4 md:my-10">
          <div className="max-w-xl"
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
          >
            <h1 className="mb-5 text-3xl font-bold text-white">Welcome to my corner of the web!</h1>
            <p className="mb-5 text-white">
              I am a Full Stack Developer passionate about crafting innovative solutions using the power of React, Node.js,
              and MongoDB. Whether it is building sleek user interfaces or robust back-end systems, I love turning ideas into
              reality. Explore my projects and journey through the world of web development with me!
            </p>
            <button 
            className=" text-white text-center px-4 py-2 rounded-md bg-[#0C3C68] hover:bg-[#092B49] transition duration-300"
            onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
