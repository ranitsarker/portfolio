import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
const Certifications = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#006BA6]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="900"
      >Certifications</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="900"
        >BASIS - Web Application Development - PHP</h3>
        <p className="text-gray-600 mb-2"
                      data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="900"
        >Issued by: Bangladesh Association of Software and Information Services (BASIS)</p>
        <p className="text-gray-600 mb-2"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="900"
        >Date: 24/7/2017 - 6/11/2017</p>
      </div>
      {/* Add more certifications as needed */}
    </div>
  );
};

export default Certifications;
