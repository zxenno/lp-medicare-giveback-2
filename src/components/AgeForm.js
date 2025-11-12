import React, { useState, useEffect, useRef } from 'react';

function AgeForm({ onBack, onNext, zipCode }) {
  const [age, setAge] = useState('');
  const ageInputRef = useRef(null);

  useEffect(() => {
    // Auto-focus on the age input when component mounts
    if (ageInputRef.current) {
      ageInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Auto-advance to next step when age is entered (minimum 1 digit, reasonable max 3)
    if (age && parseInt(age) > 0 && parseInt(age) <= 120) {
      // Small delay to ensure the input is visible before transitioning
      const timer = setTimeout(() => {
        onNext({ zipCode, age: parseInt(age) });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [age, zipCode, onNext]);

  const handleNumberClick = (number) => {
    // Limit age to 3 digits (reasonable max age)
    if (age.length < 3) {
      setAge(age + number);
    }
  };

  const handleInputChange = (e) => {
    // Only allow numbers and limit to 3 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setAge(value);
  };

  const handleDelete = () => {
    setAge(age.slice(0, -1));
  };

  const handleNext = () => {
    if (age && parseInt(age) > 0) {
      onNext({ zipCode, age: parseInt(age) });
    }
  };

  const handleKeyDown = (e) => {
    // Allow Enter key to submit
    if (e.key === 'Enter' && age && parseInt(age) > 0) {
      handleNext();
    }
  };

  const isComplete = age && parseInt(age) > 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          What is your age?
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Please enter your current age:
        </p>

        {/* Age Input Field */}
        <div className="mb-8">
          <input
            ref={ageInputRef}
            type="text"
            inputMode="numeric"
            maxLength="3"
            value={age}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter your age"
            className="w-full max-w-xs mx-auto block h-14 md:h-16 text-center text-2xl font-semibold border-2 border-[#00A896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] bg-white"
          />
        </div>

        {/* Numeric Keypad */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="h-14 md:h-16 bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-semibold text-gray-800 transition-colors"
              >
                {num}
              </button>
            ))}
            <button
              onClick={handleDelete}
              className="h-14 md:h-16 bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-semibold text-gray-800 transition-colors"
            >
              X
            </button>
            <button
              onClick={() => handleNumberClick('0')}
              className="h-14 md:h-16 bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-semibold text-gray-800 transition-colors"
            >
              0
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!isComplete}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              isComplete
                ? 'bg-[#00A896] hover:bg-[#008c7a] text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeForm;
