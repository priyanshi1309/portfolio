import React from 'react';
import { toolBoxItems, workExperiences } from '../constants';
import TechSlider from '../components/TechSlider';
import TextStagger from '../components/TextStagger';

const About = () => {
  return (
    <section className='c-space my-20 text-white' id='about'>
      {/* Grid Layout with responsive column sizes */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>

        {/* Tools of the Trade Section - Takes up 2 columns on larger screens */}
        <div className='border border-white rounded-lg p-6 md:p-10 md:col-span-2'>
          <h3 className='text-3xl md:text-4xl font-bold mb-4'>Tools of the Trade</h3>
          <p className='text-lg md:text-xl text-gray-300'>
            A curated selection of technologies and skills that power my creations.
          </p>

          <div className='flex mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex flex-col gap-6 flex-none py-1'>
              {/* Tech Sliders */}
              <TechSlider toolBoxItems={toolBoxItems} translateRight={false} />
              <TechSlider toolBoxItems={toolBoxItems} translateRight={true} />
              <TechSlider toolBoxItems={toolBoxItems} translateRight={false} />
            </div>
          </div>
        </div>

        {/* Beyond the 9-to-5 Section - Takes up 1 column on larger screens */}
        {/* <div className='border border-white rounded-lg p-4 md:p-6 md:col-span-1'>
          <h3 className='text-xl md:text-2xl font-bold mb-4'>Beyond the 9-to-5</h3>
          <p className='text-sm md:text-md text-gray-300 mb-6'>
            A peek into my hobbies and personal interests.
          </p> */}
          {/* Hobbies/Interests Grid */}
          {/* <div className='grid grid-cols-1 gap-4 w-fit'>
            <TextStagger href='#'>Dancing</TextStagger>
            <TextStagger href='#'>Reading</TextStagger>
            <TextStagger href='#'>Trekking</TextStagger>
            <TextStagger href='#'>Singing</TextStagger>
          </div>
        </div>  */}

        {/* Beyond the 9-to-5 Section - Takes up 1 column on larger screens */}
        <div className='border border-white rounded-lg p-6 md:p-10 md:col-span-3'>
          <h3 className='text-3xl md:text-4xl font-bold mb-4'>Work Chronicles</h3>
          <p className=' text-lg md:text-xl text-gray-300 mb-6'>
            A glimpse into my development experiences.
          </p>
          {/* Additional Hobbies/Interests Grid */}
          <div className='flex flex-col gap-4'>
            {workExperiences.map((item, index) => (
              <div key={index} className='flex flex-col md:flex-row gap-4 p-4 border-gray-300'>
                <div className='flex-1 text-white'>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                  <h3 className='text-lg'>{item.pos}</h3>
                  <h3 className='text-sm'>{item.duration}</h3>
                </div>
                <div className='flex-1 text-white'>
                  <h3 className='text-sm tracking-tight font-light'>{item.title}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
