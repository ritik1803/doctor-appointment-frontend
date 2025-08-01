import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Award, Heart, ChevronDown, Stethoscope, Shield, Clock, Star, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Joint Replacement Surgery",
      description: "Advanced surgical solutions for joint pain and arthritis with robotic assistance.",
      features: ["Minimally Invasive Knee Replacement", "Robotic Hip Replacement", "Shoulder Replacement", "Revision Surgeries"],
      color: "blue"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Sports Medicine",
      description: "Specialized care for sports injuries and athletic performance recovery.",
      features: ["ACL/PCL Reconstruction", "Meniscus Repair", "PRP Injections", "Arthroscopy"],
      color: "blue"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fracture Management",
      description: "Expert trauma care and fracture treatment with latest techniques.",
      features: ["Complex Fracture Treatment", "Open/Closed Reduction", "Minimally Invasive Surgery", "Post-trauma Rehabilitation"],
      color: "blue"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Non-Surgical Orthopedics",
      description: "Conservative treatment options for orthopedic conditions.",
      features: ["Injection Therapy", "Physiotherapy", "Pain Management", "Rehabilitation Programs"],
      color: "blue"
    }
  ];

  const testimonials = [
    {
      name: "Anil Mehra",
      age: "28",
      condition: "Knee Replacement",
      text: "I was struggling to walk due to severe knee pain. Dr. Naresh Goyal performed my knee replacement surgery and now I can walk pain-free. Truly grateful!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Priya Sharma",
      age: "26",
      condition: "Shoulder Dislocation",
      text: "After my sports injury, Dr. Goyal treated my dislocated shoulder with care and precision. The recovery was quick and smooth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1689580298851-d4482a124290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Rakesh Yadav",
      age: "67",
      condition: "Fracture Treatment",
      text: "My forearm fracture was handled excellently. Dr. Goyal made sure I was comfortable and well-informed throughout the healing process.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1609252509102-aa73ff792667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, text: "Top 10 Orthopedist in Jaipur" },
    { icon: <Star className="h-6 w-6" />, text: "4+ Years Specialized Experience" },
    { icon: <Users className="h-6 w-6" />, text: "Thousands of Patients Treated" },
    { icon: <Heart className="h-6 w-6" />, text: "Affordable Consultation (₹100-250)" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="inline-flex items-center bg-gray-200 rounded-full px-6 py-2 mb-8">
                <Stethoscope className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700 font-medium">Your Personal Orthopedic Specialist</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-800 mb-6 leading-tight">
                Dr. Naresh Goyal,
                <span className="text-blue-500 block">Orthopedic Surgeon</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Expert orthopedic care in Jaipur with 4+ years of experience, offering personalized treatment at affordable consultation fees (₹100-250).
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
                  onClick={() => window.location.href = "/book-appointment"}
                >
                  <Calendar className="inline h-5 w-5 mr-2" />
                  Book Appointment
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-500" />
                  <span>+91 98290 10941</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>DNG Orthopedics Hospital, Mansarovar</span>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-gray-200 p-4 rounded-lg">
                  <Heart className="h-6 w-6 text-blue-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gray-200 p-4 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <img
                    src="https://mymedtrip.com/wp-content/uploads/2021/05/Dr-Naresh-Goyal.jpg"
                    alt="Dr. Naresh Goyal"
                    className="rounded-lg w-full h-96 object-cover"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Dr. Naresh Goyal</h3>
                    <p className="text-blue-500 font-medium">Orthopedic Surgeon</p>
                    <div className="flex mt-2">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">(4.0/5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-600" />
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Meet Your
                <span className="text-blue-500 block">Orthopedic Specialist</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Naresh Goyal is one of the top orthopedic surgeons in Jaipur, known for his expert care and compassionate approach. With 4+ years of specialized experience in Joint Replacement, Orthopedic Surgery, Sports Medicine, and Minimally Invasive Procedures, he provides evidence-based treatment with a human touch.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Goyal practices at DNG Orthopedics Hospital in Mansarovar and is committed to holistic patient care, offering comprehensive solutions from diagnostics to advanced surgical interventions. He is fluent in Hindi, English, and Rajasthani, ensuring clear communication with patients from all backgrounds.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-blue-500">{achievement.icon}</div>
                    <span className="text-gray-600">{achievement.text}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-blue-200 pl-4">
                <p className="text-gray-600 italic mb-2">
                  "Every patient deserves personalized orthopedic care. I combine advanced surgical techniques 
                  with compassionate treatment to help patients regain mobility and live pain-free lives."
                </p>
                <footer className="text-blue-500 font-semibold">— Dr. Naresh Goyal</footer>
              </blockquote>
            </div>

            <div className="relative">
              <img
                src="data:image/jpeg;base64,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"
                alt="Dr. Goyal with patient"
                className="rounded-lg w-full h-80 object-cover"
              />
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Education & Specializations</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Joint Replacement & Reconstruction</div>
                  <div>• Orthopedic Sports Medicine</div>
                  <div>• Minimally Invasive Surgery</div>
                  <div>• Adult Reconstructive Surgery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Specialized 
              <span className="text-blue-500">Orthopedic Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From joint replacements to sports injuries, Dr. Goyal provides comprehensive orthopedic care 
              using the latest surgical techniques and minimally invasive approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-200 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-500">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Patient 
              <span className="text-blue-500">Success Stories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real patients who've experienced life-changing orthopedic care.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="flex mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-600 mb-4">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <div>
                    <cite className="text-lg font-semibold text-gray-800">
                      {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].age}
                    </cite>
                    <p className="text-blue-500">{testimonials[activeTestimonial].condition}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === activeTestimonial ? 'bg-blue-500 w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-6">
                Visit My
                <span className="text-blue-100 block">Practice</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-100 rounded-lg p-6 text-blue-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Office Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium">Monday</div>
                      <div>9:00 AM - 5:30 PM</div>
                    </div>
                    <div>
                      <div className="font-medium">Tue - Sat</div>
                      <div>10:00 AM - 1:00 PM</div>
                      <div>7:00 PM - 10:00 PM</div>
                    </div>
                    <div>
                      <div className="font-medium">Sunday</div>
                      <div>By Appointment Only</div>
                    </div>
                    <div>
                      <div className="font-medium">Emergency</div>
                      <div>Call for Availability</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-lg p-6 text-blue-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Location
                  </h3>
                  <p className="mb-4">
                    DNG Orthopedics Hospital<br/>
                    Unit No. 93/60, 60A, Vijay Path, Shipra Path, Mansarovar, Jaipur - 302020, Rajasthan, India
                  </p>
                  <button 
                    className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                    onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56954.696411136036!2d75.73204291254665!3d26.850493330894043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x396db6adbe0a7c29%3A0x77ecc31c82db18e7!2zRHIuIE5hcmVzaCBHb3lhbCBPcnRocm9wZWRpYyBIb3NpdGFsLCAo4KSu4KS-4KSo4KS54KS4gICAgICC4oAcgLgocirFv4KS1KSwgU2hpc3ByYSBQYXRoLCBNYW5zYXJvdmFyIFNlY3RvciA3LCBWaXNodmVzaHZhcml5YSBOYWdhciwgQXJqdW4gTmFnYXIsIEphaXB1cik=!3m2!1d26.8504993!2d75.7732427!4m5!1s0x396db6adbe0a7c29%3A0x77ecc31c82db18e7!2sMansarover%2C%2093-60%2C%20Shipra%20Path%2C%20Mansarovar%20Sector%207%2C%20Vishveshvariya%20Nagar%2C%20Arjun%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302020!3m2!1d26.8504993!2d75.7732427!5e0!3m2!1sen!2sin!4v1753254255083!5m2!1sen!2sin', '_blank')}
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56954.696411136036!2d75.73204291254665!3d26.850493330894043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x396db6adbe0a7c29%3A0x77ecc31c82db18e7!2zRHIuIE5hcmVzaCBHb3lhbCBPcnRocm9wZWRpYyBIb3NpdGFsLCAo4KSu4KS-4KSo4KS54KS4gICAgICC4oAcgLgocirFv4KS1KSwgU2hpc3ByYSBQYXRoLCBNYW5zYXJvdmFyIFNlY3RvciA3LCBWaXNodmVzaHZhcml5YSBOYWdhciwgQXJqdW4gTmFnYXIsIEphaXB1cik=!3m2!1d26.8504993!2d75.7732427!4m5!1s0x396db6adbe0a7c29%3A0x77ecc31c82db18e7!2sMansarover%2C%2093-60%2C%20Shipra%20Path%2C%20Mansarovar%20Sector%207%2C%20Vishveshvariya%20Nagar%2C%20Arjun%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302020!3m2!1d26.8504993!2d75.7732427!5e0!3m2!1sen!2sin!4v1753254255083!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 bg-blue-100 p-4 rounded-lg" style={{ backgroundColor: '#DBEAFE' }}>
  <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
  <div className="space-y-3 text-gray-600">
    <div className="flex items-center gap-3">
      <Phone className="h-5 w-5 text-blue-500" />
      <span className="text-sm">+91 98290 10941</span>
    </div>
    <div className="flex items-center gap-3">
      <Mail className="h-5 w-5 text-blue-500" />
      <span className="text-sm">Consultation: ₹100 - ₹250</span>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Ready to Start Your
            <span className="text-blue-500 block">Health Journey?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards pain-free living. Schedule your orthopedic consultation today 
            with Dr. Naresh Goyal at affordable rates starting from ₹100.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
              onClick={() => window.location.href = 'tel:+919829010941'}
            >
              <Calendar className="inline h-5 w-5 mr-2" />
              Schedule Appointment
            </button>
            <button 
              className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
              onClick={() => window.location.href = 'tel:+919829010941'}
            >
              <Phone className="inline h-5 w-5 mr-2" />
              Call Now
            </button>
          </div>
          
          <p className="text-gray-500 mt-6">
            New patients welcome • Consultation: ₹100-250 • Same-day appointments available • Languages: Hindi, English, Rajasthani
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;