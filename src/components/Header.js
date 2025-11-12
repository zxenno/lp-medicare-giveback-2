import React from 'react';

function Header({ onCheckEligibility }) {
  const handleCheckEligibility = () => {
    if (onCheckEligibility) {
      onCheckEligibility();
    } else {
      // Fallback: scroll to eligibility section
      const eligibilitySection = document.getElementById('eligibility');
      if (eligibilitySection) {
        eligibilitySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <header className="border-b border-border bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#00A896] rounded flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xl">+</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">mediplan assist.com</div>
            <div className="text-xs text-gray-500">MEDICARE PLAN ASSIST</div>
          </div>
        </div>
        <button 
          onClick={handleCheckEligibility}
          className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 flex items-center gap-2 bg-[#00A896] hover:bg-[#008c7a] text-white px-6 py-3 w-auto"
        >
          Check Eligibility
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
