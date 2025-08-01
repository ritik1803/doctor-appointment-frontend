import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Star, Award, Stethoscope, UserCheck, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-100 py-16" style={{ backgroundColor: '#DBEAFE' }}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
        DNG Orthopedics Hospital
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Expert orthopedic care with Dr. Naresh Goyal, specializing in joint replacement and sports medicine
      </p>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Hospital</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Goyal Orthopaedic Hospital is a premier healthcare facility in Jaipur specializing in orthopedic treatments, 
                  joint replacements, and sports medicine. With over 15 years of experience, we provide comprehensive care 
                  using the latest medical technologies.
                </p>
                <p className="mt-4">
                  Our team of highly skilled orthopedic surgeons and medical professionals are dedicated to restoring mobility 
                  and improving quality of life for our patients through personalized treatment plans.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <Stethoscope className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="font-medium text-gray-900">Orthopedic Specialists</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <UserCheck className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="font-medium text-gray-900">Patient-Centered Care</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <ShieldCheck className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="font-medium text-gray-900">Advanced Technology</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-primary-600 mr-2" />
                  Recognitions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">4.3/5 Rating on JustDial (250+ reviews)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Certified Orthopedic Center</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">ISO Accredited Facility</span>
                  </li>
                </ul>
              </div>

          
            </div>
          </div>
        </div>

        {/* Contact & Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Address</h3>
                  <p className="text-gray-600">
                    93-60, Shipra Path, Mansarovar Sector 7<br />
                    Vishveshvariya Nagar, Arjun Nagar<br />
                    Jaipur, Rajasthan 302020
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Landmark: Near Shipra Path Main Road
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                  <p className="text-gray-600 text-xl font-medium">+91 98765 43210</p>
                  <p className="text-sm text-gray-500 mt-1">Available during office hours</p>
                  <p className="text-gray-600 mt-2">+91 141 2398765 (Landline)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                  <p className="text-gray-600">info@goyalortho.com</p>
                  <p className="text-gray-600">appointments@goyalortho.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">WhatsApp</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mt-2 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Emergency */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Hours & Emergency</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-primary-600 mr-2" />
                  Consultation Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600 font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600 font-medium">Emergency Only</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 text-lg mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Emergency Services
                </h4>
                <p className="text-sm text-red-700">
                  For urgent medical needs outside office hours, please call our 24/7 emergency line:
                </p>
                <p className="text-xl font-bold text-red-800 mt-2">+91 98765 43210</p>
                <p className="text-sm text-red-700 mt-2">
                  Our emergency team is available round the clock for critical orthopedic cases.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 text-lg mb-2">Ambulance Service</h4>
                <p className="text-sm text-blue-700">
                  We provide dedicated ambulance service for patients in need of emergency transport.
                </p>
                <p className="text-xl font-bold text-blue-800 mt-2">+91 98765 43211</p>
                <p className="text-sm text-blue-700 mt-1">
                  Available 24/7 with trained paramedical staff
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56954.696411136036!2d75.73204291254665!3d26.850493330894043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x396db6adbe0a7c29%3A0x77ecc31c82db18e7!2zRHIuIE5hcmVzaCBHb3lhbCBPcnRocm9wZWRpYyBIb3NpdGFsLCAo4KSu4KS-4KSo4KS44KSw4KWL4KS14KSwgICA4KSAg4KC4oAcgLgocirFv4KS1KSwgU2hpc3ByYSBQYXRoLCBNYW5zYXJvdmFyIFNlY3RvciA3LCBWaXNodmVzaHZhcml5YSBOYWdhciwgQXJqdW4gTmFnYXIsIEphaXB1cik=!3m2!1d26.8504993!2d75.7732427!4m5!1s0x396db6adbe0a7c29%3A0x77ecc31c82db18e7!2sMansarover%2C%2093-60%2C%20Shipra%20Path%2C%20Mansarovar%20Sector%207%2C%20Vishveshvariya%20Nagar%2C%20Arjun%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302020!3m2!1d26.8504993!2d75.7732427!5e0!3m2!1sen!2sin!4v1753254255083!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How to Reach Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">By Metro</h4>
                  <p className="text-sm text-gray-600">Nearest Station: Mansarovar Metro (1.2 km)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">By Bus</h4>
                  <p className="text-sm text-gray-600">Bus Stop: Shipra Path (200 m)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Parking</h4>
                  <p className="text-sm text-gray-600">Dedicated patient parking available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* CTA Section */}
       <div className="bg-gray-100 py-8 mb-12">
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule Your Consultation</h2>
    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
      Take the first step towards pain-free living with Dr. Naresh Goyal’s expert care.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="tel:+919829010941"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
      >
        Call Now: +91 98290 10941
      </a>
      <a
        href="/book-appointment"
        className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
      >
        Book Appointment
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Contact;