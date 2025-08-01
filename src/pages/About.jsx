import React from 'react';
import { GraduationCap, Award, MapPin, Clock, Stethoscope, Heart, Users, Star, Shield, BookOpen, Activity, Phone } from 'lucide-react';

const education = [
  {
    degree: "MBBS",
    institution: "Medical College",
    year: "Graduated",
    honors: "Verified Registration"
  },
  {
    degree: "Orthopedic Surgery Specialization",
    institution: "Advanced Medical Training",
    year: "4+ Years",
    honors: "Board Certified"
  },
  {
    degree: "Joint Replacement Surgery",
    institution: "Specialized Training",
    year: "Advanced",
    honors: "Expert Level"
  },
  {
    degree: "Sports Medicine",
    institution: "Professional Development",
    year: "Continuing",
    honors: "Active Practice"
  }
];

const specialties = [
  { name: "Joint Replacement Surgery", icon: Activity, desc: "Total Hip, Knee, and Shoulder replacement surgeries with advanced techniques" },
  { name: "Fracture Management", icon: Shield, desc: "Expert treatment of complex fractures including open reduction and fixation" },
  { name: "Sports Medicine", icon: Heart, desc: "Treatment of sports injuries, ACL reconstruction, and athletic rehabilitation" },
  { name: "Orthopedic Consultation", icon: Stethoscope, desc: "Comprehensive diagnosis and treatment planning for orthopedic conditions" }
];

const conditionsTreated = [
  "Ankle Dislocation",
  "Elbow Dislocation", 
  "Forearm Fractures",
  "Pelvic Fractures",
  "Lateral Epicondylitis (Tennis Elbow)",
  "ACL/PCL Injuries",
  "Knee & Shoulder Arthritis",
  "Osteoarthritis & Rheumatoid Arthritis",
  "Shoulder Dislocation",
  "Broken Arm/Leg/Knee Fractures",
  "Complex Joint Pain",
  "Meniscus Tear",
  "Carpal Tunnel Syndrome",
  "Hip Dysplasia"
];

const proceduresOffered = [
  "Closed Reduction of Fractures",
  "Open Reduction & Fixation of Bone Fractures",
  "Total Hip Replacement",
  "Total Knee Joint Replacement", 
  "Total Shoulder Joint Replacement",
  "Minimally Invasive Knee Replacement",
  "Robotic Hip Replacement",
  "ACL Reconstruction",
  "PRP Injections",
  "Arthroscopy",
  "Computer-Assisted Surgery"
];

const testimonialHighlights = [
  { quote: "Dr. Goyal performed my knee replacement surgery and now I can walk pain-free", patient: "Anil Mehra, 28", rating: 5 },
  { quote: "After my sports injury, the recovery was quick and smooth", patient: "Priya Sharma, 26", rating: 5 },
  { quote: "My fracture was handled excellently with great care", patient: "Rakesh Yadav, 67", rating: 5 }
];

const About = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Dr. Naresh Goyal
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          Orthopedic Surgeon | Joint Replacement Specialist
        </p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">4.0 Rating</span>
          </div>
        </div>
        <div className="text-gray-600">
          📍 Mansarovar, Jaipur, Rajasthan | 🏥 DNG Orthopedics Hospital
        </div>
      </section>

      {/* Profile Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <img
              src="https://mymedtrip.com/wp-content/uploads/2021/05/Dr-Naresh-Goyal.jpg"
              alt="Dr. Naresh Goyal"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          
          {/* Quick Stats */}
          <div className="absolute -bottom-6 left-8 right-8 bg-white rounded-xl p-4 shadow-lg border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-gray-800">4+</div>
                <div className="text-xs text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">1000+</div>
                <div className="text-xs text-gray-500">Patients Treated</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">₹100</div>
                <div className="text-xs text-gray-500">Consultation Fee</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-700 text-lg font-semibold">MBBS • Verified Medical Registration</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Dr. Naresh Goyal
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Dr. Naresh Goyal is a highly respected Orthopedic Surgeon in Jaipur, known for his compassionate care and expert treatments. With extensive experience in orthopaedics, he has successfully treated numerous complex cases and is highly rated by his patients for professionalism and hospitality.
            </p>
            <p>
              Dr. Goyal practices at DNG Orthopedics Hospital in Mansarovar and specializes in Joint Replacement Surgery, Sports Medicine, and Minimally Invasive Procedures. He is committed to providing evidence-based treatment with a human touch.
            </p>
            <p>
              He is fluent in Hindi, English, and Rajasthani, ensuring clear communication with patients from all backgrounds. Dr. Goyal offers affordable consultation fees starting from ₹100, making quality orthopedic care accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Areas of Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((specialty, idx) => {
            const IconComponent = specialty.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {specialty.name}
                </h3>
                <p className="text-gray-600">
                  {specialty.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Education & Qualifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-gray-700" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {edu.honors}
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{edu.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions & Procedures */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Conditions Treated */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Conditions Treated
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {conditionsTreated.map((condition, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedures Offered */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Procedures Offered
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {proceduresOffered.map((procedure, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">{procedure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What Patients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialHighlights.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4 text-center">"{testimonial.quote}"</p>
              <div className="text-gray-800 font-semibold text-center text-sm">{testimonial.patient}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Clinic Details */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">Clinic Information</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-semibold text-gray-900 text-lg">DNG Orthopedics Hospital</p>
                <p className="text-gray-600">Unit No. 93/60, 60A, Vijay Path</p>
                <p className="text-gray-600">Shipra Path, Mansarovar</p>
                <p className="text-gray-600">Jaipur - 302020, Rajasthan, India</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-700" />
                  <span className="font-bold text-gray-900">+91 98290 10941</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-gray-700">💰</span>
                  <span className="text-gray-600">Consultation Fee: ₹100 - ₹250</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-gray-700">🗣️</span>
                  <span className="text-gray-600">Languages: Hindi, English, Rajasthani</span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-800 font-semibold">Now Accepting New Patients</p>
                <p className="text-sm text-green-700 mt-1">Affordable consultation fees • Same-day appointments available</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">Clinic Timings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div>
                  <div className="text-gray-900 font-medium">Monday</div>
                  <div className="text-gray-500 text-sm">Regular Hours</div>
                </div>
                <div className="font-bold text-gray-800">9:00 AM - 5:30 PM</div>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div>
                  <div className="text-gray-900 font-medium">Tuesday - Saturday</div>
                  <div className="text-gray-500 text-sm">Split Hours</div>
                </div>
                <div className="font-bold text-gray-800">
                  <div>10:00 AM - 1:00 PM</div>
                  <div>7:00 PM - 10:00 PM</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="text-gray-900 font-medium">Sunday</div>
                  <div className="text-gray-500 text-sm">Limited</div>
                </div>
                <div className="font-bold text-gray-800">By Appointment Only</div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-blue-800 font-semibold">Emergency Services</p>
                <p className="text-sm text-blue-700 mt-1">Call for emergency orthopedic consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
   
<section className="text-center py-8">
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Schedule Your Consultation
    </h2>
    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
      Take the first step towards pain-free living with expert orthopedic care.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
        onClick={() => window.location.href = 'tel:+919829010941'}
      >
        Call Now: +91 98290 10941
      </button>
      <button
        className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
        onClick={() => window.location.href = '/book-appointment'}
      >
        Book Appointment
      </button>
    </div>
    <p className="text-sm text-gray-500 mt-4">
      Consultation Fee: ₹100 - ₹250 | New patients welcome
    </p>
  </div>
</section>
    </div>
  </div>
);

export default About;