import express from "express";
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

// GET all users
router.get("/", getUsers);

// GET user by id
router.get("/:id", getUsersById);

// CREATE user
router.post("/", createUser);

// UPDATE user
router.patch("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;
