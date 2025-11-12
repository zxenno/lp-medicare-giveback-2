import React from 'react';

function HowItWorks({ onCheckEligibility }) {
  const steps = [
    {
      number: 1,
      title: "Check Your Eligibility",
      description: "Answer 2 quick questions to see if you could qualify for the Medicare Part B Refund."
    },
    {
      number: 2,
      title: "Complete your application",
      description: "Verify your information and submit your claim."
    },
    {
      number: 3,
      title: "Receive Your Refund",
      description: "Once enrolled, eligible members may receive money back directly in their Social Security check."
    }
  ]

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

  return (
    <section id="how-it-works" className="py-8 md:py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Medicare Part B refund in 3 steps:
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center text-[#1A3B5C] font-bold text-lg md:text-xl">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base md:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4">
            Start the simple process below:
          </p>
          <button 
            onClick={handleCheckEligibility}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md w-full md:w-auto text-base md:text-lg px-8 py-7 bg-[#00A896] hover:bg-[#008c7a] text-white"
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
              className="ml-2 h-4 w-4 md:h-5 md:w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
