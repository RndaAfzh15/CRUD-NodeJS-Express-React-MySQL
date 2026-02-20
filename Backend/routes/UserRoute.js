import express from "express";
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/", getUsers);


router.get("/:id", getUsersById);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

