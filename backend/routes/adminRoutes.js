const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  getStats,
  getAlerts,
  updateAlert,
  getUsers,
  updateUser,
  getYearlyStats,
  getTodayStats,   // ✅ add
  getMonthStats    // ✅ add
} = require("../controllers/adminController");

router.get("/stats", adminMiddleware, getStats);
router.get("/alerts", adminMiddleware, getAlerts);
router.put("/alerts/:id", adminMiddleware, updateAlert);
router.get("/users", adminMiddleware, getUsers);
router.put("/users/:id", adminMiddleware, updateUser);
router.get("/today-stats", adminMiddleware, getTodayStats);  // ✅ add
router.get("/month-stats", adminMiddleware, getMonthStats);  // ✅ add
module.exports = router;