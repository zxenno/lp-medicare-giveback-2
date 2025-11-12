import React, { useEffect, useState } from 'react';

function CongratulationsModal({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Auto-close modal after 2 seconds and fade to success page
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
      }, 300); // Faster fade out duration
    }, 2000); // Reduced from 3000ms to 2000ms
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative overflow-hidden transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Confetti Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
          {[...Array(50)].map((_, i) => {
            const colors = ['#00A896', '#6EE7B7', '#10B981', '#34D399', '#059669'];
            const left = Math.random() * 100;
            const delay = Math.random() * 1.5;
            const duration = 1.5 + Math.random() * 1;
            const size = 6 + Math.random() * 6;
            return (
              <div
                key={i}
                className="confetti-particle"
                style={{
                  left: `${left}%`,
                  top: '-20px',
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                  position: 'absolute',
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Checkmark Icon */}
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 bg-[#00A896] rounded-full flex items-center justify-center relative">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Congratulations!
          </h2>

          {/* Message */}
          <p className="text-lg text-gray-700 mb-4">
            You qualify for a $2,478 Rebate Credit
          </p>
          <p className="text-3xl font-bold text-[#00A896] mb-6">
          $2,478 Rebate Credit
          </p>

          {/* Status Button */}
          <div className="bg-green-100 text-green-800 font-semibold py-2 px-6 rounded-lg inline-block">
            Pre-Qualification Complete
          </div>
        </div>
      </div>
    </div>
  );
}

export default CongratulationsModal;
