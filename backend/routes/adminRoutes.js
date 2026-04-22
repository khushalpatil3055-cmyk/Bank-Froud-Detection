const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  getStats,
  getAlerts,
  updateAlert,
  getUsers,
  updateUser
} = require("../controllers/adminController");

router.get("/stats", adminMiddleware, getStats);
router.get("/alerts", adminMiddleware, getAlerts);
router.put("/alerts/:id", adminMiddleware, updateAlert);
router.get("/users", adminMiddleware, getUsers);
router.put("/users/:id", adminMiddleware, updateUser);

module.exports = router;