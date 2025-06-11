import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section">
  
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>

        <div className="container">
            <div className="row align-items-center">
             
                <div className="col-lg-6 hero-content">
                    <h1 className="hero-title">Build Your Vision with us</h1>
                    <p className="hero-subtitle">Create stunning applications with our powerful platform. Experience the next generation of Software development.</p>
                    
                  
                    <div className="hero-buttons">
                        <a href="#" className="btn btn-primary me-3 mb-2">Explore</a>
                        <a href="#" className="btn btn-outline mb-2">View Live Applications <i className="fas fa-play ms-2"></i></a>
                    </div>

 
                    <div className="hero-stats row">
                        <div className="col-4">
                            <div className="stat-item">
                                <div className="stat-number">10K+</div>
                                <div className="stat-label">Active Users</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Satisfaction</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support</div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="col-lg-6 hero-image">
                    
                   
                    <div className="floating-card card-1">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Project completed</span>
                        </div>
                    </div>
                    
                    <div className="floating-card card-2">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-star text-warning me-2"></i>
                            <span>5.0 Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
