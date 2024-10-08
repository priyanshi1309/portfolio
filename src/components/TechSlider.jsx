import React from 'react';

const TechSlider = ({ toolBoxItems, translateRight }) => {
  const doubleArray = [...toolBoxItems, ...toolBoxItems]
  return (
    <div className="relative overflow-hidden w-full"> 
      <div
        className={`flex
          ${translateRight ? '-translate-x-1/4 animate-move-right' : 'animate-move-left'}`}
      >
            {doubleArray.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-center justify-center border 
                border-white p-2 w-fit rounded-lg text-violet-100 m-2"
              >
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
                <span>{item.title}</span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TechSlider;
