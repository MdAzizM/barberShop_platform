const model = require('../Models/reservation');

const getAllReservations = async (req, res) => {
    try {
        const reservations = await model.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneReservation = async (req, res) => {
    try {
        const reservation = await model.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createReservation = async (req, res) => {
    const newReservation = new model(req.body);
    try {
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateReservation = async (req, res) => {
    try {
        const updatedReservation = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedReservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteReservation = async (req, res) => {
    try {
        await model.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllReservations,
    createReservation,
    updateReservation,
    deleteReservation,
    getOneReservation
};