import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from 'http';

import authRoutes from "./routes/userRoutes.js";
import messageRoute from "./routes/messagesRoutes.js";
import { connectDB } from "./config/dbConn.js";

import { Server } from "socket.io";

dotenv.config();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONT_URL,
].filter(Boolean);

// Connect to MongoDB
connectDB();

// Middlewares
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "ChatRealTime API is running"
  });
});

// REST API
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);

// Socket.Io
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

const onlineUsers = new Map();

io.on("connection", (socket) => {

  console.log("Socket connected:", socket.id);

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {

    const sendUserSocket = onlineUsers.get(data.to);

    if (sendUserSocket) {
      socket
        .to(sendUserSocket)
        .emit("msg-recieve", data.message);
    }

  });

  socket.on("disconnect", () => {

    for (const [userId, socketId] of onlineUsers.entries()) {

      if (socketId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }

    }

    console.log("Socket disconnected:", socket.id);
  });

});


// Start only after MongoDB is connected
mongoose.connection.once("open", () => {

  console.log("Connected to MongoDB");

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on port ${PORT}`);
  });

});


mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});