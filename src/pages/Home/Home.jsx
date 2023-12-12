import Banner from "../../components/Banner/Banner";
import Certifications from "../../components/Certifications/Certifications";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import InterestsHobbies from "../../components/InterestsHobbies/InterestsHobbies";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#006BA6]">Ranit Sarker</h1>
        <p className="text-[#00B3E3]">
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
