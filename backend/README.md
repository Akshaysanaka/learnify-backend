# Learnify Backend API

Backend server for Learnify e-learning platform built with Node.js, Express, and MongoDB.

## Features

- User authentication (Signup/Login)
- Contact form submissions
- Course management
- MongoDB database integration
- JWT authentication

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on `localhost:27017` on your system.

3. Create a `.env` file in the backend folder and add:
```
MONGODB_URI=mongodb://localhost:27017/learnify
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
```

**Note**: The default MongoDB URI is already set to `mongodb://localhost:27017/learnify`. If you don't create a `.env` file, it will automatically use this connection string.

## Running the Server

### Development mode (with nodemon):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/all` - Get all contact submissions

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create new course

### Health Check
- `GET /api/health` - Check API status

## Database Models

- **User**: Stores user information (name, email, password)
- **Contact**: Stores contact form submissions
- **Course**: Stores course information

