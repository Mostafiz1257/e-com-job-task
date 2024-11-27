# E-Commerce Platform Backend

This is the backend for a mini e-commerce platform built with Node.js and MongoDB. The backend provides APIs for user authentication, product management, and cart operations.

## Features

- **User Authentication**
  - User signup with email and password.
  - JWT-based login for secure communication.
- **Product Management**
  - Fetch products from an external API (DummyJSON API).
  - Fetch details of specific products by ID.
- **Cart Management**
  - Add, update, remove, and fetch cart data for authenticated users.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **API Integration**: DummyJSON API
- **Environment Management**: dotenv

## Installation

### Prerequisites

- Node.js installed (v16 or above).
- MongoDB installed and running locally or on a cloud service (e.g., MongoDB Atlas).

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>

2.cd <project-directory>



3. npm install
4. .env.example .env
4. npm run start:dev