// src/components/Branch.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ComingSoon from './ComingSoon';
const subjects = {
  cse: {
    year1: [
      { name: 'PHY-S101', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'ESC-S101', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'MTH-S101', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'TCA-S101', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'MTH-S102', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'TCA-S102', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CHM-S101', link: 'https://drive.google.com/drive/folders/your-folder-id' },
    ],
    year2: [
      { name: 'MTH-S201', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'ESC-S202', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'EVS-S101', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'UHV-S201', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'MTH-S301', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S204', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'HSS-S401', link: 'https://drive.google.com/drive/folders/your-folder-id' },
    ],
    year3: [
      { name: 'CSE-S301', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S302', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S303', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S304', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S305', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S204', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'MTH-S301', link: 'https://drive.google.com/drive/folders/your-folder-id' },
    ],
    year4: [
      { name: 'CSE-S401', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S402', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S403', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S404', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'CSE-S204', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'MTH-S301', link: 'https://drive.google.com/drive/folders/your-folder-id' },
      { name: 'MTH-S301', link: 'https://drive.google.com/drive/folders/your-folder-id' },
    ],
  },
  // Add more branches with their respective subjects here...
};

const Branch = () => {
  const { branch } = useParams();
  const branchSubjects = subjects[branch];

  if (!branchSubjects) {
    return <ComingSoon/>;
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 border-b-4 border-green-500 py-2">{branch.toUpperCase()}</h1>
        {Object.entries(branchSubjects).map(([year, subjects]) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-3 text-center">{`Year ${year.slice(-1)}`}</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {subjects.map((subject) => (
                <a
                  key={subject.name}
                  href={subject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-green-400 px-10 rounded-lg shadow-md hover:bg-green-400 hover:text-white hover:border-transparent transition duration-300 ease-in-out"
                >
                  {subject.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branch;
