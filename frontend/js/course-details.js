// Load course details
document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');
  const title = urlParams.get('title');
  const desc = urlParams.get('desc');
  const img = urlParams.get('img');
  
  if (courseId) {
    // Load from API
    try {
      const { data } = await apiCall(`/courses/${courseId}`, 'GET');
      
      if (data.success && data.data) {
        displayCourse(data.data);
      } else {
        showMessage('Course not found', 'error');
        setTimeout(() => {
          window.location.href = 'course.html';
        }, 1500);
      }
    } catch (error) {
      console.error('Error loading course:', error);
      showMessage('Error loading course details', 'error');
    }
  } else if (title && desc && img) {
    // Load from URL parameters (fallback)
    displayCourseFromParams({
      title: decodeURIComponent(title),
      description: decodeURIComponent(desc),
      image: decodeURIComponent(img)
    });
  } else {
    showMessage('Invalid course', 'error');
    setTimeout(() => {
      window.location.href = 'course.html';
    }, 1500);
  }
});

function displayCourse(course) {
  document.getElementById('courseTitle').textContent = course.title;
  document.getElementById('courseDescription').textContent = course.description;
  document.getElementById('courseCategory').textContent = course.category || 'General';
  
  const courseImage = document.getElementById('courseImage');
  courseImage.src = course.image || 'https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-2994.jpg';
  courseImage.alt = course.title;
  
  // Set default modules based on category
  const modules = getDefaultModules(course.title || course.category);
  displayModules(modules);
}

function displayCourseFromParams(course) {
  document.getElementById('courseTitle').textContent = course.title;
  document.getElementById('courseDescription').textContent = course.description;
  document.getElementById('courseCategory').textContent = 'General';
  
  const courseImage = document.getElementById('courseImage');
  courseImage.src = course.image;
  courseImage.alt = course.title;
  
  const modules = getDefaultModules(course.title);
  displayModules(modules);
}

function displayModules(modules) {
  const modulesContainer = document.getElementById('courseModules');
  modulesContainer.innerHTML = '';
  
  modules.forEach(module => {
    const moduleItem = document.createElement('div');
    moduleItem.className = 'module-item';
    moduleItem.textContent = module;
    modulesContainer.appendChild(moduleItem);
  });
}

function getDefaultModules(courseTitle) {
  const title = courseTitle.toLowerCase();
  
  if (title.includes('web') || title.includes('development')) {
    return [
      'HTML5 and CSS3 Fundamentals',
      'JavaScript ES6+ Advanced Concepts',
      'React.js and Component Architecture',
      'State Management with Redux',
      'Backend Integration and APIs',
      'Project: Build a Full-Stack Web Application'
    ];
  } else if (title.includes('data') || title.includes('science')) {
    return [
      'Python Programming Basics',
      'Data Analysis with Pandas',
      'Statistical Analysis and Visualization',
      'Machine Learning Fundamentals',
      'Deep Learning with TensorFlow',
      'Project: Real-World Data Science Project'
    ];
  } else if (title.includes('marketing') || title.includes('digital')) {
    return [
      'SEO Fundamentals and Best Practices',
      'Google Ads and PPC Campaigns',
      'Social Media Marketing Strategies',
      'Content Marketing and Analytics',
      'Email Marketing Automation',
      'Project: Complete Marketing Campaign'
    ];
  } else if (title.includes('app') || title.includes('mobile')) {
    return [
      'Mobile App Design Principles',
      'Flutter/Dart Programming',
      'iOS Development with Swift',
      'Android Development with Kotlin',
      'App Publishing and Monetization',
      'Project: Publish Your Mobile App'
    ];
  }
  
  return [
    'Introduction and Fundamentals',
    'Intermediate Concepts',
    'Advanced Topics',
    'Best Practices',
    'Real-World Applications',
    'Final Project'
  ];
}

