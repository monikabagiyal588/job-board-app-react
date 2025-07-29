
## Job Board Fullstack Application

A fullstack job board web application built using React, Node.js, Express, and MongoDB. It allows users to browse and apply for jobs, while recruiters can post and manage job listings.


###  Features

Job Posting: Recruiters can post jobs with filters  
Job Search & Filters: Search by title, location  
Validation:Client-side + Server-side  
Bonus:Loading spinner, search 


### Tech Stack

| Frontend             | Backend             | Database |
|----------------------|---------------------|----------|
| React + Bootstrap    | Node.js + Express   | MongoDB  |

### 1. Clone the repository

git clone https://github.com/monikabagiyal588/job-board-app-react
cd job-board-app-react

#### 2. Setup Backend

cd server
npm install
# Add your Mongo URI in .env
touch .env

`.env` example
MONGO_URI=mongodb://localhost:27017/job-board
PORT=5000

Start server:
npm start

#### 3. Setup Frontend

cd ../client
npm install
npm start
