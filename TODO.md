# Deployment Steps for Learnify

## Prerequisites
- [ ] Create a GitHub account if you don't have one
- [ ] Create a Render account at https://render.com
- [ ] Create a MongoDB Atlas account at https://www.mongodb.com/atlas

## Step 1: Set up MongoDB Atlas Database
1. Go to https://www.mongodb.com/atlas and sign up/login
2. Create a new project (name it "learnify")
3. Build a new cluster (choose the free tier)
4. Create a database user:
   - Go to Database Access > Add New Database User
   - Username: learnify-user
   - Password: choose a strong password
   - Built-in Role: Read and write to any database
5. Set up IP whitelist:
   - Go to Network Access > Add IP Address
   - Add 0.0.0.0/0 (allow from anywhere) for development
6. Get connection string:
   - Go to Clusters > Connect > Connect your application
   - Copy the connection string
   - Replace <password> with your database user password
   - Replace <database> with "learnify"
7. Update backend/.env file:
   - Replace the MONGODB_URI with your actual connection string
   - Change JWT_SECRET to a random secure string

## Step 2: Prepare Backend for Deployment
1. Create a GitHub repository for the backend:
   - Go to GitHub > New repository
   - Name: learnify-backend
   - Make it public or private
   - Don't initialize with README
2. Push backend code to GitHub:
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/learnify-backend.git
   git push -u origin main
   ```

## Step 3: Deploy Backend to Render
1. Go to https://render.com and login
2. Click "New" > "Web Service"
3. Connect your GitHub repository (learnify-backend)
4. Configure the service:
   - Name: learnify-backend
   - Environment: Node
   - Build Command: npm install
   - Start Command: npm start
5. Add Environment Variables:
   - MONGODB_URI: your MongoDB Atlas connection string
   - JWT_SECRET: your secure JWT secret
   - NODE_ENV: production
6. Click "Create Web Service"
7. Wait for deployment to complete
8. Note the backend URL (something like https://learnify-backend.onrender.com)

## Step 4: Prepare Frontend for Deployment
1. Update frontend/js/api.js:
   - Replace 'https://your-backend-render-url.onrender.com/api' with your actual backend URL
2. Create a GitHub repository for the frontend:
   - Name: learnify-frontend
3. Push frontend code to GitHub:
   ```bash
   cd ../frontend
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/learnify-frontend.git
   git push -u origin main
   ```

## Step 5: Deploy Frontend to Render
1. Go back to Render dashboard
2. Click "New" > "Web Service"
3. Connect your GitHub repository (learnify-frontend)
4. Configure the service:
   - Name: learnify-frontend
   - Environment: Node
   - Build Command: npm install
   - Start Command: npm start
5. Add Environment Variable:
   - NODE_ENV: production
6. Click "Create Web Service"
7. Wait for deployment to complete
8. Note the frontend URL (something like https://learnify-frontend.onrender.com)

## Step 6: Test the Deployment
1. Open the frontend URL in your browser
2. Try signing up for a new account
3. Try logging in
4. Check if courses load
5. Test the contact form

## Troubleshooting
- If backend fails to connect to MongoDB, check your connection string and IP whitelist
- If frontend can't connect to backend, verify the API_BASE_URL in api.js
- Check Render logs for any errors
- Make sure all environment variables are set correctly

## Security Notes
- Change the JWT_SECRET to a long random string
- In production, restrict MongoDB Atlas IP access to Render's IP ranges
- Consider adding HTTPS enforcement if needed
