import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
const FeaturedProject = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[#006BA6]"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="900"
                >Featured Project</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="900"
                        >Building management:</h3>
                            <p
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="900"
                            >The Building Management System is a sophisticated web application aimed at enhancing the overall residential experience within an apartment complex. With a responsive design catering to various devices, the system seamlessly integrates Tanstack query functionality for efficient data retrieval. The homepage boasts a dynamic navbar featuring user-specific elements like a profile picture, providing quick access to user-related actions.</p><br />

                            <p
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="900"
                            >This feature-rich system includes an intuitive Apartment page where users can view detailed information about available apartments, complete with images, floor numbers, block names, apartment numbers, and rent details. The user-friendly interface facilitates agreement processes, allowing users to submit requests and store relevant information in the database. Pagination ensures a structured presentation of apartment details.</p><br />

                            <p
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="900"
                            >Private Dashboards for Users, Members, and Admins cater to specific roles. Users can manage their profiles, view announcements, and explore available services. Members gain additional functionalities such as making payments, checking payment history, and accessing announcements. Admins, on the other hand, have a comprehensive dashboard for managing members, making announcements, handling agreement requests, and managing coupons.</p><br />

                            <p
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="900"
                            >Bonus features include an Admin Profile with detailed statistics, JWT implementation for secure login, the ability for admins to change coupon availability, and seamless handling of successful payments. Altogether, the Apartment Management System serves as an efficient and user-friendly platform, enhancing the residential experience for both residents and administrators.</p>
                            <hr className="my-4" />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            >
                                <a
                                href="https://building-management-31565.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-white text-center px-4 py-2 rounded-md bg-[#0C3C68] hover:bg-[#092B49] transition duration-300"
                                >
                                Live Link
                                </a>
                                <a
                                href="https://github.com/ranitsarker/building-management-client"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-white text-center px-4 py-2 rounded-md bg-[#0C3C68] hover:bg-[#092B49] transition duration-300"
                                >
                                Code link - client
                                </a>
                                <a
                                href="https://github.com/ranitsarker/building-management-server"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-white text-center px-4 py-2 rounded-md bg-[#0C3C68] hover:bg-[#092B49] transition duration-300"
                                >
                                Code link - server
                                </a>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default FeaturedProject;