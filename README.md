<div align="center">

<img src="./front/src/assets/logo.png" alt="ChatRealTime logo" width="110" />

# ChatRealTime 💬⚡

**A real-time full-stack chat application built with React, Node.js, Express, MongoDB and Socket.IO.**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=flat-square&logo=socket.io&logoColor=white)](https://socket.io/)
[![GitHub](https://img.shields.io/badge/GitHub-FerdinandJuko-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ferdinandjuko/Chat-Realtime)

</div>

---

## ✨ About the project

**ChatRealTime** is a personal full-stack messaging project focused on real-time communication between users.

The application combines a React frontend with an Express/MongoDB backend and uses **Socket.IO** for live messaging. Authentication, avatar setup, user retrieval and message persistence are handled through REST endpoints, while real-time events are exchanged through WebSockets.

The project is also a practical playground for working with:

- React component architecture
- REST API integration with Axios
- real-time communication with Socket.IO
- MongoDB data persistence with Mongoose
- user authentication and password hashing
- profile avatar generation
- client-side routing and state handling

---

## 🚀 Features

| Area | Implementation |
|---|---|
| Authentication | User registration and login |
| Security | Password hashing with `bcrypt` |
| Messaging | Real-time communication with `Socket.IO` |
| Persistence | MongoDB + Mongoose |
| Avatars | Local avatar generation with `@multiavatar/multiavatar` |
| API communication | Axios |
| Routing | React Router |
| UI styling | Styled Components |
| Notifications | React Toastify |
| Emoji support | Emoji Picker React |
| User discovery | Retrieve available users from the backend |

---

## 🧱 Tech Stack

### Frontend

<p>
<img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-6.14-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-1.4-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.IO_Client-4.7-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
<img src="https://img.shields.io/badge/Styled_Components-6.0-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />
</p>

**Main frontend packages**

- React `18.2.0`
- React DOM `18.2.0`
- React Router DOM `6.14.1`
- Axios `1.4.0`
- Socket.IO Client `4.7.1`
- Styled Components `6.0.3`
- React Toastify `9.1.3`
- Emoji Picker React `4.4.9`
- React Icons `4.10.1`
- Multiavatar `1.0.7`
- UUID `9.0.0`

### Backend

<p>
<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.IO-4.6-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
</p>

**Main backend packages**

- Express `4.18.2`
- Mongoose `7.2.2`
- Socket.IO `4.6.2`
- bcrypt `5.1.0`
- CORS `2.8.5`
- dotenv `16.1.4`
- nodemon `2.0.22`

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│          React App           │
│      localhost:3000          │
│                              │
│  Pages • Components • UI     │
│  Axios • Socket.IO Client    │
└──────────────┬───────────────┘
               │
        REST API + WebSocket
               │
               ▼
┌──────────────────────────────┐
│      Node.js / Express       │
│      localhost:5000          │
│                              │
│ Auth • Users • Messages      │
│ Socket.IO • Mongoose         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│           MongoDB            │
│ mongodb://localhost:27017    │
│            /chat             │
└──────────────────────────────┘
```

---

## 📁 Project Structure

```text
Chat-Realtime/
│
├── back/
│   ├── controllers/
│   ├── ...
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── front/
    ├── src/
    │   ├── assets/
    │   ├── pages/
    │   ├── utils/
    │   └── ...
    ├── package.json
    └── .env
```

The frontend API routes are centralized in:

```text
front/src/utils/APIRoutes.js
```

---

## 🔌 API Routes used by the frontend

```js
/api/auth/register
/api/auth/login
/api/auth/setAvatar
/api/auth/getallUsers

/api/messages/addmsg
/api/messages/getmsg
```

The frontend builds these URLs from:

```env
REACT_APP_URL_BACK=http://localhost:5000
```

---

## ⚙️ Environment Variables

### Backend

Create a `.env` file inside the `back` directory:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/chat
```

### Frontend

Create a `.env` file inside the `front` directory:

```env
REACT_APP_URL_BACK=http://localhost:5000
```

> Do not commit environment files containing secrets or production credentials.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ferdinandjuko/Chat-Realtime.git
cd Chat-Realtime
```

### 2. Make sure MongoDB is running

The development configuration expects a local MongoDB instance:

```text
mongodb://localhost:27017/chat
```

### 3. Install and start the backend

```bash
cd back
npm install
npm start
```

The backend starts on:

```text
http://localhost:5000
```

### 4. Install and start the frontend

Open another terminal:

```bash
cd front
npm install
npm start
```

The React application starts on:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Backend

| Script | Command | Description |
|---|---|---|
| Start | `npm start` | Starts the backend with Nodemon |
| Test | `npm test` | Placeholder test script |

### Frontend

| Script | Command | Description |
|---|---|---|
| Start | `npm start` | Starts the React development server |
| Build | `npm run build` | Creates a production build |
| Test | `npm test` | Runs the React test runner |
| Eject | `npm run eject` | Ejects Create React App configuration |

---

## 🔄 Real-Time Messaging Flow

```text
User A
  │
  │ sends message
  ▼
React Client
  │
  ├──── REST ─────► Express API ─────► MongoDB
  │
  └── Socket.IO ──► Socket.IO Server
                           │
                           ▼
                       User B
```

REST endpoints handle application data and persistence, while Socket.IO provides the live communication layer between connected users.

---

## 👤 Avatar Generation

The project uses:

```text
@multiavatar/multiavatar
```

Avatars are generated locally on the frontend and then stored through the backend avatar endpoint.

This avoids depending on the old remote Multiavatar API and removes the browser CORS dependency for avatar generation.

---

## 🛠️ Development Notes

### React/Webpack cache

If Create React App reports an unexpected source-map or React Refresh error even though dependencies are correctly installed, clear the development cache and restart:

```text
front/node_modules/.cache
```

Then run:

```bash
npm start
```

### Backend URL

If the frontend cannot reach the API, verify:

```env
REACT_APP_URL_BACK=http://localhost:5000
```

and restart the React development server after changing `.env`.

---

## 🧭 What this project demonstrates

ChatRealTime is intentionally more than a UI exercise. It demonstrates the complete flow of a small real-time application:

```text
React
   ↓
REST API / Socket.IO
   ↓
Express
   ↓
Mongoose
   ↓
MongoDB
```

It covers both request/response communication and persistent real-time connections, making it a useful project for practicing full-stack JavaScript architecture.

---

## 🔗 Repository

**GitHub:** [github.com/ferdinandjuko/Chat-Realtime](https://github.com/ferdinandjuko/Chat-Realtime)

### Clone

```bash
git clone https://github.com/ferdinandjuko/Chat-Realtime.git
```

---

## 👨‍💻 Author

<div align="center">

**Ferdinand Juko**

Backend Software Developer · PHP/Symfony · JavaScript/React

[![GitHub](https://img.shields.io/badge/GitHub-ferdinandjuko-181717?style=for-the-badge&logo=github)](https://github.com/ferdinandjuko)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ferdinandjuko-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ferdinandjuko)

</div>

---

<div align="center">

### 💬 Built to explore real-time communication from frontend to database.

`React` • `Express` • `MongoDB` • `Socket.IO`

</div>
