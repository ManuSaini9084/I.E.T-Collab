import React, { useState, useEffect } from 'react';
import Header from './Header';
import video from './vid.mp4';

function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading delay for demonstration
    const timeout = setTimeout(() => {
      setVideoLoaded(true);
    },1000); // Adjust delay time as needed or remove if not needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen">

      <div className="relative h-96">
        <video
          className={`w-full h-full object-cover transition-opacity ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>

       
        <div className={`absolute inset-0 flex items-center justify-center text-white p-4 text-center ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold">
            Welcome to Our Website
          </h1>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
