# Backend README (Mechanical Keyboards E-commerce)

## Introduction
The backend of the Mechanical Keyboards E-commerce website is built using Node.js, Express, and MongoDB. This server-side application manages product data, handles user authentication, and processes payments via Stripe.

## Features
- User authentication (signup, login, JWT-based token generation).
- Product management (CRUD operations for products).
- Admin dashboard functionality.
- Stripe integration for secure payments.
- Cart and checkout processing.
- MongoDB-based database for product and user management.

## Technology Stack
- **Node.js** (Runtime environment)
- **Express** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (MongoDB ORM)
- **Zod** (Validation)
- **Stripe** (Payment processing)
- **JWT** (Token-based authentication)

## Installation Guideline

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- npm or yarn (package manager)

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/mechanical-keyboards-ecommerce.git
cd mechanical-keyboards-ecommerce/backend
npm install
PORT=5000
DB_URL=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
npm run dev
API Endpoints
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login an existing user and generate a JWT.
GET /api/products - Retrieve the list of products.
POST /api/products - Create a new product (admin only).
PATCH /api/products/:id - Update an existing product (admin only).
DELETE /api/products/:id - Delete a product (admin only).
POST /api/orders - Create a new order.
POST /api/checkout - Process a payment via Stripe.
Configuration
PORT: The port on which the backend server runs (default: 5000).
DB_URL: MongoDB connection URI for the database.
JWT_SECRET: Secret key for generating and verifying JWT tokens.
STRIPE_SECRET_KEY: Secret key for processing payments via Stripe.
Additional Information
The backend is designed to interact with the frontend client. Ensure both are configured correctly, especially in terms of API URLs and payment keys.