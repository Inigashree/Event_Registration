const Event = require("../models/Event");



const createEvent = async (req, res) => {
    try {
        if (req.user.role !== "club_head") {
            return res.status(403).json({ message: "Access Denied" });
        }

        const { title, description, date, time, venue, poster, registrationLink } = req.body;
        
        if (!poster || !registrationLink) {
            return res.status(400).json({ message: "Poster and Registration Link are required" });
        }

        const event = new Event({ 
            title, description, date, time, venue, poster, registrationLink, createdBy: req.user.id 
        });

        await event.save();
        res.status(201).json({ message: "Event created successfully", event });
    } catch (error) {
        res.status(500).json({ message: "Error creating event", error });
    }
};


const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate("createdBy", "username email");
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
};

const editEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) return res.status(404).json({ message: "Event not found" });

        if (event.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to edit this event" });
        }

        Object.assign(event, req.body);
        await event.save();

        res.status(200).json({ message: "Event updated successfully", event });
    } catch (error) {
        res.status(500).json({ message: "Error updating event", error });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) return res.status(404).json({ message: "Event not found" });

        if (event.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this event" });
        }

        await event.deleteOne();
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting event", error });
    }
};

module.exports = { createEvent, getAllEvents, editEvent, deleteEvent };

