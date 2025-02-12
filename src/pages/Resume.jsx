import React from "react";

const Resume = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
      <h1 className="text-primary fw-bold mb-4">My Resume</h1>
      <div className="border border-light p-3">
        <iframe
          src="/cherie-davis-resume.pdf" // ✅ Correct path since it's in `public/`
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="Cherie Davis Resume"
        />
      </div>
    </div>
  );
};

export default Resume;













   










