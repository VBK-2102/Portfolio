import project1 from "../assets/projects/project-1.jpg"; // Update the paths to match your project images
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg"; // Add your fifth project image path here

export const HERO_CONTENT = `I am a passionate Computer Science Engineer with a strong focus on Data Science, AI, and software development. With a track record of innovative solutions for real-world problems, I strive to leverage my skills to drive impactful changes in agriculture, healthcare, and beyond.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Computer Science Engineer with a passion for creating efficient and user-friendly applications. Currently pursuing my Bachelor's degree, I have gained experience in technologies like Python, Flask, and Machine Learning. My journey in technology began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "11th Oct 2023-11th Nov 2023",
    role: "Intern",
    company: "TEQUED Labs",
    description: `Completed coursework that covered cybersecurity fundamentals, ethical hacking practices, and Python programming, enhancing skills in securing systems and understanding vulnerabilities.`,
    technologies: ["Cybersecurity", "Ethical Hacking"],
  },
  {
    year: "30th Oct 2023-15th Dec 2023",
    role: "Intern",
    company: "TEQUED Labs",
    description: `Completed coursework that covered cybersecurity fundamentals, ethical hacking practices, and Python programming, enhancing skills in securing systems and understanding vulnerabilities.`,
    technologies: ["Python","Python Libraries" ],
  },
  {
    year: "01th May 2024-5th June 2024",
    role: "Intern",
    company: "Internship Studio",
    description: `Acquired practical experience in data analytics, focusing on methodologies for data collection, cleaning, and visualization to extract insights and support decision-making processes.`,
    technologies: ["Python", "Pandas", "Scikit-Learn","Numpy","MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Plant Disease Detection System",
    image: project1,
    description: "A crucial tool for modern agriculture that uses Convolutional Neural Networks built in PyTorch to detect plant diseases efficiently.",
    technologies: ["Python", "PyTorch", "Machine Learning"],
    github: "https://github.com/yourusername/plant-disease-detection",
  },
  {
    title: "Data Science Project",
    image: project2,
    description: "Led the end-to-end process of gathering, cleaning, visualizing, and modeling data using Python.",
    technologies: ["Python", "Data Analysis"],
    github: "https://github.com/yourusername/data-science-project",
  },
  {
    title: "Heart Disease Prediction",
    image: project3,
    description: "Built machine learning models to predict heart disease based on clinical features, achieving an accuracy of 86%.",
    technologies: ["Python", "Machine Learning", "Data Visualization"],
    github: "https://github.com/yourusername/heart-disease-prediction",
  },
  {
    title: "Farmer Management System",
    image: project4,
    description: "A web-based platform developed using Python Flask to streamline the sale and purchase of agricultural products.",
    technologies: ["Python", "Flask", "MySQL"],
    github: "https://github.com/yourusername/farmer-management-system",
  },
  {
    title: "Skin Disease Detection",
    image: project5,
    description: "An advanced system for diagnosing skin diseases through image recognition, utilizing deep learning techniques for accurate results.",
    technologies: ["Python", "Deep Learning", "Image Processing"],
    github: "https://github.com/yourusername/skin-disease-detection",
  },
];

export const CONTACT = {
  address: "Belagavi, Karnataka, India",
  phoneNo: "+91 9741721110",
  email: "vaibhavbkalungada@gmail.com",
};
