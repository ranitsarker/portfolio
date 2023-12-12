import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="900"
      >About Me</h2>
      <p className="mb-4"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="900"
      >
        Hello! I am <strong>Ranit Sarker</strong>, a passionate Full Stack Developer with expertise in React, Node.js, and MongoDB.
        I specialize in crafting innovative web solutions that meet the unique needs of clients and users.
      </p>
      <p className="mb-4"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="900"
      >
        As a developer, I believe in the power of technology to solve complex problems and improve peoples lives. My potential lies in my ability to learn quickly, adapt to new challenges, and apply my skills to create impactful solutions.
      </p>
      <p className="mb-4"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="900"
      >
        While on this exciting journey, I acknowledge that continuous improvement is crucial. I am aware of my negative side, which can be impatience at times. However, I see challenges as opportunities for growth and strive to turn potential obstacles into learning experiences.
      </p>
      <p className="mb-4"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="900"
      >
        My main goal is to contribute to cutting-edge projects that make a positive difference. I am committed to building not just applications but meaningful experiences. I seek collaboration with like-minded individuals and teams to create impactful, scalable, and user-centric solutions.
      </p>
      <p className="mb-4"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="900"
      >
        Lets embark on this journey together and create something extraordinary!
      </p>
    </div>
  );
};

export default About;
