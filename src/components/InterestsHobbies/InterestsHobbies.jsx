import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
const InterestsHobbies = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#006BA6]"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="900"
      >Interests and Hobbies</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="900"
        >Web Development</h3>
        <p className="text-gray-600 mb-2"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="900"
        >
          I am passionate about creating dynamic and user-friendly web applications. Exploring the latest technologies and frameworks is a constant source of excitement for me.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="900"
        >Open Source Contribution</h3>
        <p className="text-gray-600 mb-2"
                      data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="900"
        >
          Contributing to open-source projects allows me to collaborate with the global developer community, learn from others, and share my knowledge.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="900"
        >Problem Solving</h3>
        <p className="text-gray-600 mb-2"
                      data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="900"
        >
          I enjoy tackling complex problems and finding elegant solutions. Problem-solving challenges, coding competitions, and algorithmic puzzles are some of my favorite activities.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="900"
        >Continuous Learning</h3>
        <p className="text-gray-600 mb-2"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="900"
        >
          Staying updated with the ever-evolving field of web development is a priority for me. I regularly engage in online courses, workshops, and attend tech conferences.
        </p>
      </div>
      {/* Add more interests and hobbies as needed */}
    </div>
  );
};

export default InterestsHobbies;
