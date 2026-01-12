"use client";

export default function Home() {
  const skills = [
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Frontend Frameworks", items: ["React.js", "Next.js"] },
    { category: "Mobile Development", items: ["Flutter", "Dart"] },
    { category: "Backend & API", items: ["REST API Integration"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Ngrok", "Linux"] },
    { category: "UI/UX", items: ["Clean Design", "User-focused"] },
  ];

  const interests = [
    "Web Development",
    "Mobile Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Problem Solving",
    "Learning New Tech",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #0d0d0d 100%)",
        position: "relative"
      }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "1rem"
          }}>
            Andi Asyraful
          </h1>
          <div style={{
            width: "80px",
            height: "4px",
            background: "#3b82f6",
            margin: "0 auto"
          }}></div>
        </div>
        <a
          href="#about"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite"
          }}
        >
          <svg
            style={{ width: "32px", height: "32px", color: "#666" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Navigation */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13, 13, 13, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #2a2a2a",
        padding: "1rem 0"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem"
        }}>
          {["about", "skills", "interests", "goals", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#888",
                textDecoration: "none",
                transition: "color 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#3b82f6"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>

      {/* About Section */}
      <section id="about" style={{
        padding: "100px 20px",
        background: "#0d0d0d"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            About Me
          </h2>
          <div style={{
            background: "#1a1a1a",
            borderRadius: "12px",
            padding: "2rem",
            border: "1px solid #2a2a2a"
          }}>
            <p style={{
              color: "#ccc",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              textAlign: "center"
            }}>
              I am a passionate <span style={{ color: "#3b82f6" }}>Software Engineering student</span> majoring 
              in Software Development (RPL) at <span style={{ color: "#3b82f6" }}>Telkom Vocational High School</span>. 
              I enjoy building digital solutions, exploring modern web technologies, and continuously improving 
              my skills through real projects and competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: "100px 20px",
        background: "#111"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "2.5rem",
            textAlign: "center"
          }}>
            Skills
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem"
          }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  background: "#1a1a1a",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  border: "1px solid #2a2a2a"
                }}
              >
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#3b82f6",
                  marginBottom: "1rem"
                }}>
                  {skill.category}
                </h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem"
                }}>
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.375rem 0.75rem",
                        background: "#2a2a2a",
                        color: "#ccc",
                        borderRadius: "20px",
                        fontSize: "0.875rem"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" style={{
        padding: "100px 20px",
        background: "#0d0d0d"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "2.5rem",
            textAlign: "center"
          }}>
            Interests
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem"
          }}>
            {interests.map((interest, index) => (
              <div
                key={index}
                style={{
                  background: "#1a1a1a",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  border: "1px solid #2a2a2a",
                  textAlign: "center"
                }}
              >
                <span style={{ color: "#ccc", fontSize: "0.95rem" }}>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" style={{
        padding: "100px 20px",
        background: "#111"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            Goals
          </h2>
          <div style={{
            background: "#1a1a1a",
            borderRadius: "12px",
            padding: "2rem",
            border: "1px solid #2a2a2a"
          }}>
            <p style={{
              color: "#ccc",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              textAlign: "center"
            }}>
              I am seeking opportunities to gain <span style={{ color: "#3b82f6" }}>hands-on experience</span>, 
              build a strong professional portfolio, and grow as a software engineer. My long-term goal is 
              to become <span style={{ color: "#3b82f6" }}>financially independent at a young age</span> and use 
              technology to make a positive impact in Indonesia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: "100px 20px",
        background: "#0d0d0d"
      }}>
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "1.5rem"
          }}>
            Let&apos;s Connect
          </h2>
          <p style={{
            color: "#ccc",
            fontSize: "1.1rem",
            marginBottom: "2rem"
          }}>
            Let&apos;s connect and build something meaningful together! 🚀
          </p>
          <a
            href="mailto:contact@andiasyraful.com"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "#3b82f6",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#2563eb"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#3b82f6"}
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "2rem",
        borderTop: "1px solid #2a2a2a",
        background: "#0d0d0d",
        textAlign: "center"
      }}>
        <p style={{ color: "#666", fontSize: "0.875rem" }}>
          © 2025 Andi Asyraful. All rights reserved.
        </p>
      </footer>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </main>
  );
}
