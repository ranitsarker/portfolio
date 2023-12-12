import Certifications from "../../components/Certifications/Certifications";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
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
      <div className="mb-8">
        <p className=" text-[#05192B] text-center">
        Welcome to my corner of the web! I am a Full Stack Developer passionate about crafting innovative solutions using the power of React, Node.js, and MongoDB. Whether it is building sleek user interfaces or robust back-end systems, I love turning ideas into reality. Explore my projects and journey through the world of web development with me!

        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Project</h2>
            <div className="mb-4">
                <h3 className="text-xl font-bold">Building management:</h3>
                    <p>The Building Management System is a sophisticated web application aimed at enhancing the overall residential experience within an apartment complex. With a responsive design catering to various devices, the system seamlessly integrates Tanstack query functionality for efficient data retrieval. The homepage boasts a dynamic navbar featuring user-specific elements like a profile picture, providing quick access to user-related actions.</p><br />

                    <p>This feature-rich system includes an intuitive Apartment page where users can view detailed information about available apartments, complete with images, floor numbers, block names, apartment numbers, and rent details. The user-friendly interface facilitates agreement processes, allowing users to submit requests and store relevant information in the database. Pagination ensures a structured presentation of apartment details.</p><br />

                    <p>Private Dashboards for Users, Members, and Admins cater to specific roles. Users can manage their profiles, view announcements, and explore available services. Members gain additional functionalities such as making payments, checking payment history, and accessing announcements. Admins, on the other hand, have a comprehensive dashboard for managing members, making announcements, handling agreement requests, and managing coupons.</p><br />

                    <p>Bonus features include an Admin Profile with detailed statistics, JWT implementation for secure login, the ability for admins to change coupon availability, and seamless handling of successful payments. Altogether, the Apartment Management System serves as an efficient and user-friendly platform, enhancing the residential experience for both residents and administrators.</p>
                    <hr />
                    <p><a href="https://building-management-31565.web.app/" target="_blank" rel="noopener noreferrer"><u>Live link</u></a></p>
                    <p><a href="https://github.com/ranitsarker/building-management-client" target="_blank" rel="noopener noreferrer"><u>Code link - client</u></a></p>
                    <p><a href="https://github.com/ranitsarker/building-management-server" target="_blank" rel="noopener noreferrer"><u>Code link - server</u></a></p>
                    
            </div>
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
