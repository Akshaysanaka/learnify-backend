// Load courses from API
document.addEventListener('DOMContentLoaded', async () => {
  const courseGrid = document.querySelector('.course-grid');
  
  if (courseGrid) {
    try {
      const { data } = await apiCall('/courses', 'GET');
      
      if (data.success && data.data) {
        courseGrid.innerHTML = '';
        
        data.data.forEach(course => {
          const courseCard = document.createElement('div');
          courseCard.className = 'course-card';
          courseCard.style.cursor = 'pointer';
          courseCard.onclick = () => {
            window.location.href = `course-details.html?id=${course._id}`;
          };
          
          courseCard.innerHTML = `
            <img src="${course.image || 'https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-2994.jpg'}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button class="btn-view-course">View Details</button>
          `;
          
          courseGrid.appendChild(courseCard);
        });
      } else {
        // Fallback to default courses if API fails
        loadDefaultCourses();
      }
    } catch (error) {
      console.error('Error loading courses:', error);
      loadDefaultCourses();
    }
  }
});

function loadDefaultCourses() {
  const courseGrid = document.querySelector('.course-grid');
  if (!courseGrid) return;
  
  const defaultCourses = [
    {
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript, React, and more to build powerful websites and web apps.',
      image: 'https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg',
      id: 'web-dev'
    },
    {
      title: 'Data Science',
      description: 'Python, statistics, machine learning, and real-world data projects.',
      image: 'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-583.jpg',
      id: 'data-science'
    },
    {
      title: 'Digital Marketing',
      description: 'Master SEO, Google Ads, analytics, social media, and more.',
      image: 'https://img.freepik.com/free-vector/creative-digital-marketing-agency-banner_23-2148924390.jpg',
      id: 'digital-marketing'
    },
    {
      title: 'App Development',
      description: 'Learn to build Android and iOS apps using Flutter, Kotlin, and Swift.',
      image: 'https://img.freepik.com/free-vector/mobile-app-development_24877-54239.jpg',
      id: 'app-dev'
    }
  ];
  
  courseGrid.innerHTML = '';
  defaultCourses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.style.cursor = 'pointer';
    courseCard.onclick = () => {
      window.location.href = `course-details.html?title=${encodeURIComponent(course.title)}&desc=${encodeURIComponent(course.description)}&img=${encodeURIComponent(course.image)}`;
    };
    
    courseCard.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button class="btn-view-course">View Details</button>
    `;
    
    courseGrid.appendChild(courseCard);
  });
}

