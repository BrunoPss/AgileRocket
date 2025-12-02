// components/CertificateGenerator.js
import { useState, useRef } from "react";

// Define the minimum score required to earn the certificate.
const PASSING_SCORE = 7; 

export default function CertificateGenerator({ score, onResetQuiz }) {
  const [userName, setUserName] = useState(''); 
  const [isGenerating, setIsGenerating] = useState(false); 
  const canvasRef = useRef(null);

  /**
   * Generates the certificate by drawing the template image and the user's name
   * onto an HTML Canvas, then triggers the download.
   */
  const generateCertificate = async () => {
    if (!userName.trim()) {
      alert('Please enter your name for the certificate.');
      return;
    }

    setIsGenerating(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    
    // Path to the finalized English template image.
    image.src = '/certificate-template.jpg'; 
    image.crossOrigin = "anonymous"; 

    image.onload = () => {
      // 1. Set Canvas dimensions to match the image dimensions
      canvas.width = image.width;
      canvas.height = image.height;

      // 2. Draw the final English template as the background
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // --- DYNAMIC TEXT OVERLAY (ONLY NAME) ---
      
      ctx.textAlign = 'center'; // Center alignment

      // User Name (Drawn over the empty box area)
      ctx.font = 'bold 80px Arial'; 
      ctx.fillStyle = '#6c5ce7'; // Purple color for text
      
      // Vertical position (approx. 73% from the top, aligns with the line on the template)
      const nameY = canvas.height * 0.73; 
      
      ctx.fillText(userName.toUpperCase(), canvas.width / 2, nameY); 

      // 3. Trigger the automatic download of the PNG file
      const link = document.createElement('a');
      link.download = `RocketTeam_Certificate_${userName.replace(/\s/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      setIsGenerating(false);
    };

    image.onerror = () => {
      alert("Error: Certificate template could not be loaded. Ensure 'certificate-template.jpg' is in the '/public' folder.");
      setIsGenerating(false);
    }
  };

  return (
    <div 
      style={{ 
        padding: '40px', 
        textAlign: 'center',
        background: '#f7fafc', // Light background for the form area
        borderRadius: '16px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        width: '90%',
        maxWidth: '500px',
        margin: '0 auto',
        animation: 'fadeIn 0.5s ease-in'
      }}
    >
      <h2 style={{ fontSize: '32px', color: '#4c51bf', marginBottom: '10px' }}>
        🎉 Congratulations!
      </h2>
      <p style={{ color: '#065f46', fontWeight: 'bold', fontSize: '18px', marginBottom: '30px' }}>
        You scored **{score}** correct answers and passed the threshold.
      </p>

      <div style={{ marginTop: '30px', marginBottom: '20px' }}>
        <label htmlFor="nameInput" style={{ 
          display: 'block', 
          marginBottom: '15px', 
          fontSize: '1.2em', 
          fontWeight: '600',
          color: '#2d3748'
        }}>
          Enter Name for Certificate:
        </label>
        
        <input
          id="nameInput"
          type="text"
          placeholder="Full Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ 
            padding: '12px 15px', 
            width: '100%', 
            fontSize: '18px', 
            borderRadius: '10px', 
            border: '2px solid #c7d2fe', 
            marginBottom: '30px',
            transition: 'border-color 0.3s, box-shadow 0.3s'
          }}
          
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.2)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#c7d2fe';
            e.target.style.boxShadow = 'none';
          }}
        />

        <button 
          onClick={generateCertificate}
          disabled={isGenerating || !userName.trim()}
          style={{ 
            padding: '16px 40px',
           
            background: isGenerating 
              ? '#cbd5e0' 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none', 
            borderRadius: '12px', 
            fontSize: '18px', 
            fontWeight: 'bold',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: isGenerating 
              ? 'none' 
              : '0 6px 20px rgba(102, 126, 234, 0.4)'
          }}
          onMouseEnter={(e) => {
            if (!isGenerating && userName.trim()) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isGenerating && userName.trim()) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            }
          }}
        >
          {isGenerating ? 'Generating Certificate...' : 'Generate Certificate'}
        </button>
      </div>
      
      {onResetQuiz && (
        <button 
          onClick={onResetQuiz} 
          style={{ 
            marginTop: '30px', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#4c51bf',
            textDecoration: 'underline'
          }}>
          Start New Quiz
        </button>
      )}

      {/* Hidden Canvas element */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}