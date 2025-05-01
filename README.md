Team Member Management App

A full-stack application for adding, viewing, and managing team members with Node.js, Express, MongoDB on the backend, and React.js on the frontend.

Project Description

This project allows users to:

Add new team members with details such as name, roll number, year, degree, project description, hobbies, certificates, internship, aim, and profile image.

View a list of all members in a responsive grid layout.

View detailed information for each member by clicking "View Details."

The backend uses Node.js, Express, Multer for file uploads, and MongoDB (via Mongoose) to store member data. The frontend is built with React.js and Axios for API communication.

Installation Steps

Clone the repository

git clone <repository-url>
cd <repo-folder>

Backend Setup

cd backend
npm install

Frontend Setup

cd ../frontend
npm install

API Endpoints

All backend routes are prefixed with /api/members.

Method

Endpoint

Description

POST

/api/members

Add a new member (multipart/form-data)

GET

/api/members

Get all members

GET

/api/members/:identifier

Get single member by MongoDB _id or rollNumber (depending on your routing setup)

Example Request

Add member (cURL):

curl -X POST http://localhost:5000/api/members \
  -F "name=John Doe" \
  -F "rollNumber=12345" \
  -F "year=2024" \
  -F "degree=B.Tech" \
  -F "project=Awesome Project" \
  -F "hobbies=Reading,Coding" \
  -F "certificate=NodeJS Certification" \
  -F "internship=Tech Co" \
  -F "aim=Become a Full-Stack Developer" \
  -F "image=@/path/to/image.jpg"

How to Run the App

Start the backend server (from /backend):

npm start

This starts the API server on http://localhost:5000 and serves uploaded images from /uploads.

Start the frontend (from /frontend):

npm start

This starts the React development server on http://localhost:3000.

Use the app

Navigate to http://localhost:3000/add to add a new team member.

Navigate to http://localhost:3000/members to view all members and click a member to view details.

Enjoy managing your team members easily!

