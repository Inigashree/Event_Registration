const express = require("express");
const { createEvent, getAllEvents, editEvent, deleteEvent } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createEvent);
router.get("/all", getAllEvents); 
router.put("/:eventId", protect, editEvent); 
router.delete("/:eventId", protect, deleteEvent); 

module.exports = router;

