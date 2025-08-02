import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    symptoms: ''
  });
  const [loading, setLoading] = useState(false);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/appointments', formData);
      toast.success('Appointment booked successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        symptoms: ''
      });
    } catch (error) {
      const message =
        error.response?.data?.message || 'Failed to book appointment. Please try again.';
      toast.error(message);
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const today = new Date().toISOString().split('T')[0];

  // Function to check if a time slot is in the past
  const isSlotPast = (slot) => {
    if (formData.date !== today) return false;

    const now = new Date();
    const [hourStr, minutePart] = slot.split(':');
    const [minuteStr, period] = minutePart.split(' ');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;

    const slotDate = new Date(formData.date);
    slotDate.setHours(hour, minute, 0, 0);

    return slotDate <= now;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with Dr. John Smith. We'll get back to you within 24 hours to confirm your appointment.
          </p>
        </div>

        {/* Appointment Form */}
        <div className="card max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="h-4 w-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4 inline mr-2" />
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} disabled={isSlotPast(slot)}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Symptoms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="h-4 w-4 inline mr-2" />
                Symptoms / Reason for Visit *
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                required
                rows={4}
                className="input-field"
                placeholder="Please describe your symptoms or reason for the visit"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Confirmation call within 24 hours</li>
              <li>• Bring your insurance card and ID</li>
              <li>• Arrive 15 minutes early for check-in</li>
              <li>• List of current medications</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+91 98290 10941</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>info@dngortho.com</span>
              </p>
              <p className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>Consultation Fee: ₹100 - ₹250</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
