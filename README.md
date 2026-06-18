# Opura AI Shopping Assistant

An AI-powered shopping assistant built using React, Node.js, and Express.

## Features

- AI Product Search
- Product Recommendations
- Product Detail View
- Product Comparison
- Wishlist Management
- Voice Search
- Responsive UI
- Mock AI Chat Assistant
- REST API Integration

---

## Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- CORS
- Morgan

---

## Project Structure

opura-ai-shopping-assistant

├── client

│ ├── src

│ │ ├── components

│ │ ├── pages

│ │ ├── context

│ │ ├── services

│ │ └── App.jsx

│ └── package.json

├── server

│ ├── controllers

│ ├── routes

│ ├── data

│ └── server.js

└── README.md

---

## Features Implemented

### AI Search

Search examples:

- running shoes
- trail shoes
- basketball shoes
- budget shoes
- premium shoes

### Product Cards

- Product Image
- Product Name
- Price
- Discount
- Wishlist Button
- Compare Button

### Product Details

- Product Images
- Description
- Sizes
- Colors
- Features

### Compare Products

Compare up to 3 products.

### Wishlist

Add and remove products.

### Voice Search

Use microphone button to search products.

---

## API Endpoints

### Products

GET /api/products

GET /api/products/:id

### AI Chat

POST /api/chat

Request:

{
  "message": "running shoes"
}

### Compare

POST /api/compare

Request:

{
  "ids": ["1","2","3"]
}

---

## Installation

### Backend

cd server

npm install

npm start

Server runs on:

http://localhost:5000

### Frontend

cd client

npm install

npm run dev

Frontend runs on:

http://localhost:5173

---

## Screenshots

Add screenshots here before submission.

- Home Page
- AI Search Results
- Product Details
- Compare Page
- Wishlist Page

---

## Author

Shraddha Vinesh Raut

B.Tech Computer Engineering

Government College of Engineering, Jalgaon