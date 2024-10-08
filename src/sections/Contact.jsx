import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Map from '../components/Map';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing specific icons

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_928w1je', 'template_v68o5k7', form.current, {
                publicKey: 'yXHWAtkbIsdMP_sX0',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };
    return (
        <section id='contact'>
            <div className='relative'>
                <div className='w-[90vw] mx-auto'>
                    <form
                        className='mt-15 flex flex-col justify-center items-center gap-5 sm:w-[60%] md:w-[40%] w-full'
                        onSubmit={handleSubmit}
                        ref={form}
                    >
                        <label className='text-white text-3xl'>Contact Me</label>
                        <input
                            name='name'
                            className='p-2 rounded-lg outline-none w-full'
                            type='text'
                            placeholder='Name'
                        />
                        <input
                            name='email'
                            className='p-2 rounded-lg outline-none w-full'
                            type='email'
                            placeholder='Email'
                        />
                        <textarea
                            name='messages'
                            className='p-2 rounded-lg outline-none w-full'
                            placeholder='Write a message'
                            rows={6}
                        />
                        <button
                            className='p-2 border-none tracking-widest uppercase rounded-lg outline-none text-white bg-[#5ebec4] hover:bg-[#316468] w-full text-bold'
                            type='submit'
                        >
                            Send
                        </button>
                    </form>
                    <div className='flex gap-8 my-5 items-center justify-evenly w-full sm:w-[60%] md:w-[40%]'>
                        <a href="https://github.com/priyanshi1309" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='w-8 h-8 text-white hover:text-[#5ebec4] transition-all duration-300 transform hover:scale-110' />
                        </a>
                        <a href="https://www.instagram.com/priyanshiii1309/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='w-8 h-8 text-white hover:text-[#5ebec4] transition-all duration-300 transform hover:scale-110' />
                        </a>
                        <a href="https://x.com/palakmanu1309" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='w-8 h-8 text-white hover:text-[#5ebec4] transition-all duration-300 transform hover:scale-110' />
                        </a>
                    </div>
                </div>
                {/* Map background */}
                <div
                    className='absolute right-0 bottom-0 h-full -z-10 w-full'
                    style={{
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent 0%, #141515 20%, #151716 80%, transparent 100%)',
                        maskImage:
                            'linear-gradient(to bottom, transparent 0%, #211c1c 20%, #252323 80%, transparent 100%)',
                    }}
                >
                    <Map />
                </div>
            </div>
        </section>
    );
};

export default Contact;
