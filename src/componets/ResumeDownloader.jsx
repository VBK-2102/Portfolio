import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

const ResumeDownloader = () => {
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    color: '#fff',
    background: 'linear-gradient(135deg, #4b0082, #000)',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };

  const hoverStyle = {
    background: 'linear-gradient(135deg, #6a0dad, #1a1a1a)',
  };

  return (
    <div>
      <a
        href="/Resume.pdf"
        download="Vaibhav_BK's_Resume.pdf"
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = hoverStyle.background)}
        onMouseLeave={(e) => (e.currentTarget.style.background = buttonStyle.background)}
      >
        <AiOutlineDownload size={24} />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownloader;
