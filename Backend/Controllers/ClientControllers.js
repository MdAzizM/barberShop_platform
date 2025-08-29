const model = require('../Models/reservation');

const createReservation = async (req, res) => {
    const newReservation = new model(req.body);
    try {
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getYourReservation = async (req, res) => {
    try {
        const reservation = await model.find({ userId: req.user.id });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createReservation,
    getYourReservation
};