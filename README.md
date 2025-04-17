# CRM Backend API

A robust Customer Relationship Management backend built with **Node.js**, **Express**, and **MongoDB**. This system features role-based access control for **Employers** and **Managers** to efficiently manage leads and users.

## ✨ Features

- **Authentication & Authorization**
  - Secure JWT-based authentication
  - Role-based access control (Employer, Manager)

- **Employer Capabilities**
  - Dashboard analytics with lead status visualization
  - User management (create and manage Managers)
  - Complete lead lifecycle management

- **Manager Capabilities**
  - Access to assigned leads only
  - Lead status updates and tracking

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Security**: JSON Web Tokens (JWT), bcryptjs for password hashing
- **Configuration**: dotenv for environment management

## 📂 Project Structure

```
crm-backend/
├── config/              # Configuration files
│   └── db.js           # MongoDB connection setup
├── controllers/         # Route handler logic
├── middleware/          # Authentication & authorization
├── models/              # Mongoose data models
│   ├── User.js         # User schema (Employer/Manager)
│   └── Lead.js         # Lead schema
├── routes/              # API route definitions
├── .env                 # Environment variables (not tracked)
├── server.js            # Application entry point
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/crm-backend.git
   cd crm-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/crm
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The server will be available at `http://localhost:5000`

## 📡 API Reference

### Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/login` | Authenticate user | Public |

### Employer Routes

*Requires `employer` role*

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employer/dashboard-stats` | Retrieve lead statistics |
| POST | `/api/employer/managers` | Create a new manager |
| GET | `/api/employer/managers` | List all managers |
| POST | `/api/employer/leads` | Create a new lead |
| GET | `/api/employer/leads` | List all leads |
| GET | `/api/employer/leads/:id` | Get lead details |
| PUT | `/api/employer/leads/:id` | Update lead |
| DELETE | `/api/employer/leads/:id` | Delete lead |

### Manager Routes

*Requires `manager` role*

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/manager/leads` | View assigned leads |
| PATCH | `/api/manager/leads/:id` | Update lead status |

### Authentication Header

Include the JWT token in all protected requests:

```
Authorization: Bearer <your-jwt-token>
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📦 Deployment

### Production Setup

```bash
npm run build
npm start
```

### Docker Support

```bash
docker build -t crm-backend .
docker run -p 5000:5000 crm-backend
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

For issues, questions, or contributions, please reach out via:
- GitHub Issues
- Email: anasbhr1@hotmail.com

---

Built with ❤️ by Anasbhr1