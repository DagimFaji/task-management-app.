Task Management App
A fullstack Task Management App demonstrating skills in Node.js, React (Next.js), and Flutter, built for Abyssinia Software Solutions' Fullstack Developer role. The app allows users to create, view, and delete tasks via a web interface and view tasks on a mobile app.
Features

Node.js Backend: REST API to manage tasks (create, read, delete) using Express.
React Frontend: Interactive web interface to manage tasks, built with React and styled with Tailwind CSS (via CDN).
Flutter Mobile App: Cross-platform mobile app to view tasks.

Technologies Used

Node.js/Express: Backend API.
React/Next.js: Frontend interface (simplified to a static HTML file with React via CDN).
Flutter: Mobile app development.
Tailwind CSS: Styling (via CDN).

Getting Started
Prerequisites

Node.js (for backend)
Flutter SDK (for mobile app)
A web browser (for frontend)

Setup
Backend (Node.js)

Navigate to the backend/ directory:cd backend


Install dependencies:npm install express


Start the server:node server.js



Frontend (React)

Navigate to the frontend/ directory:cd frontend


Open index.html in a web browser to view the app. Ensure the backend server is running at http://localhost:5000.

Mobile (Flutter)

Navigate to the mobile/ directory:cd mobile


Run the Flutter app:flutter run

Ensure an emulator or physical device is connected, and the backend server is running.

Usage

Web Interface: Add tasks by typing in the input field and clicking "Add Task." Delete tasks by clicking the "Delete" button next to each task.
Mobile App: View the list of tasks fetched from the backend API.

Deployment

Backend: Deploy to a service like Heroku by pushing the backend/ directory.
Frontend: Host index.html on a static hosting service like GitHub Pages.
Mobile: Build the Flutter app for iOS/Android using flutter build.

Contact

Name: Dagim Faji
Email: dagimfaji@gmail.com
GitHub: github.com/dagimfaji
LinkedIn: linkedin.com/in/dagimfaji
