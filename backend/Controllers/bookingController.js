import Booking from '../models/Booking.js';
import { sendEmail } from '../services/emailService.js';

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();

    const { userEmail, tourName } = newBooking;
    const emailSubject = 'Tour Booking Confirmation';
    const emailText = `Thank you for booking the tour: ${tourName}.`;

    await sendEmail(userEmail, emailSubject, emailText);

    res.status(200).json({ success: true, message: 'Your tour is booked!', data: savedBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error!' });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({ success: true, message: 'Successful!', data: book });
  } catch (error) {
    res.status(404).json({ success: true, message: 'Not Found!' });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res.status(200).json({ success: true, message: 'Successful!', data: books });
  } catch (error) {
    res.status(500).json({ success: true, message: 'Internal server error!' });
  }
};
