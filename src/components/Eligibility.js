import React from 'react';

function Eligibility({ onCheckEligibility }) {
  const requirements = [
    "Age 65 or older.",
    "Enrolled in Medicare Part B.",
    "U.S. citizen or legal resident.",
    "Live in an eligible ZIP code."
  ]

  const handleCheckEligibility = () => {
    if (onCheckEligibility) {
      onCheckEligibility();
    } else {
      console.log('Check eligibility clicked');
    }
  }

  return (
    <section id="eligibility" className="py-8 md:py-12 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-lg md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            You Could Qualify in:<br />
            <span className="font-extrabold">Florida.</span>
          </h2>
          <p className="text-base md:text-base text-muted-foreground">
            Here are the basic requirements:
          </p>
        </div>
        
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-4 md:p-12">
          <div className="space-y-4 md:space-y-6">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-600 flex items-center justify-center">
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
                    className="h-3 w-3 md:h-4 md:w-4 text-white"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-base md:text-lg text-foreground font-medium">
                    {requirement.split('.').map((part, i, arr) => 
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}.<br />
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-6 md:pt-8 border-t border-border text-center">
            <p className="text-sm md:text-base text-foreground font-semibold mb-3 md:mb-4">
              If all 4 apply, you likely qualify. <br />
              Check your eligibility below:
            </p>
            <button 
              onClick={handleCheckEligibility}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md w-full md:w-auto text-base md:text-lg px-8 py-7 bg-[#00A896] hover:bg-[#008c7a] text-white"
            >
              Check Eligibility
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligibility;
