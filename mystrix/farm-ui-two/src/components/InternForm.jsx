import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const InternForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        nid: '',
        contact: '',
        password: '',
        img: null
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const [activeTab, setActiveTab] = useState('personal');

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'img') {
            setFormData({ ...formData, img: files[0] });
            setPreviewImage(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Required field';
        if (!formData.email.trim()) {
            newErrors.email = 'Required field';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.nid.trim()) newErrors.nid = 'Required field';
        if (!formData.contact.trim()) newErrors.contact = 'Required field';
        if (!formData.password) {
            newErrors.password = 'Required field';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Min 8 characters required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        console.log(formData);





        setIsSubmitting(true);
        setSubmitStatus(null);

        try {


            const response = await axios.post(
                'http://192.168.0.129:1499/intern/store',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            );


            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSubmitStatus({
                success: true,
                message: 'Quantum registration complete! Data transmitted successfully.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                nid: '',
                contact: '',
                password: '',
                img: null
            });
            setPreviewImage(null);
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Transmission failed. Firewall detected. Try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="tech-app-container" style={{
            background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
            minHeight: '100vh',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="container-fluid tech-form-container"
                style={{
                    maxWidth: '1200px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(94, 234, 212, 0.2)',
                    boxShadow: '0 0 30px rgba(94, 234, 212, 0.1)',
                    overflow: 'hidden'
                }}
            >
                <div className="row g-0">
                    {/* Techy Visual Panel */}
                    <div className="col-md-5 tech-visual-panel" style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(94, 234, 212, 0.1) 100%)',
                        padding: '3rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="tech-logo" style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #06b6d4 0%, #5eead4 100%)',
                                borderRadius: '12px',
                                marginRight: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(94, 234, 212, 0.5)'
                            }}>
                                <i className="fas fa-atom" style={{ color: '#fff', fontSize: '1.5rem' }}></i>
                            </div>
                            <h2 style={{
                                color: '#fff',
                                fontWeight: '700',
                                margin: 0,
                                letterSpacing: '1px'
                            }}>MYSTRIX<span style={{ color: '#5eead4' }}>LABS</span></h2>
                        </div>

                        <h3 style={{
                            color: '#fff',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            fontSize: '1.8rem'
                        }}>Quantum Internship Program</h3>

                        <p style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: '1.6',
                            marginBottom: '2rem'
                        }}>
                            Join our elite research team working at the frontier of quantum computing,
                            neural interfaces, and advanced AI systems.
                        </p>

                        <div className="tech-features">
                            {['Web Engineering', 'REST API', 'AI & ML', 'Neural Networks', 'Apps Development',].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#5eead4',
                                        marginRight: '1rem',
                                        boxShadow: '0 0 8px #5eead4'
                                    }}></div>
                                    <span style={{ color: '#fff' }}>{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Animated tech elements */}
                        <div className="tech-animation" style={{
                            position: 'absolute',
                            bottom: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, transparent 70%)',
                            animation: 'pulse 6s infinite alternate'
                        }}></div>
                    </div>

                    {/* Form Panel */}
                    <div className="col-md-7 tech-form-panel" style={{
                        padding: '3rem',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '2rem',
                            borderBottom: '1px solid rgba(94, 234, 212, 0.2)',
                            paddingBottom: '1rem'
                        }}>
                            <h3 style={{
                                color: '#fff',
                                fontWeight: '600',
                                margin: 0,
                                fontSize: '1.5rem'
                            }}>Registration Portal</h3>

                            <div className="tech-tabs" style={{ display: 'flex', gap: '1rem' }}>
                                {/* <button 
                  onClick={() => setActiveTab('personal')}
                  style={{
                    background: activeTab === 'personal' ? 'rgba(94, 234, 212, 0.2)' : 'transparent',
                    border: '1px solid rgba(94, 234, 212, 0.2)',
                    color: activeTab === 'personal' ? '#5eead4' : 'rgba(255, 255, 255, 0.7)',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem'
                  }}
                >
                  <i className="fas fa-user-circle me-1"></i> Personal
                </button>
                <button 
                  onClick={() => setActiveTab('academic')}
                  style={{
                    background: activeTab === 'academic' ? 'rgba(94, 234, 212, 0.2)' : 'transparent',
                    border: '1px solid rgba(94, 234, 212, 0.2)',
                    color: activeTab === 'academic' ? '#5eead4' : 'rgba(255, 255, 255, 0.7)',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem'
                  }}
                >
                  <i className="fas fa-graduation-cap me-1"></i> Academic
                </button> */}
                            </div>
                        </div>

                        <AnimatePresence>
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        background: submitStatus.success ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                                        border: `1px solid ${submitStatus.success ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}`,
                                        color: submitStatus.success ? '#4ade80' : '#f87171',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        marginBottom: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <i className={`fas ${submitStatus.success ? 'fa-check-circle' : 'fa-exclamation-triangle'} me-2`}></i>
                                    <div>{submitStatus.message}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="tech-form-group">
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            marginBottom: '0.5rem',
                                            display: 'block',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-user-astronaut me-2" style={{ color: '#5eead4' }}></i>
                                            Full Name
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type="text"
                                                className="tech-form-input"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                                    background: 'rgba(15, 23, 42, 0.5)',
                                                    border: `1px solid ${errors.name ? 'rgba(248, 113, 113, 0.5)' : 'rgba(94, 234, 212, 0.3)'}`,
                                                    borderRadius: '8px',
                                                    color: '#fff',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                            <i className="fas fa-user" style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'rgba(94, 234, 212, 0.7)'
                                            }}></i>
                                        </div>
                                        {errors.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{
                                                    color: '#f87171',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.25rem'
                                                }}
                                            >
                                                {errors.name}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="tech-form-group">
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            marginBottom: '0.5rem',
                                            display: 'block',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-envelope me-2" style={{ color: '#5eead4' }}></i>
                                            Email Address
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type="email"
                                                className="tech-form-input"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                                    background: 'rgba(15, 23, 42, 0.5)',
                                                    border: `1px solid ${errors.email ? 'rgba(248, 113, 113, 0.5)' : 'rgba(94, 234, 212, 0.3)'}`,
                                                    borderRadius: '8px',
                                                    color: '#fff',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                            <i className="fas fa-at" style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'rgba(94, 234, 212, 0.7)'
                                            }}></i>
                                        </div>
                                        {errors.email && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{
                                                    color: '#f87171',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.25rem'
                                                }}
                                            >
                                                {errors.email}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="tech-form-group">
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            marginBottom: '0.5rem',
                                            display: 'block',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-id-card me-2" style={{ color: '#5eead4' }}></i>
                                            National ID
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type="text"
                                                className="tech-form-input"
                                                name="nid"
                                                value={formData.nid}
                                                onChange={handleChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                                    background: 'rgba(15, 23, 42, 0.5)',
                                                    border: `1px solid ${errors.nid ? 'rgba(248, 113, 113, 0.5)' : 'rgba(94, 234, 212, 0.3)'}`,
                                                    borderRadius: '8px',
                                                    color: '#fff',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                            <i className="fas fa-fingerprint" style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'rgba(94, 234, 212, 0.7)'
                                            }}></i>
                                        </div>
                                        {errors.nid && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{
                                                    color: '#f87171',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.25rem'
                                                }}
                                            >
                                                {errors.nid}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="tech-form-group">
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            marginBottom: '0.5rem',
                                            display: 'block',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-phone-alt me-2" style={{ color: '#5eead4' }}></i>
                                            Contact Number
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type="tel"
                                                className="tech-form-input"
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                                    background: 'rgba(15, 23, 42, 0.5)',
                                                    border: `1px solid ${errors.contact ? 'rgba(248, 113, 113, 0.5)' : 'rgba(94, 234, 212, 0.3)'}`,
                                                    borderRadius: '8px',
                                                    color: '#fff',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                            <i className="fas fa-mobile-alt" style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'rgba(94, 234, 212, 0.7)'
                                            }}></i>
                                        </div>
                                        {errors.contact && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{
                                                    color: '#f87171',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.25rem'
                                                }}
                                            >
                                                {errors.contact}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="tech-form-group">
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            marginBottom: '0.5rem',
                                            display: 'block',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-lock me-2" style={{ color: '#5eead4' }}></i>
                                            Secure Password
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type="password"
                                                className="tech-form-input"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                                    background: 'rgba(15, 23, 42, 0.5)',
                                                    border: `1px solid ${errors.password ? 'rgba(248, 113, 113, 0.5)' : 'rgba(94, 234, 212, 0.3)'}`,
                                                    borderRadius: '8px',
                                                    color: '#fff',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                            <i className="fas fa-key" style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'rgba(94, 234, 212, 0.7)'
                                            }}></i>
                                        </div>
                                        {errors.password && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{
                                                    color: '#f87171',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.25rem'
                                                }}
                                            >
                                                {errors.password}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="tech-form-group">
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            marginBottom: '0.5rem',
                                            display: 'block',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-camera me-2" style={{ color: '#5eead4' }}></i>
                                            Biometric Image
                                        </label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <label style={{
                                                padding: '0.75rem 1rem',
                                                background: 'rgba(15, 23, 42, 0.5)',
                                                border: '1px solid rgba(94, 234, 212, 0.3)',
                                                borderRadius: '8px',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                flex: 1,
                                                textAlign: 'center',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                <i className="fas fa-upload"></i>
                                                {formData.img ? 'Change Image' : 'Upload Image'}
                                                <input
                                                    type="file"
                                                    name="img"
                                                    onChange={handleChange}
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                />
                                            </label>
                                            {previewImage && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '8px',
                                                        overflow: 'hidden',
                                                        border: '1px solid rgba(94, 234, 212, 0.3)'
                                                    }}
                                                >
                                                    <img
                                                        src={previewImage}
                                                        alt="Preview"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tech-form-footer" style={{ marginTop: '2rem' }}>
                                <motion.button
                                    type="submit"
                                    className="tech-submit-btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'linear-gradient(135deg, #06b6d4 0%, #5eead4 100%)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#0f172a',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(94, 234, 212, 0.3)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: '100%',
                                                background: 'linear-gradient(135deg, #06b6d4 0%, #5eead4 100%)',
                                                zIndex: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                <div className="tech-spinner" style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    border: '3px solid rgba(15, 23, 42, 0.2)',
                                                    borderTopColor: '#0f172a',
                                                    borderRadius: '50%',
                                                    animation: 'spin 1s linear infinite'
                                                }}></div>
                                                <span>Initializing Quantum Link...</span>
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane me-2"></i>
                                            Submit Application
                                        </>
                                    )}
                                </motion.button>

                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '0.8rem',
                                    textAlign: 'center',
                                    marginTop: '1.5rem'
                                }}>
                                    By registering, you agree to our <a href="#" style={{ color: '#5eead4' }}>Quantum Terms</a> and <a href="#" style={{ color: '#5eead4' }}>Data Protocol</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>

            {/* Add this to your CSS or style tag */}
            <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .tech-form-input:focus {
          outline: none;
          border-color: #5eead4 !important;
          box-shadow: 0 0 0 2px rgba(94, 234, 212, 0.2);
        }
        
        .tech-submit-btn:hover {
          box-shadow: 0 4px 20px rgba(94, 234, 212, 0.5);
        }
      `}</style>
        </div>
    );
};

export default InternForm;