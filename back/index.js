import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import http from 'http';
import authRoutes from "./routes/userRoutes.js";
import messageRoute from "./routes/messagesRoutes.js";
import { connectDB } from "./config/dbConn.js";
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);

const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on port ${PORT}`);
  })
})

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});