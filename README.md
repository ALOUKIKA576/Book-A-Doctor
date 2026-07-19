# 🏥 Book-A-Doctor — Smart Healthcare Appointment & Management System

A full-stack healthcare appointment management platform built with **React.js, Node.js, Express.js, MongoDB, JWT Authentication, and Bootstrap/Ant Design**. The platform connects **Patients, Doctors, and Administrators** through an intuitive and secure web application.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 Secure Authentication | JWT-based login, registration, password hashing with bcrypt, role-based access |
| 👤 Patient Dashboard | Manage profile, book appointments, upload medical records, view appointment history |
| 👨‍⚕️ Doctor Dashboard | Manage appointments, update profile, accept/reject bookings, view patient details |
| 🛡️ Admin Dashboard | Approve doctors, manage users, monitor appointments, platform analytics |
| 📅 Appointment Booking | Search doctors, check availability, schedule consultations, appointment tracking |
| 📧 Notification System | Real-time notifications for appointment updates and doctor approvals |
| 📂 Medical Document Upload | Upload prescriptions, reports, and supporting medical documents |
| 📊 Analytics Dashboard | View platform statistics including users, doctors, appointments, and pending approvals |
| 📱 Responsive UI | Fully responsive design for desktop, tablet, and mobile devices |

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Bootstrap 5
- React Bootstrap
- Ant Design
- Axios
- React Icons
- Day.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- dotenv
- CORS

### Database
- MongoDB Atlas / Local MongoDB

### Authentication
- JSON Web Tokens (JWT)
- Role-Based Access Control (Patient, Doctor, Admin)

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Book-A-Doctor.git

cd Book-A-Doctor
```

---

## 2️⃣ Backend Setup

```bash
cd server

npm install
```

Create a **.env** file inside the server folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key
```

Run the backend server.

```bash
npm start
```

or

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📁 Project Structure

```
Book-A-Doctor/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── redux/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

# 🔗 API Endpoints

| Method | Route | Description |
|---------|-------|-------------|
| POST | /api/user/register | Register a new user |
| POST | /api/user/login | User login |
| GET | /api/user/getUserData | Fetch logged-in user details |
| POST | /api/doctor/apply-doctor | Apply as a doctor |
| GET | /api/doctor/get-all-doctors | List all approved doctors |
| POST | /api/appointment/book-appointment | Book an appointment |
| GET | /api/appointment/user-appointments | Patient appointment history |
| GET | /api/doctor/doctor-appointments | Doctor appointment list |
| POST | /api/admin/get-all-users | Admin fetch all users |
| POST | /api/admin/get-all-doctors | Admin fetch all doctors |
| POST | /api/admin/change-account-status | Approve or reject doctor applications |

---

# 👥 User Roles

### 👤 Patient

- Register/Login
- Update profile
- Search doctors
- Book appointments
- Upload medical reports
- View appointment history
- Receive appointment notifications

---

### 👨‍⚕️ Doctor

- Apply for doctor account
- Update professional profile
- Manage appointments
- Accept/Reject appointment requests
- View patient information
- Receive booking notifications

---

### 🛡️ Administrator

- Approve or reject doctor registrations
- Manage patients and doctors
- View system statistics
- Monitor appointments
- Manage platform users

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📈 Future Enhancements

- 💳 Online payment integration (Stripe/Razorpay)
- 📹 Video consultation support
- 💬 Real-time chat between doctor and patient
- 📱 Mobile application (React Native)
- 🤖 AI symptom checker
- 📅 Google Calendar integration
- 📧 Email & SMS appointment reminders
- ⭐ Doctor ratings and reviews
- 📄 Digital prescription generation
- 📊 Advanced healthcare analytics

---

# 👥 **Team Members**
- Kottapalli Sai Aloukika(Team Lead)
- Uppalapati Somyasri
- Konatham Vijaya Bhaskar Reddy
- Kombathula Chandrakala
- Kotapuri Miriam
