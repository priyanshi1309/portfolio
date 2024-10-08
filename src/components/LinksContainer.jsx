import React from 'react';

const LinksContainer = () => {
  return (
    <div className="w-full mx-auto mt-24">
      <ul className="flex justify-center space-x-4">
        <li>
          <a
            href="https://twitter.com/RiccardoZanutta"
            target="_blank"
            rel="noopener noreferrer"
            className="relative  w-20 h-20 bg-gray-900 rounded-full text-white flex items-center justify-center transition-opacity duration-500 ease-in-out"
          >
            <span className="fab fa-twitter text-3xl" />
            <span className="absolute inset-0 rounded-full border border-gray-900 opacity-80 transform transition-transform duration-500 ease-in-out group-hover:scale-150" />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/rickzanutta/"
            className="relative  w-20 h-20 bg-gray-900 rounded-full text-white flex items-center justify-center transition-opacity duration-500 ease-in-out"
          >
            <span className="fab fa-codepen text-3xl" />
            <span className="absolute inset-0 rounded-full border border-gray-900 opacity-80 transform transition-transform duration-500 ease-in-out group-hover:scale-150" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Riccardo-Zanutta"
            target="_blank"
            rel="noopener noreferrer"
            className="relative  w-20 h-20 bg-gray-900 rounded-full text-white flex items-center justify-center transition-opacity duration-500 ease-in-out"
          >
            <span className="fab fa-github text-3xl" />
            <span className="absolute inset-0 rounded-full border border-gray-900 opacity-80 transform transition-transform duration-500 ease-in-out group-hover:scale-150" />
          </a>
        </li>
        <li>
          <a
            href="https://it.linkedin.com/in/riccardozanutta"
            target="_blank"
            rel="noopener noreferrer"
            className="relative  w-20 h-20 bg-gray-900 rounded-full text-white flex items-center justify-center transition-opacity duration-500 ease-in-out"
          >
            <span className="fab fa-linkedin text-3xl" />
            <span className="absolute inset-0 rounded-full border border-gray-900 opacity-80 transform transition-transform duration-500 ease-in-out group-hover:scale-150" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksContainer;
