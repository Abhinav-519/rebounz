import React from 'react';
import { Lightbulb, Users, Target, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  
  const values = [
    {
      icon: <Lightbulb size={40} className="text-primary" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to create cutting-edge solutions.'
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and deliver personalized solutions.'
    },
    {
      icon: <Target size={40} className="text-primary" />,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality products and services that exceed expectations.'
    },
    {
      icon: <Shield size={40} className="text-primary" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles in all our business practices.'
    }
  ];
  
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title fade-in">About <span className="text-primary">ReBoun<span className="text-accent">Z</span></span></h2>
        <p className="section-subtitle fade-in">
          We are a forward-thinking technology company dedicated to creating innovative solutions that empower businesses to thrive in the digital age.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-neutral-700 mb-6">
              Founded with a vision to revolutionize how businesses leverage technology, ReBounZ has quickly established itself as a leader in the tech industry. Our journey began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes.
            </p>
            <p className="text-neutral-700">
              Today, we continue to grow and evolve, staying at the forefront of technological advancements and industry trends. Our team of expert engineers, designers, and strategists work together to deliver solutions that not only meet but exceed our clients' expectations.
            </p>
          </div>
          
          <div className="fade-in relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-primary-light to-primary h-64 md:h-auto">
            <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-white/90">
                  To be the catalyst for digital transformation, empowering businesses to innovate, grow, and succeed in an increasingly connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center fade-in">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="fade-in bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;