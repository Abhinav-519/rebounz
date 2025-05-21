import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  useScrollAnimation();
  
  const teamMembers = [
    {
      name: 'Abhinav Batchu',
      role: 'CoFounder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Tech visionary with 15+ years of experience in software development and business leadership.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'abhinav@rebounz.com'
      }
    },
    {
      name: 'Vamsi Cheruku',
      role: 'CoFounder & CTO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Engineering expert specializing in AI and cloud architecture with a passion for innovation.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'vamsi@rebounz.com'
      }
    },
    {
      name: 'Krishna Bojanapalli',
      role: 'CoFounder, CMO & Product Manager',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Strategic product leader with expertise in market analysis and user-centric design thinking.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'krishna@rebounz.com'
      }
    },
    {
      name: 'Srivalli Nikitha',
      role: 'CoFounder & CFO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Financial strategist with expertise in startup growth and investment management.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'srivalli@rebounz.com'
      }
    },
    {
      name: 'Charitha Bavirisetti',
      role: 'CoFounder & COO',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Operations expert with a proven track record in scaling startups and optimizing business processes.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'charitha@rebounz.com'
      }
    }
  ];
  
  return (
    <section id="team" className="section bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="section-title fade-in">Our Team</h2>
        <p className="section-subtitle fade-in">
          Meet the talented individuals behind ReBounZ innotech who make innovation happen.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="fade-in group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a href={member.social.linkedin} className="text-white hover:text-primary bg-neutral-800/50 p-2 rounded-full transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-primary bg-neutral-800/50 p-2 rounded-full transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="text-white hover:text-primary bg-neutral-800/50 p-2 rounded-full transition-colors">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-neutral-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 fade-in text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Join Our Team</h3>
            <p className="text-neutral-700 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              We're always looking for talented individuals to join our growing team. If you're passionate about technology and innovation, we'd love to hear from you.
            </p>
            <a href="#contact" className="btn btn-primary">
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;