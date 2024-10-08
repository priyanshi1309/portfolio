# My Portfolio

Welcome to my personal portfolio! This project showcases my skills, projects, and experience using modern web technologies. Explore the interactive features and feel free to get in touch through the contact form.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

This portfolio website is built to highlight my professional journey, projects, and skills. It features interactive 3D graphics, smooth animations, and responsive design to provide an engaging user experience.

## Features

- **Interactive 3D Graphics**: Leveraging Three.js and React Three Fiber for immersive visuals.
- **Smooth Animations**: Implemented with Framer Motion for dynamic transitions.
- **Responsive Design**: Ensures compatibility across various devices and screen sizes.
- **Contact Form**: Integrated with EmailJS for seamless communication.
- **Dynamic Routing**: Utilizes React Router DOM for efficient navigation.

## Technologies Used

### Frontend Libraries

- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **React Router DOM**: ^6.26.2
- **React Icons**: ^5.3.0
- **Framer Motion**: ^11.9.0
- **React Simple Maps**: ^3.0.0

### 3D and Animation

- **Three.js**: ^0.169.0
- **@react-three/fiber**: ^8.17.9
- **@react-three/drei**: ^9.114.0
- **@types/three**: ^0.169.0
- **Vanta.js**: ^0.5.24

### Utilities

- **EmailJS**: [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser) ^4.4.1

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/yourportfolio.git
   cd yourportfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure EmailJS**

   - Sign up at [EmailJS](https://www.emailjs.com/) and obtain your **Service ID**, **Template ID**, and **User ID**.
   - Create a `.env` file in the root directory and add your EmailJS credentials:

     ```env
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_EMAILJS_USER_ID=your_user_id
     ```

4. **Run the Project**

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000`.

## Usage

- **Navigate** through different sections to explore my projects, skills, and experience.
- **Interact** with 3D elements and animations for an engaging experience.
- **Contact Me** using the form to get in touch for collaborations or inquiries.


## License

This project is licensed under the [MIT License](LICENSE).

---

*Thank you for visiting my portfolio!*
