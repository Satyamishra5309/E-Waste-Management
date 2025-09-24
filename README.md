# E-Waste Management System - Backend

This is the **backend server** for the E-Waste Management System, built with **Node.js**, **Express**, and **MongoDB**.  
It provides APIs for managing e-waste pickup, tracking, and reporting.

---

## **Features**

- User registration and authentication
- QR code tracking for e-waste items
- Department-wise task assignment and status tracking
- CRUD operations for e-waste items
- MongoDB database integration
- JSON-based RESTful API

---

## **Tech Stack**

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Environment Variables:** dotenv  
- **Version Control:** Git

---

## **Folder Structure**

e-waste-backend/
├─ src/
│ ├─ models/ # MongoDB models
│ ├─ routes/ # API routes
│ ├─ controllers/ # Route controllers (optional)
│ └─ index.js # Server entry point
├─ .env # Environment variables (ignored in Git)
├─ .gitignore
├─ package.json
└─ README.md
