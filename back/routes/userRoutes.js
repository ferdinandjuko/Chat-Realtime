import express from "express";
import { login, register, setAvatar, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/setavatar/:id", setAvatar);
router.post("/getallusers/:id", getAllUsers);

export default router;