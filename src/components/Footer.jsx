import React from 'react';
import { Stethoscope, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600" style={{ backgroundColor: '#DBEAFE' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold text-gray-800">DNG Orthopedics Hospital</span>
            </div>
            <p className="text-sm text-gray-600">
              Expert orthopedic care with Dr. Naresh Goyal, specializing in joint replacement and sports medicine.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a></li>
              <li><a href="/book-appointment" className="text-gray-600 hover:text-blue-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact & Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-500 mt-0.5" />
                <span>Unit No. 93/60, 60A, Vijay Path, Shipra Path, Mansarovar, Jaipur - 302020, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+91 98290 10941</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>info@dngortho.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Mon: 9:00 AM - 5:30 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Tue-Sat: 10:00 AM - 1:00 PM, 7:00 PM - 10:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Sun: By Appointment Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 DNG Orthopedics Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;