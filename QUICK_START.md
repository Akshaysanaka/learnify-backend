# Quick Start Commands

## Step 1: Navigate to Backend Folder
```bash
cd backend
```

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Make Sure MongoDB is Running
Make sure MongoDB is running on `localhost:27017`. If not already running:

### Windows (if MongoDB is installed as a service, it should auto-start)
```bash
# If MongoDB is installed but not running, start it:
net start MongoDB
```

### Or if MongoDB is in your PATH:
```bash
mongod
```

## Step 4: Start the Backend Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Step 5: (Optional) Seed Initial Course Data
Open a new terminal/command prompt and run:
```bash
cd backend
npm run seed
```

## Step 6: Start Frontend Server
Open a new terminal and run:

```bash
# Navigate to frontend folder
cd frontend

# Install frontend dependencies (only first time)
npm install

# Start frontend server
npm start
```

The frontend will run on `http://localhost:8000`

Then open `http://localhost:8000` in your browser

## Complete Command Sequence (Copy & Paste)

```bash
# 1. Install dependencies
cd backend
npm install

# 2. Start the server (in one terminal)
npm run dev

# 3. (Optional) Seed courses (in another terminal)
npm run seed

# 4. Start frontend server (in another terminal)
cd ../frontend
npm install
npm start

# Then open http://localhost:8000 in browser
```

## Check if Everything is Working

1. Backend API: Open `http://localhost:5000/api/health` in browser
   - Should show: `{"status":"OK","message":"Learnify API is running"}`

2. Frontend: Open `http://localhost:8000` (or open HTML files directly)
   - Should show the Learnify homepage

3. Test Signup/Login: Try creating an account on the signup page

