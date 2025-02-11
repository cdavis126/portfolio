import '../styles/home.css';

const ContactBox = () => {
  return (
    <section className="contact-box">
      <h2>Contacting Cherie</h2>
      <p>📧 <a href="mailto:your.email@example.com">Email</a></p>
      <p>👤 <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Add Me (Instagram)</a></p>
      <p>💻 <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p>🌐 <a href="https://linkedin.com/in/cherieadavis/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </section>
  );
};

export default ContactBox;
