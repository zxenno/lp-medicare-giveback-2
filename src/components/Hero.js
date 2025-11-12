import React from 'react';

function Hero({ onCheckEligibility }) {
  const handleCheckEligibility = () => {
    if (onCheckEligibility) {
      onCheckEligibility();
    } else {
      const eligibilitySection = document.getElementById('eligibility');
      if (eligibilitySection) {
        eligibilitySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  const handleLearnMore = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="py-8 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-[#1A3B5C] px-3 py-1 rounded-full text-sm md:text-base font-medium mb-6">
          <span className="w-2 h-2 bg-[#6EE7B7] rounded-full animate-pulse"></span>
          Open Enrollment Now Active
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
            className="h-3 w-3 ml-0.5"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 leading-tight text-balance">
          Medicare Part B $2,478 Refund Available
        </h1>
        
        <p className="text-base md:text-2xl text-muted-foreground mb-5 max-w-3xl mx-auto leading-relaxed">
          You may get money back <br />
          on your Social Security check. <br />
          Check if you Qualify.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5">
          <button 
            onClick={handleCheckEligibility}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md text-lg md:text-xl px-8 py-8 md:px-10 md:py-9 w-full sm:w-auto bg-[#00A896] hover:bg-[#008c7a] text-white"
          >
            Check Your Eligibility
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
              className="ml-2 h-5 w-5 md:h-6 md:w-6"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          
          <button 
            onClick={handleLearnMore}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border shadow-xs h-10 rounded-md text-base px-6 py-4 w-full sm:w-auto bg-white hover:bg-gray-50 text-foreground hover:text-foreground"
          >
            Learn More
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground mb-5">
          <div className="flex items-center gap-2">
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
              className="h-3 w-3 text-green-600"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span>Licensed Agents</span>
          </div>
          <div className="flex items-center gap-2">
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
              className="h-3 w-3 text-green-600"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span>Secure & Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
