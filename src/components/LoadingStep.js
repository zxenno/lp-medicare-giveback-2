import React, { useState, useEffect } from 'react';

function LoadingStep({ onComplete }) {
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    'Verifying your information',
    'Checking Medicare Eligibility...',
    'Reviewing Your Responses...',
    'Preparing Your Results...'
  ];

  useEffect(() => {
    // Cycle through each phase
    const phaseTimers = phases.map((_, index) => {
      return setTimeout(() => {
        setCurrentPhase(index);
      }, index * 1500); // 1.5 seconds per phase
    });

    // After all phases, move to next step
    const completeTimer = setTimeout(() => {
      onComplete();
    }, phases.length * 1500);

    return () => {
      phaseTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          {/* Loading Spinner */}
          <div className="mb-6">
            <div className="w-16 h-16 border-4 border-[#00A896] border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          {/* Loading Text */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            {phases[currentPhase]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoadingStep;

