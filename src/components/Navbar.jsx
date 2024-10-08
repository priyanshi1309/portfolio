import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navlinks = [
    {
      title: 'Projects',
      path: '#projects'  // ID of the Projects section
    },
    {
      title: 'About',
      path: '#about'  // ID of the About section
    },
    {
      title: 'Contact',
      path: '#contact'  // ID of the Contact section
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleScroll = (e, path) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);  // Close the menu after clicking a link
    }
  };

  return (
    <header className='relative px-4 sm:px-8'>
      <div className='flex justify-between items-center text-white py-4 px-4 sm:px-8'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <img className='w-10 h-10 opacity-50' src="./assets/logo.png" alt="Logo" />
          <span className='ml-2 font-bold text-xl text-[#5ebec4]'>Priyanshi</span>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className='sm:hidden'>
          <button
            className='focus:outline-none'
            onClick={toggleMenu}
          >
            <div className='space-y-1'>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white'></span>
            </div>
          </button>
        </div>

        {/* Nav Links for Large Screens */}
        <nav className='hidden sm:block'>
          <ul className='flex gap-6 text-lg sm:text-xl tracking-wide'>
            {Navlinks.map((nav, index) => (
              <li key={index} className='relative group'>
                <a href={nav.path} className='hover:text-gray-300' onClick={(e) => handleScroll(e, nav.path)}>
                  {nav.title}
                </a>
                <div className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-lg flex flex-col items-center justify-center transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden z-50`}
      >
        <button
          className='absolute top-4 right-4 text-white text-3xl focus:outline-none'
          onClick={toggleMenu}
        >
          &times;
        </button>
        <ul className='flex flex-col items-center gap-8 text-2xl text-white px-4'>
          {Navlinks.map((nav, index) => (
            <li key={index} className='group'>
              <a href={nav.path} className='hover:text-gray-300' onClick={(e) => handleScroll(e, nav.path)}>
                {nav.title}
              </a>
              <div className='w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity'></div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
