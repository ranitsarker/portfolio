const Education = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Degree</th>
              <th className="py-2 px-4 border-b">Institution</th>
              <th className="py-2 px-4 border-b">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Degree Pass (BBS)</td>
              <td className="py-2 px-4 border-b">Govt. Titumir College, Dhaka</td>
              <td className="py-2 px-4 border-b">2017</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Higher National Diploma (HND) - Aerospace engineering - BTEC</td>
              <td className="py-2 px-4 border-b">Aeronautical College of Bangladesh</td>
              <td className="py-2 px-4 border-b">2014</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">National Diploma (ND) - Aerospace engineering - BTEC</td>
              <td className="py-2 px-4 border-b">Aeronautical College of Bangladesh</td>
              <td className="py-2 px-4 border-b">2012</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">HSC</td>
              <td className="py-2 px-4 border-b">Gaibandha Govt. College</td>
              <td className="py-2 px-4 border-b">2010</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">SSC</td>
              <td className="py-2 px-4 border-b">Gaibandha Govt. High School</td>
              <td className="py-2 px-4 border-b">2008</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
