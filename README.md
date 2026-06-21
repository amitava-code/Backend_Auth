# 🔐 Authentication System

A production-style authentication backend built with **Node.js, Express, and MongoDB** — featuring secure session-based auth, refresh token rotation, and OTP-based email verification.

---

## 📌 Overview

This project implements a complete, real-world authentication flow — not just login/register, but the full lifecycle of a secure session:

- Password hashing
- Short-lived **access tokens** + long-lived **refresh tokens**
- Refresh token **rotation** on every renewal
- Session tracking per device (IP + User-Agent)
- **Revocation** on logout (single device or all devices)
- **OTP-based email verification** before login is allowed

---

## ✨ Features

| Feature | Description |
|---|---|
| **Register** | Creates a new user with a hashed password |
| **Email OTP Verification** | Sends a 6-digit OTP via email; user must verify before logging in |
| **Login** | Validates credentials, blocks unverified accounts |
| **Access & Refresh Tokens** | 15-min access token, 7-day refresh token (httpOnly cookie) |
| **Token Rotation** | Refresh endpoint issues a new access *and* refresh token, invalidating the old one |
| **Get Me** | Returns the currently authenticated user's profile |
| **Logout** | Revokes the current session |
| **Logout All Devices** | Revokes every active session for the user |

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JSON Web Tokens (JWT)
- **Hashing:** Node.js `crypto` (SHA-256)
- **Email:** Nodemailer with Gmail OAuth2
- **Config:** dotenv

---

## 📂 Folder Structure

```
AUTHENTICATION/
├── src/
│   ├── config/
│   │   ├── config.js
│   │   └── database.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── models/
│   │   ├── otp.model.js
│   │   ├── session.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── services/
│   │   └── email.service.js
│   ├── utils/
│   │   └── utils.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user + send OTP |
| `POST` | `/api/auth/verify-email` | Verify email using OTP |
| `POST` | `/api/auth/login` | Login (blocked if email not verified) |
| `GET` | `/api/auth/me` | Get current logged-in user |
| `GET` | `/api/auth/refresh-token` | Rotate access & refresh tokens |
| `GET` | `/api/auth/logout` | Logout current session |
| `GET` | `/api/auth/logout-all` | Logout from all devices |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

GOOGLE_USER=your_gmail_address
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_oauth_refresh_token
```

---
