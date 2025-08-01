import React, { useState, useEffect } from 'react';
import { Stethoscope, Heart, Activity, Shield, Eye, Thermometer } from 'lucide-react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default services in case API fails
  const defaultServices = [
    {
      title: "General Health Checkup",
      description: "Comprehensive physical examination and health assessment to maintain your overall well-being.",
      icon: "stethoscope",
      price: 150,
      duration: "45 minutes"
    },
    {
      title: "Cardiovascular Care",
      description: "Heart health monitoring, blood pressure management, and cardiovascular disease prevention.",
      icon: "heart",
      price: 200,
      duration: "60 minutes"
    },
    {
      title: "Diabetes Management",
      description: "Comprehensive diabetes care including monitoring, medication management, and lifestyle counseling.",
      icon: "activity",
      price: 180,
      duration: "50 minutes"
    },
    {
      title: "Preventive Care",
      description: "Vaccinations, screenings, and preventive measures to keep you healthy and disease-free.",
      icon: "shield",
      price: 120,
      duration: "30 minutes"
    },
    {
      title: "Vision Screening",
      description: "Basic eye examination and vision screening to detect common eye problems early.",
      icon: "eye",
      price: 80,
      duration: "25 minutes"
    },
    {
      title: "Acute Care",
      description: "Treatment for sudden illnesses, infections, and minor injuries requiring immediate attention.",
      icon: "thermometer",
      price: 100,
      duration: "30 minutes"
    }
  ];

  const getIcon = (iconName) => {
    const icons = {
      stethoscope: <Stethoscope className="h-8 w-8 text-primary-600" />,
      heart: <Heart className="h-8 w-8 text-primary-600" />,
      activity: <Activity className="h-8 w-8 text-primary-600" />,
      shield: <Shield className="h-8 w-8 text-primary-600" />,
      eye: <Eye className="h-8 w-8 text-primary-600" />,
      thermometer: <Thermometer className="h-8 w-8 text-primary-600" />
    };
    return icons[iconName] || <Stethoscope className="h-8 w-8 text-primary-600" />;
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      // Use default services if API fails
      setServices(defaultServices);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to meet your individual needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service._id || index} className="card group hover:scale-105 transition-transform duration-200">
              <div className="flex items-center mb-4">
                {getIcon(service.icon)}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">${service.price}</span>
                <span className="text-sm text-gray-500">{service.duration}</span>
              </div>
              
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                Book This Service
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We offer many additional services. Contact us to discuss your specific healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Contact Us
              </a>
              <a
                href="/book-appointment"
                className="btn-secondary"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;