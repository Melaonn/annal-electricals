import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, CheckCircle, Droplets, Zap, Wrench, Waves, ArrowRight, ChevronDown } from 'lucide-react';

export default function AnnalElectricalsWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
const [modalContent, setModalContent] = useState(null);

  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Drip & Sprinkler Irrigation Systems",
      description: "Authorized dealers and expert installers of automatic drip and sprinkler systems. Smart irrigation solutions for precise water distribution.",
      features: ["Water Conservation", "Automated Systems", "Expert Installation", "Garden & Farm Solutions"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Contracting",
      description: "A-Class Licensed Electrical Contractor offering safe, professional solutions for all electrical needs across residential, commercial, and industrial sectors.",
      features: ["Licensed Professionals", "Safety First", "24/7 Support", "Industrial Grade"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Plumbing & Garden Contracting",
      description: "Complete water systems, pipelines, garden design and maintenance solutions tailored to your specific requirements.",
      features: ["Water Systems", "Pipeline Installation", "Garden Design", "Maintenance Services"]
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Fountain Design & Construction",
      description: "Custom fountain design and construction for gardens, resorts, institutions, and commercial spaces with modern automated systems.",
      features: ["Custom Design", "Automated Systems", "Commercial Grade", "Elegant Aesthetics"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Projects Completed" },
    { number: "16", label: "Years Experience" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Annal Logo" className="w-12 h-12 object-contain rounded-lg" />

              <div>
                <h1 className="text-xl font-bold text-gray-900">Annal Electricals</h1>
                <p className="text-sm text-gray-600">& Irrigation System</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>


            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full">Get Quote</button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">Welcome to Annal Electricals & Irrigation System</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                We Build Reliable 
                <span className="text-blue-600"> Irrigation & Electrical Systems</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specializing in innovative irrigation systems, quality electrical solutions, and beautiful green spaces across Mangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="#gallery" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 inline-block">
                View Our Work
              </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions for all your irrigation, electrical, and landscaping needs with professional expertise and quality assurance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Tabs */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition duration-300 ${
                    activeService === index 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeService === index ? 'bg-white bg-opacity-20' : 'bg-blue-100'
                    }`}>
                      <div className={activeService === index ? 'text-white' : 'text-blue-600'}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className={`text-sm ${
                        activeService === index ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-600 rounded-xl text-white">
                  {services[activeService].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                {services[activeService].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">
              Your success is our commitment - here's what sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Experienced Professionals",
                description: "Deep local expertise with years of hands-on experience in Mangalore region"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "High-Quality Products",
                description: "Reliable service with premium quality products and materials"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Customized Solutions",
                description: "Budget-friendly solutions tailored to your specific needs and requirements"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "End-to-End Support",
                description: "Complete project support from planning to maintenance and beyond"
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Sustainability Focus",
                description: "Passionate about sustainability and eco-friendly practices"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Licensed & Certified",
                description: "A-Class Licensed professionals ensuring safety and compliance"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

{/* Gallery Section */}
<section id="gallery" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
      <p className="text-xl text-gray-600">
        See our expertise in action through our completed projects
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { type: 'image', src: '/gallery/img1.jpg', title: 'Irrigation Setup' },
        { type: 'image', src: '/gallery/img2.jpg', title: 'Electrical Panel' },
        { type: 'image', src: '/gallery/img3.jpg', title: 'Garden Layout' },
        { type: 'image', src: '/gallery/img4.jpg', title: 'Pipeline Work' },
        { type: 'image', src: '/gallery/img5.jpg', title: 'Pipeline Work' }
      ].map((item, index) => (
        <div
          key={index}
          onClick={() => setModalContent(item)}
          className="cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 hover:shadow-lg transition duration-300"
        >
          {item.type === 'image' ? (
            <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
          ) : (
            <video src={item.src} className="w-full h-64 object-cover" muted />
          )}
          <div className="p-4 text-center">
            <p className="text-gray-700 font-medium">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

{modalContent && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
    onClick={() => setModalContent(null)} 
  >
    <div
      className="relative max-w-3xl w-full"
      onClick={(e) => e.stopPropagation()} 
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
        onClick={() => setModalContent(null)}
      >
        &times;
      </button>

      {/* Image or Video */}
      <div className="rounded-xl overflow-hidden max-h-[90vh] bg-white">
        {modalContent.type === 'image' ? (
          <img src={modalContent.src} alt="Gallery Full View" className="w-full h-auto object-contain" />
        ) : (
          <video
            controls
            src={modalContent.src}
            className="w-full h-auto object-contain"
          />
        )}
      </div>
    </div>
  </div>
)}

</section>


      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl leading-relaxed mb-8">
              At Annal Electricals & Irrigation System, our vision is to be a pioneer in sustainable living, inspiring change through smart irrigation technologies, efficient electrical solutions, and the creation of greener, healthier environments.
            </p>
            <p className="text-lg opacity-90">
              We strive to be known for our innovation, integrity, and unwavering commitment to eco-friendly practices—empowering communities, transforming landscapes, and helping homes, farms, and businesses flourish, all while preserving our planet's natural resources for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start your Work? Contact us for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Kotimura 5th Cross , Kulshekar, Mangaluru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 96866 12726</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">annalelectricals72@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

<div className="bg-gray-50 p-8 rounded-xl">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
  <form 
    action="https://formsubmit.co/dsouzamelson9@gmail.com" 
    method="POST"
    className="space-y-6"
  >
    {/* Optional: Prevent spam */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

    <div className="grid md:grid-cols-2 gap-6">
      <input 
        type="text" 
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <input 
        type="email" 
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
    <input 
      type="text" 
      name="subject"
      placeholder="Subject"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    />
    <textarea 
      name="message"
      placeholder="Your Message"
      rows={6}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    ></textarea>
    <button 
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
    >
      Send Message
    </button>
  </form>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Annal Logo" className="w-10 h-10 object-contain rounded-lg" />

                <div>
                  <h3 className="text-lg font-bold">Annal Electricals</h3>
                  <p className="text-sm text-gray-400">& Irrigation System</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Experts in irrigation systems, electrical contracting, and garden solutions across Mangalore.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="text-gray-300 hover:text-white block">Home</a>
                <a href="#services" className="text-gray-300 hover:text-white block">Services</a>
                <a href="#about" className="text-gray-300 hover:text-white block">About</a>
                <a href="#contact" className="text-gray-300 hover:text-white block">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Irrigation Systems</p>
                <p className="text-gray-300">Electrical Contracting</p>
                <p className="text-gray-300">Plumbing Services</p>
                <p className="text-gray-300">Fountain Design</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Annal Electricals & Irrigation System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}