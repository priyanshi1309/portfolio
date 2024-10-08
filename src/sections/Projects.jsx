import React,{ Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas} from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"
import Demo from '../components/Demo';
import CanvasLoader from '../components/CanvasLoader';
import AnimatedBorder from '../components/AnimatedBorder';
const projectCount = myProjects.length;
const Projects = () => {
    const [selectedProjectindex, setSelectedProjectindex] = useState(0);
    const currentProject = myProjects[selectedProjectindex];
    const handleNavigation = (direction) => {
        setSelectedProjectindex((prevIndex) => {
            if(direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex-1;
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }
  return (
    <section className='c-space my-10' id='projects'>
    {/* <AnimatedBorder> */}
        <div className="grid md:grid-cols-2
            grid-cols-1 mt-2 gap-5 w-full">
            <div className="flex flex-col gap-5 relative
            sm:p-10 py-0 px-5">
                <div className='flex flex-col gap-5 my-5'>
                    <p className='flex gap-4 items-center text-[#D3D9D4] text-2xl font-semibold'>
                        <div style={currentProject.logoStyle}>
                            <img src={currentProject.logo} className='w-5
                            h-5 shadow-sm' alt="" />
                        </div>
                        {currentProject.title}
                    </p>
                    <p className='text-[#d3d9d4]'>{currentProject.desc}</p>
                    <p className='text-[#d3d9d4]'>{currentProject.subdesc}</p>
                    <div className='flex items-center justify-between 
                        flex-wrap gap-5'>
                            <div className='flex items-center gap-3'>
                                {currentProject.tags.map((tag,index) => (
                                    <div key={index} className='tech-logo'>
                                        <img src={tag.path} alt="tech-logo" />
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center gap-3'>
                            <a className='flex items-center gap-2 cursor-pointer 
                                text-white-600' href={currentProject.gitlink} 
                                target='_blank' rel='noreferrer'>
                                <img src='/assets/github.svg' className='w-8 h-8' />
                            </a><a className='flex items-center gap-2 cursor-pointer 
                                text-white-600  bg-white rounded-full' href={currentProject.href} 
                                target='_blank' rel='noreferrer'>
                                <img src='/assets/website.png' className='w-8 h-8' />
                            </a>
                            </div>
                            
                    </div>
                    <div className='flex justify-between items-center
                    mt-4'>
                        <button className='arrow-btn' 
                            onClick={()=> handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png" alt="left-arrow"
                                className='w-4 h-4'/>
                        </button>
                        <button className='arrow-btn' 
                            onClick={()=> handleNavigation('next')}>
                                <img src="/assets/right-arrow.png" alt="right-arrow"
                                className='w-4 h-4'/>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='bg-transparent h-96 md:h-full'>
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[-0.3, -2.5, 0]} rotation={[0, -0.1, 0]}>
                                    <Demo texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false} />
                    </Canvas>
                </div>
        </div>
    {/* </AnimatedBorder> */}
        
    </section>
)
}

export default Projects