# MERN Stack User Management API

A complete MERN stack backend application for user management with full CRUD operations.

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Compass

### Installation
```bash
npm install
npm run dev
```

## 📋 API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/v1/User/userSignup` | Create single user | `{"details": {"firstName": "John", "lastName": "Doe", "email": "john@example.com", "mobileNumber": "123", "password": "pass"}}` |
| POST | `/api/v1/User/userSignupMany` | Create multiple users | `{"details": [user1, user2]}` |
| GET | `/api/v1/User/getUsers` | Get all users | - |
| GET | `/api/v1/User/getUser/:id` | Get user by ID | - |
| PUT | `/api/v1/User/updateUser/:id` | Update user by ID | `{"firstName": "Updated Name"}` |
| PUT | `/api/v1/User/modifyMail` | Update email by name | `{"name": "John", "email": "new@example.com"}` |
| DELETE | `/api/v1/User/deleteUser/:id` | Delete user by ID | - |

## 🛠️ Testing

### Thunder Client (VS Code)
1. Install Thunder Client extension
2. Create new request with method and URL
3. Add JSON body for POST/PUT requests
4. Set `Content-Type: application/json` header

### Example Request
```bash
curl -X POST http://localhost:21000/api/v1/User/userSignup \
  -H "Content-Type: application/json" \
  -d '{"details":{"firstName":"Test","lastName":"User","email":"test@example.com","mobileNumber":"123","password":"pass"}}'
```

## 📁 Project Structure
```
├── apis-function/
│   └── user-funtions.js    # User CRUD operations
├── db-connect/
│   └── db.js               # Database connection
├── models/
│   └── user.js             # User schema
├── routes/
│   └── basic-routes.js     # API routes
├── index.js                # Server entry point
└── package.json
```

## 🔧 Configuration

- **Port:** 21000
- **Database:** `mongodb://localhost:27017/Mern_Internship_4`
- **Collection:** `users`

## 📝 Scripts

```bash
npm start      # Production mode
npm run dev    # Development mode with nodemon
```

## 🐛 Common Issues

1. **Port in use:** Kill process with `sudo lsof -ti:21000 | xargs kill -9`
2. **DB connection failed:** Ensure MongoDB is running
3. **Data not showing:** Check database name in MongoDB Compass

## 🎯 Features

- ✅ Full CRUD operations
- ✅ MongoDB integration
- ✅ Error handling
- ✅ CORS enabled
- ✅ JSON middleware
- ✅ Professional API responses

---

**Server URL:** http://localhost:21000