import React, { useEffect } from 'react';
import './About.css';
import about from '/about.png';

const About = () => {
  useEffect(() => {
    // Initialize AOS animation
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Arika Ayra',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of industry experience.',
      img: 'https://thumbs.dreamstime.com/b/smiling-asian-woman-hand-chin-sitting-portrait-34241342.jpg'
    },
    {
      id: 2,
      name: 'Amy',
      role: 'CTO',
      bio: 'Technology expert passionate about innovation and scalable solutions.',
      img: 'https://thumbs.dreamstime.com/b/smiling-asian-woman-hand-chin-sitting-portrait-34241342.jpg'
    },
    {
      id: 3,
      name: 'Lily',
      role: 'Lead Designer',
      bio: 'Creative mind behind our beautiful user experiences and interfaces.',
      img: 'https://thumbs.dreamstime.com/b/smiling-asian-woman-hand-chin-sitting-portrait-34241342.jpg'
    }
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h2 className="display-4 fw-bold mb-3" data-aos="fade-down">
              About Our Company
            </h2>
            <div className="underline mx-auto mb-4" data-aos="fade-up"></div>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              We're dedicated to delivering exceptional solutions with passion and innovation.
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-img-container">
              <img 
                src={about}
                alt="Our Team" 
                className="img-fluid"
              />
              <div className="img-overlay"></div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h3 className="fw-bold mb-4">Our Story</h3>
            <p className="text-muted mb-4">
              Founded in 2015, we started as a small team with big dreams. Today, we've grown into 
              a trusted partner for businesses worldwide, helping them transform their ideas into 
              reality through cutting-edge technology and design.
            </p>
            <div className="d-flex mb-3" data-aos="fade-up" data-aos-delay="200">
              <div className="me-4">
                <i className="fas fa-bullseye fa-2x text-primary mb-3"></i>
                <h5 className="fw-bold">Our Mission</h5>
                <p className="text-muted">
                  To empower businesses with innovative solutions that drive growth and success.
                </p>
              </div>
              <div>
                <i className="fas fa-eye fa-2x text-primary mb-3"></i>
                <h5 className="fw-bold">Our Vision</h5>
                <p className="text-muted">
                  To be the global leader in delivering transformative digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h3 className="fw-bold mb-5" data-aos="fade-down">Meet Our Team</h3>
          </div>
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={member.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card team-card border-0 shadow mb-4">
                <div className="team-img-container">
                  <img src={member.img} className="card-img-top" alt={member.name} />
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <h6 className="card-subtitle text-primary mb-3">{member.role}</h6>
                  <p className="card-text text-muted">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row stats-section py-4 rounded shadow-sm" data-aos="fade-up">
          <div className="col-md-3 text-center">
            <h2 className="fw-bold display-4">250+</h2>
            <p className="text-muted">Happy Clients</p>
          </div>
          <div className="col-md-3 text-center">
            <h2 className="fw-bold display-4">500+</h2>
            <p className="text-muted">Projects Completed</p>
          </div>
          <div className="col-md-3 text-center">
            <h2 className="fw-bold display-4">50+</h2>
            <p className="text-muted">Team Members</p>
          </div>
          <div className="col-md-3 text-center">
            <h2 className="fw-bold display-4">10+</h2>
            <p className="text-muted">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;