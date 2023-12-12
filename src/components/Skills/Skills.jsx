import mongodb from '../../assets/mern/mongodb.png'
import express from '../../assets/mern/express.png'
import react from '../../assets/mern/react.png'
import node from '../../assets/mern/node.png'
const Skills = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#006BA6]">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* MongoDB */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src={mongodb}
            alt="MongoDB Logo"
            className="w-24 h-24 mb-2"
          />
          <p className="text-center">MongoDB</p>
          <progress className="my-4 progress progress-success w-56" value="60" max="100"></progress>
        </div>

        {/* Express.js */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src={express} 
            alt="Express.js Logo"
            className="w-24 h-24 mb-2"
          />
          <p className="text-center">Express.js</p>
          <progress className="my-4 progress progress-success w-56" value="70" max="100"></progress>

        </div>

        {/* React */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src={react} 
            alt="React Logo"
            className="w-24 h-24 mb-2"
          />
          <p className="text-center">React</p>
          <progress className="my-4 progress progress-success w-56" value="90" max="100"></progress>

        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src={node}
            alt="Node.js Logo"
            className="w-24 h-24 mb-2"
          />
          <p className="text-center">Node.js</p>
          <progress className="my-4 progress progress-success w-56" value="70" max="100"></progress>

        </div>
      </div>
    </div>
  );
};

export default Skills;
