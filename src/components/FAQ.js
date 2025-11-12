import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Medicare Part B Refund?",
      answer: "The Medicare Part B Refund is a premium reduction benefit that may be available to eligible Medicare beneficiaries. Some Medicare Advantage plans offer to pay part or all of your Medicare Part B premium, which can result in money back in your Social Security check."
    },
    {
      question: "Who qualifies for the Medicare Part B Refund?",
      answer: "To qualify, you typically need to be 65 or older, enrolled in Medicare Part B, a U.S. citizen or legal resident, and live in an eligible ZIP code. Specific eligibility requirements vary by plan and location."
    },
    {
      question: "How much can I save with the Medicare Part B Refund?",
      answer: "The amount varies by plan, carrier, and location. The $2,478 figure represents the maximum annual benefit available in select areas, but actual savings depend on your specific plan and circumstances."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="py-8 md:py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b last:border-b-0"
            >
              <h3 className="flex">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 text-base md:text-lg font-medium text-foreground"
                >
                  {faq.question}
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
                    className={`text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div 
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-4 text-sm text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

