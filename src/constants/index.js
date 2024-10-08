export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  export const myProjects = [
    {
      title: 'Doddlr',
      desc: 'A 3D interactive clothes customizer that allows users to design and personalize their apparel in real-time. By utilizing advanced 3D modeling and rendering, users can choose colors, textures, and patterns for various clothing items, seeing the changes instantly.',
      subdesc:
        'This app provides an easy-to-use interface for customizing clothing. Users can choose fabrics, adjust fits, and see changes instantly, making the design process simple and creative.',
      href: 'https://doddlr-xqgk-8ljj1y81m-priyanshis-projects-9db28dfa.vercel.app/',
      gitlink: 'https://github.com/priyanshi1309/Doddlr.git',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.jpg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Three.js',
          path: '/assets/threejs.svg',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Gemini AI Clone: An Intelligent Chatbot',
      desc: 'Gemini AI Clone is an innovative web application that mimics the functionalities of a conversational AI platform. This project leverages advanced AI capabilities to provide users with interactive and intelligent responses, enhancing user experience through real-time conversations.',
      subdesc:
        'Built using React and powered by Google’s Generative AI, the Gemini AI Clone features a sleek and responsive interface, allowing users to engage in dynamic dialogues.',
      href: 'https://gemini-clone-nine-lake.vercel.app/',
      gitlink: 'https://github.com/priyanshi1309/Gemini-clone.git',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        }
      ],
    },
    {
      title: 'DFU Classification',
      desc: 'This project examines the effectiveness of transfer learning models in classifying diabetic foot ulcers (DFUs) using an ensemble learning approach. It evaluates ten pretrained models, including ResNet50, InceptionV3, Xception, VGG16, MobileNetV3Small, ResNet101V2, InceptionResNetV2, MobileNetV2, and DenseNet121, based on accuracy, precision, recall, and F1 score.',
      subdesc:
        'This project highlights the potential of ensemble learning in improving diabetic foot ulcer classification and its importance for efficient treatment planning and patient care.',
      href: 'https://github.com/priyanshi1309/Foot_Ulcer_Classification/blob/main/DFU.pdf',
      gitlink: 'https://github.com/priyanshi1309/Foot_Ulcer_Classification.git',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'TensorFlow',
          path: 'assets/tensorflow.png',
        },
        {
          id: 3,
          name: 'NumPy',
          path: '/assets/numpy.png',
        },
        {
          id: 4,
          name: 'Matplotlib',
          path: '/assets/matplotlib.png',
        },
      ],
    },
    {
      title: 'Netflix Clone',
      desc: 'This project recreates the Netflix landing page as a responsive web application using modern web technologies. It focuses on delivering an engaging user interface that mirrors Netflix design, featuring a dynamic content display, user authentication, and real-time updates.',
      subdesc:
        'The project showcases the effectiveness of React and Firebase in building scalable web applications, emphasizing user experience and performance while serving as a foundation for future streaming service explorations.',
      href: 'https://netflix-clone-ten-indol.vercel.app/',
      gitlink: 'https://github.com/priyanshi1309/Netflix-Clone.git',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.ico',
      logoStyle: {
        // backgroundColor: '#0E1F38',
        // border: '0.2px solid #0E2D58',
        // boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/firebase.png',
        }
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Diginique TechLabs',
      pos: 'Web Developer Intern',
      duration: 'June 2021 - July 2021',
      title: "Focused on front-end development using HTML, CSS, and JavaScript to create responsive user interfaces, ensuring cross-browser compatibility and optimizing performance.",
    },
    {
      id: 2,
      name: 'In4Velocity',
      pos: 'Associate Software Engineer',
      duration: 'April 2024 - Present',
      title: "As a full-stack .NET developer, I design and maintain web applications with C# and ASP.NET, alongside dynamic front-end development using HTML, CSS, and JavaScript."
    }
  ];
  

  export const toolBoxItems = [
    {
      title: 'Javascript',
      icon: '/assets/javascript.png'
    },
    {
      title: 'React',
      icon: '/assets/react.svg'
    },
    {
      title: 'Github',
      icon: '/assets/github.svg'
    },
    {
      title: 'Html5',
      icon: '/assets/html.png'
    },
    {
      title: 'CSS',
      icon: '/assets/css.png'
    },
    {
      title: 'ASP.NET',
      icon: '/assets/dotnet.png'
    },
    {
      title: 'SQL',
      icon: '/assets/sql.png'
    },
    {
      title: 'TailWind',
      icon: '/assets/tailwindcss.png'
    },
  ]

 