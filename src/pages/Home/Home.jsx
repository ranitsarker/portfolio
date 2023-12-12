import Banner from "../../components/Banner/Banner";
import Certifications from "../../components/Certifications/Certifications";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import InterestsHobbies from "../../components/InterestsHobbies/InterestsHobbies";
import Skills from "../../components/Skills/Skills";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
import ranit from '../../assets/ranit/ranit.png'

const Home = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
      <img
          src={ranit}
          alt="Ranit"
          className="rounded-full w-40 h-40 mx-auto mb-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="900"
        />
        <h1 className="text-3xl font-bold text-[#006BA6]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="900"
        >Ranit Sarker</h1>
        <p className="text-[#00B3E3]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="900"
        >
            <i>Full Stack Developer | React, Node.js, MongoDB | Crafting innovative web solutions.</i>
        </p>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <FeaturedProject></FeaturedProject>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Experience></Experience>
      </div>
      <div>
        <Education></Education>
      </div>
      <div>
        <Certifications></Certifications>
      </div>
      <div>
        <InterestsHobbies></InterestsHobbies>
      </div>
    </div>
  );
};

export default Home;
