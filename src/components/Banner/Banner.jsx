import banner from '../../assets/banner/banner.png';
import resumePDF from '../../assets/resume/resume.pdf';

const Banner = () => {
  const handleDownloadResume = () => {
    // Create an invisible link element
    const link = document.createElement('a');
    link.href = resumePDF; // Set the href attribute to the PDF file's URL
    link.target = '_blank'; // Open the link in a new tab
    link.download = 'resume.pdf'; // Specify the name of the downloaded file

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
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl font-bold text-white">Welcome to my corner of the web!</h1>
            <p className="mb-5 text-white">
              I am a Full Stack Developer passionate about crafting innovative solutions using the power of React, Node.js,
              and MongoDB. Whether it is building sleek user interfaces or robust back-end systems, I love turning ideas into
              reality. Explore my projects and journey through the world of web development with me!
            </p>
            <button className="btn btn-primary text-white" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
