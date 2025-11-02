const mongoose = require('mongoose');
const Course = require('../models/Course');
require('dotenv').config();

// MongoDB Connection - Using localhost:27017
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/learnify';

const courses = [
  {
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React, and more to build powerful websites and web apps.',
    image: 'https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg',
    category: 'Programming'
  },
  {
    title: 'Data Science',
    description: 'Python, statistics, machine learning, and real-world data projects.',
    image: 'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-583.jpg',
    category: 'Data Science'
  },
  {
    title: 'Digital Marketing',
    description: 'Master SEO, Google Ads, analytics, social media, and more.',
    image: 'https://img.freepik.com/free-vector/creative-digital-marketing-agency-banner_23-2148924390.jpg',
    category: 'Marketing'
  },
  {
    title: 'App Development',
    description: 'Learn to build Android and iOS apps using Flutter, Kotlin, and Swift.',
    image: 'https://img.freepik.com/free-vector/mobile-app-development_24877-54239.jpg',
    category: 'Mobile Development'
  },
  {
    title: 'Python Programming',
    description: 'Master Python from basics to advanced topics including OOP, data structures, and algorithms.',
    image: 'https://img.freepik.com/free-vector/python-programming-concept-illustration_114360-1819.jpg',
    category: 'Programming'
  },
  {
    title: 'UI/UX Design',
    description: 'Learn user interface and user experience design principles, tools, and best practices.',
    image: 'https://img.freepik.com/free-vector/ui-ux-design-concept-illustration_114360-5540.jpg',
    category: 'Design'
  },
  {
    title: 'Cloud Computing',
    description: 'AWS, Azure, and Google Cloud Platform essentials for modern cloud infrastructure.',
    image: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-4199.jpg',
    category: 'Technology'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect systems and networks from cyber threats. Learn ethical hacking and security protocols.',
    image: 'https://img.freepik.com/free-vector/cybersecurity-concept-illustration_114360-5857.jpg',
    category: 'Security'
  },
  {
    title: 'Machine Learning',
    description: 'Deep dive into ML algorithms, neural networks, and AI model development.',
    image: 'https://img.freepik.com/free-vector/machine-learning-concept-illustration_114360-8270.jpg',
    category: 'Data Science'
  },
  {
    title: 'Graphic Design',
    description: 'Adobe Photoshop, Illustrator, and design principles for creating stunning visuals.',
    image: 'https://img.freepik.com/free-vector/graphic-design-concept-illustration_114360-8245.jpg',
    category: 'Design'
  },
  {
    title: 'Blockchain Development',
    description: 'Build decentralized applications using blockchain technology and smart contracts.',
    image: 'https://img.freepik.com/free-vector/blockchain-technology-concept-illustration_114360-7697.jpg',
    category: 'Programming'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing with Premiere Pro, After Effects, and DaVinci Resolve.',
    image: 'https://img.freepik.com/free-vector/video-editing-concept-illustration_114360-6884.jpg',
    category: 'Media'
  }
];

async function seedCourses() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing courses
    await Course.deleteMany({});

    // Insert courses
    const insertedCourses = await Course.insertMany(courses);
    console.log(`Successfully seeded ${insertedCourses.length} courses`);
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding courses:', error);
    process.exit(1);
  }
}

seedCourses();

