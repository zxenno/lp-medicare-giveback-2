import React, { useState, useEffect } from 'react';
import clickingHand from '../assets/click2.gif';

function SuccessPageLinkout({ onBack }) {
  const [timeRemaining, setTimeRemaining] = useState(244); // 4 minutes 4 seconds in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} Minutes ${secs} Seconds`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Congratulations! You Qualify for a $2,478 Medicare Rebate
        </h1>
        <p className="text-lg text-gray-600">
          Complete your application on the next page:
        </p>
      </div>

      {/* Call to Action Card */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          Enter your information on the next page to claim it
        </h2>

        {/* Phone Button with Clicking Hand */}
        <div className="flex justify-center mb-4 relative overflow-visible">
          <a
            href="tel:8772690636"
            className="claim-button-animated bg-[#00A896] hover:bg-[#008c7a] text-white font-semibold py-4 px-8 rounded-lg flex items-center gap-3 text-lg transition-colors relative overflow-visible"
          >
            {/* Clicking Hand GIF coming up from lower right edge */}
            <img
              src={clickingHand}
              alt="Click to call"
              className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-10 w-20 h-20 pointer-events-none z-10"
              style={{ imageRendering: 'auto' }}
            />

            Claim Rebate
          </a>
        </div>

        {/* Agent Availability */}
        <div className="text-center mb-4">
          <p className="text-gray-700">
            <span className="font-medium">Agent Available:</span>{' '}
            <svg
              className="inline-block w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {formatTime(timeRemaining)}
          </p>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#00A896]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Please use this button to apply. It keeps your form information connected.</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="font-medium">Secure & Confidential</span>
          </div>
        </div>
      </div>

      {/* Pre-Qualified Banner */}
      <div className="bg-yellow-50 border-l-4 border-orange-400 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          You Pre-Qualified!
        </h3>
        
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">When you get to the next page:</p>
          <div className="space-y-2">
            <p className="text-gray-800">
              
              <strong>Verify your information and claim your rebate.</strong>
            </p>
            <p className="text-gray-600 text">OR</p>
            <p className="text-gray-800">
              <strong>Call the number at the end of the page</strong>
            </p>
          </div>
        </div>

        <div className="border-t border-yellow-200 pt-4 mt-4">
          <h4 className="font-bold text-gray-900 mb-2">Before You Call:</h4>
          <p className="text-gray-700 text-sm">
            To verify your Recovery Rebate Credit eligibility, our licensed agents may ask about your tax filing status, ZIP code, and income information. All information is kept strictly confidential and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPageLinkout;
