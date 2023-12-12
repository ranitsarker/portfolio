import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
const Education = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const educationData = [
      { degree: "Degree Pass (BBS)", institution: "Govt. Titumir College, Dhaka", year: "2017" },
      { degree: "Higher National Diploma (HND) - Aerospace engineering - BTEC", institution: "Aeronautical College of Bangladesh", year: "2014" },
      { degree: "National Diploma (ND) - Aerospace engineering - BTEC", institution: "Aeronautical College of Bangladesh", year: "2012" },
      { degree: "HSC", institution: "Gaibandha Govt. College", year: "2010" },
      { degree: "SSC", institution: "Gaibandha Govt. High School", year: "2008" },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#006BA6]"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="900"
        >Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationData.map((item, index) => (
            <div key={index} className="bg-white p-4 border border-gray-300 rounded-md"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="900"
            >
              <h3 className="text-lg font-bold mb-2">{item.degree}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-gray-600">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Education;
  