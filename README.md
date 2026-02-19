# Developer Portfolio

A full-stack interactive developer portfolio built with React, TypeScript, and Flask.

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Framer Motion, Vanilla CSS
- **Backend:** Python, Flask, Flask-PyMongo
- **Database:** MongoDB

## Core Features

- **Interactive UI:** Smooth animations and transitions.
- **Responsive Design:** Works on Mobile, Tablet, and Desktop.
- **Contact Form:** Sends messages to the specific backend API and stores them in MongoDB.
- **Dynamic Content:** Easy to update projects and about information.

## Setup Instructions

### Prerequisites

- Node.js installed
- Python installed
- MongoDB installed and running locally on default port (27017)

### 1. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the server:

```bash
python app.py
```

The backend runs at `http://127.0.0.1:5000`.

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will be running at `http://localhost:5173`.

## Environment Variables

Create a functions `.env` file in the `backend` folder if you need to customize the MongoDB URI:

```
MONGO_URI=mongodb://localhost:27017/portfolio_db
```
