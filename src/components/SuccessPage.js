import React, { useState, useEffect } from 'react';

function SuccessPage({ onBack }) {
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
          Congratulations! You Qualify for a $2,478 Rebate Credit
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

        {/* Phone Button */}
        <div className="flex justify-center mb-4">
          <a
            href="tel:8772690636"
            className="bg-[#00A896] hover:bg-[#008c7a] text-white font-semibold py-4 px-8 rounded-lg flex items-center gap-3 text-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Claim Now
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
            <span>Please use this button to call. It keeps your form information connected.</span>
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
          <p className="text-gray-700 font-medium mb-2">When connected, say:</p>
          <div className="space-y-2">
            <p className="text-gray-800">
              "I just pre-qualified online and want to see if I can get the{' '}
              <strong>$1,400 Recovery Rebate Credits.</strong>"
            </p>
            <p className="text-gray-600 text-center">OR</p>
            <p className="text-gray-800">
              "I want to verify my <strong>$1,400 Recovery Rebate Credits.</strong>"
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

export default SuccessPage;

