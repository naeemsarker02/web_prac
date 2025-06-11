import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const InternsListView = () => {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const base_url = 'http://192.168.0.129:1499/uploads/interns'

  // Fetch interns data
  useEffect(() => {
    const fetchInterns = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://192.168.0.129:1499/intern');
        setInterns(response.data);
        console.log(response.data);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching interns:', err);
        setError('Failed to load intern data. Quantum link unstable.');
      } finally {
        setLoading(false);
      }
    };

    fetchInterns();
  }, []);

  // Filter interns based on search term
  const filteredInterns = interns?.filter(intern => {
    // Safely handle all possible null/undefined cases
    const safeString = (str) => (str || '').toString().toLowerCase();

    return (
      safeString(intern.name).includes(safeString(searchTerm)) ||
      safeString(intern.email).includes(safeString(searchTerm)) ||
      safeString(intern.nid).includes(safeString(searchTerm))
    );
  }) || []; // Fallback to empty array if interns is null/undefined
  const openModal = (intern) => {
    setSelectedIntern(intern);   
    setShowModal(true);
 
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIntern(null);
  };

  return (
    <div className="tech-app-container" style={{
      background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container-fluid tech-list-container"
        style={{
          maxWidth: '1400px',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(94, 234, 212, 0.2)',
          boxShadow: '0 0 30px rgba(94, 234, 212, 0.1)',
          overflow: 'hidden',
          padding: '2rem'
        }}
      >
        <div className="tech-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(94, 234, 212, 0.2)',
          paddingBottom: '1rem'
        }}>
          <div>
            <h2 style={{
              color: '#fff',
              fontWeight: '700',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <i className="fas fa-users" style={{ color: '#5eead4' }}></i>
              Mystrix Quantum Interns
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0.5rem 0 0' }}>
              Active Research Personnel Database
            </p>
          </div>

          <div className="tech-search" style={{ position: 'relative', width: '300px' }}>
            <input
              type="text"
              placeholder="Search interns..."
              className="tech-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(94, 234, 212, 0.3)',
                borderRadius: '8px',
                color: '#fff',
                transition: 'all 0.3s ease'
              }}
            />
            <i className="fas fa-search" style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(94, 234, 212, 0.7)'
            }}></i>
          </div>
        </div>

        {loading ? (
          <div className="tech-loading" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            color: '#5eead4'
          }}>
            <div className="tech-spinner" style={{
              width: '50px',
              height: '50px',
              border: '4px solid rgba(94, 234, 212, 0.2)',
              borderTopColor: '#5eead4',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '1rem'
            }}></div>
            <p>Initializing quantum database connection...</p>
          </div>
        ) : error ? (
          <div className="tech-error" style={{
            background: 'rgba(248, 113, 113, 0.1)',
            border: '1px solid rgba(248, 113, 113, 0.3)',
            color: '#f87171',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <i className="fas fa-exclamation-triangle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
            <h3>Data Transmission Error</h3>
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'rgba(248, 113, 113, 0.2)',
                border: '1px solid rgba(248, 113, 113, 0.5)',
                color: '#f87171',
                padding: '0.5rem 1.5rem',
                borderRadius: '6px',
                marginTop: '1rem',
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-sync-alt me-2"></i> Retry Connection
            </button>
          </div>
        ) : (
          <div className="tech-interns-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredInterns?.length > 0 ? (
              filteredInterns.map((intern) => (
                <motion.div
                  key={intern.id}
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(94, 234, 212, 0.2)' }}
                  className="tech-intern-card"
                  onClick={() => openModal(intern)}
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(94, 234, 212, 0.1) 100%)',
                    border: '1px solid rgba(94, 234, 212, 0.2)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="tech-intern-header" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    {/* <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: `url(http://192.168.0.129:1499/uploads/interns/${intern.image}) center/cover`,
                      marginRight: '1rem',
                      border: '2px solid rgba(94, 234, 212, 0.5)'
                    }}></div> */}


                    <img
                      src={base_url + '/' + intern.img}
                      alt={intern.name || 'Intern'}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '1rem',
                        border: '2px solid rgba(94, 234, 212, 0.5)',
                        backgroundColor: 'rgba(15, 23, 42, 0.7)'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default-avatar.jpg';
                      }}
                    />
                    <div>
                      <h3 style={{ color: '#fff', margin: 0 }}>{intern.name}</h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>{'Intern'}</p>
                    </div>
                  </div>

                  <div className="tech-intern-details" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.5rem',
                    marginTop: '1rem'
                  }}>
                    <div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', margin: 0 }}>ID</p>
                      <p style={{ color: '#fff', margin: 0 }}>{intern.id}</p>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', margin: 0 }}>Status</p>
                      <p style={{
                        color: intern.status == true ? '#5eead4' : '#f87171',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <i className={`fas ${intern.status == true ? 'fa-circle-check' : 'fa-circle-xmark'}`}></i>
                        {intern.status}
                      </p>
                    </div> 
                    <div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', margin: 0 }}>Contact</p>
                      <p style={{ color: '#fff', margin: 0 }}>{intern.contact}</p>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', margin: 0 }}>Email</p>
                      <p style={{ color: '#fff', margin: 0 }}>{intern.email}</p>
                    </div>
                  </div>

                  <div className="tech-intern-footer" style={{
                    marginTop: '1rem',
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}>
                    <button
                      className="tech-view-btn"
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(94, 234, 212, 0.5)',
                        color: '#5eead4',
                        padding: '0.3rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <i className="fas fa-arrow-right"></i> View Quantum Profile
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="tech-no-results" style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                <i className="fas fa-user-slash" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                <h3>No Interns Found</h3>
                <p>Your search did not match any quantum research personnel</p>
              </div>
            )}
          </div>
        )}

        {/* Intern Details Modal */}
        <AnimatePresence>
          {showModal && selectedIntern && (
            <div className="modal-backdrop" style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1050,
              padding: '1rem'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="tech-modal-content"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(94, 234, 212, 0.3)',
                  boxShadow: '0 0 40px rgba(94, 234, 212, 0.2)',
                  width: '100%',
                  maxWidth: '800px',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  position: 'relative'
                }}
              >
                <div className="tech-modal-header" style={{
                  padding: '1.5rem',
                  borderBottom: '1px solid rgba(94, 234, 212, 0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h2 style={{
                    color: '#fff',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <i className="fas fa-user-astronaut" style={{ color: '#5eead4' }}></i>
                    Quantum Intern Profile
                  </h2>
                  <button
                    onClick={closeModal}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <div className="tech-modal-body" style={{ padding: '1.5rem' }}>
                  <div className="tech-profile-header" style={{
                    display: 'flex',
                    gap: '2rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    {/* <div style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '12px',
                      background: `url(${selectedIntern.image || 'https://via.placeholder.com/150'}) center/cover`,
                      border: '3px solid rgba(94, 234, 212, 0.5)',
                      boxShadow: '0 0 20px rgba(94, 234, 212, 0.3)'
                    }}></div> */}

                    <img
                      src={base_url + '/' + selectedIntern.img}
                      alt={'Intern'}
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        marginRight: '1rem',
                        border: '3px solid rgba(94, 234, 212, 0.5)',
                        boxShadow: '0 0 20px rgba(94, 234, 212, 0.3)'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default-avatar.jpg';
                      }}
                    />

                    <div style={{ flex: 1, minWidth: '250px' }}>
                      <h3 style={{ color: '#fff', marginTop: 0 }}>{selectedIntern.name}</h3>
                      <p style={{
                        color: selectedIntern.status == true ? '#5eead4' : '#f87171',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}>
                        <i className={`fas ${selectedIntern.status == true ? 'fa-circle-check' : 'fa-circle-xmark'}`}></i>
                        {selectedIntern.status} Quantum Researcher
                      </p>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <div>
                          <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>NID</p>
                          <p style={{ color: '#fff', margin: 0 }}>{selectedIntern.nid}</p>
                        </div>
                        <div>
                          <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>Email</p>
                          <p style={{ color: '#fff', margin: 0 }}>{selectedIntern.email}</p>
                        </div>
                        <div>
                          <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>Contact</p>
                          <p style={{ color: '#fff', margin: 0 }}>{selectedIntern.contact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech-tabs" style={{
                    display: 'flex',
                    borderBottom: '1px solid rgba(94, 234, 212, 0.2)',
                    marginBottom: '1.5rem'
                  }}>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid #5eead4',
                      color: '#5eead4',
                      cursor: 'pointer'
                    }}>
                      Overview
                    </button>
                  </div>

                  <div className="tech-profile-details">
                    <h4 style={{ color: '#fff', marginBottom: '1rem' }}>
                      <i className="fas fa-flask me-2" style={{ color: '#5eead4' }}></i>
                      Research Projects
                    </h4>


                  </div>
                </div>

                <div className="tech-modal-footer" style={{
                  padding: '1.5rem',
                  borderTop: '1px solid rgba(94, 234, 212, 0.2)',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem'
                }}>
                  <button
                    onClick={closeModal}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(94, 234, 212, 0.5)',
                      color: '#5eead4',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                  <button
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4 0%, #5eead4 100%)',
                      border: 'none',
                      color: '#0f172a',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Add this to your CSS or style tag */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .tech-intern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(94, 234, 212, 0.2);
        }
        
        .tech-search-input:focus {
          outline: none;
          border-color: #5eead4 !important;
          box-shadow: 0 0 0 2px rgba(94, 234, 212, 0.2);
        }
      `}</style>
    </div>
  );
};

export default InternsListView;