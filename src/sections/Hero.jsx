import React from 'react';
import TextSpan from '../components/TextSpan';
import Navbar from '../components/Navbar';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons

const Hero = () => {
  const FirstName = "PRIYANSHI".split('');
  const LastName = "PANDEY".split('');

  return (
    <section className='w-[100vw] h-[100vh] flex flex-col'>
      <Navbar />
      <div className='flex px-6 sm:px-8 md:px-10 justify-between items-center flex-1'>
        {/* Main content on the left */}
        <div className='relative cursor-none'>
          <p className='text-white text-xl p-2 tracking-wider'>Hi, my name is</p>
          {FirstName.map((letter, index) => (
            <TextSpan key={index}>
              {letter}
            </TextSpan>
          ))}
          <br />
          {LastName.map((letter, index) => (
            <TextSpan key={index}>
              {letter}
            </TextSpan>
          ))}
          {/* Button to pass the resume drive link */}
          <div className='mt-8'>
            <a
              href='https://drive.google.com/file/d/1aOmmSAG60oSCA5LbW_yvpidhxCXWT0TI/view?usp=sharing'  // Replace with your actual Google Drive link
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#5ebec4] text-white py-2 px-6 rounded-full text-lg tracking-wide hover:bg-[#356b6e] transition-all duration-300'
            >
              View My Resume
            </a>
          </div>
        </div>

        {/* Vertical section for social media links on the right */}
        <div className='flex flex-col items-center justify-center h-full mr-6'>
          <a href="https://github.com/priyanshi1309" target="_blank" rel="noopener noreferrer" className='mb-4'>
            <FaGithub className='w-8 h-8 text-white hover:text-[#5ebec4] transition-all duration-300 transform hover:scale-110' />
          </a>
          <a href="https://www.instagram.com/priyanshiii1309/" target="_blank" rel="noopener noreferrer" className='mb-4'>
            <FaInstagram className='w-8 h-8 text-white hover:text-[#5ebec4] transition-all duration-300 transform hover:scale-110' />
          </a>
          <a href="https://x.com/palakmanu1309" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='w-8 h-8 text-white hover:text-[#5ebec4] transition-all duration-300 transform hover:scale-110' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
