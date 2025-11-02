# Learnify - E-Learning Platform

A full-stack e-learning platform built with HTML/CSS frontend and Node.js/Express/MongoDB backend.

## Project Structure

```
pooji/
├── frontend/          # Frontend HTML/CSS/JavaScript files
│   ├── index.html
│   ├── home.html
│   ├── login.html
│   ├── signup.html
│   ├── course.html
│   ├── about.html
│   ├── contact.html
│   ├── style.css
│   └── js/
│       └── api.js    # API helper functions
└── backend/           # Backend Node.js/Express API
    ├── server.js      # Main server file
    ├── models/        # MongoDB models
    ├── routes/        # API routes
    ├── scripts/       # Utility scripts
    └── package.json
```

## Features

- User Authentication (Signup/Login)
- Contact Form Submission
- Course Management
- MongoDB Database Integration
- RESTful API

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on `localhost:27017` on your system.

4. (Optional) Create a `.env` file in the backend folder if you want to customize settings:
```
MONGODB_URI=mongodb://localhost:27017/learnify
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
```

**Note**: The default MongoDB connection is already configured for `localhost:27017`. If you don't create a `.env` file, it will automatically use `mongodb://localhost:27017/learnify`.

5. Start the backend server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

6. (Optional) Seed initial course data:
```bash
npm run seed
```

The backend API will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend server:
```bash
npm start
```

4. Access the application at `http://localhost:8000`

**Note**: Make sure the backend server is running before using the frontend, as the forms need to connect to the API.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Contact
- `POST /api/contact/submit` - Submit contact form

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create new course

## Technologies Used

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs (Password hashing)
- CORS

## Environment Variables

(Optional) Create a `.env` file in the backend folder with the following variables:

- `MONGODB_URI` - MongoDB connection string (default: `mongodb://localhost:27017/learnify`)
- `PORT` - Server port (default: 5000)
- `JWT_SECRET` - Secret key for JWT tokens (default: uses placeholder)

**Note**: The application is configured to use `localhost:27017` by default. You only need to create a `.env` file if you want to customize these settings.

## Database Models

- **User**: Stores user information (name, email, password)
- **Contact**: Stores contact form submissions
- **Course**: Stores course information

## Usage

1. Start the MongoDB server on `localhost:27017`
2. Start the backend server (`npm run dev` in the backend folder)
3. Open the frontend HTML files in a browser
4. Sign up or login to create an account
5. Browse courses and submit contact forms

## Notes

- The frontend uses `http://localhost:5000` as the API base URL. Update `frontend/js/api.js` if your backend runs on a different port.
- For production, update the CORS settings in `backend/server.js` to restrict access to your domain.
- Change the JWT_SECRET in production for security.

