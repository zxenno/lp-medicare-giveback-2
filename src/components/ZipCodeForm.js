import React, { useState, useEffect, useRef } from 'react';

function ZipCodeForm({ onBack, onNext }) {
  const [zipCode, setZipCode] = useState(['', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstInputRef = useRef(null);

  useEffect(() => {
    // Auto-focus on the first ZIP code input when component mounts
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Auto-advance to next step when ZIP code is complete
    const fullZip = zipCode.join('');
    if (fullZip.length === 5) {
      // Small delay to ensure the last digit is visible before transitioning
      const timer = setTimeout(() => {
        onNext(fullZip);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [zipCode, onNext]);

  const handleNumberClick = (number) => {
    if (currentIndex < 5) {
      const newZipCode = [...zipCode];
      newZipCode[currentIndex] = number;
      setZipCode(newZipCode);
      if (currentIndex < 4) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleInputChange = (index, value) => {
    // Only allow numbers
    if (value === '' || /^\d$/.test(value)) {
      const newZipCode = [...zipCode];
      newZipCode[index] = value;
      setZipCode(newZipCode);
      
      // Auto-advance to next field if a digit was entered
      if (value !== '' && index < 4) {
        setCurrentIndex(index + 1);
        // Focus next input
        setTimeout(() => {
          const nextInput = document.getElementById(`zip-input-${index + 1}`);
          if (nextInput) nextInput.focus();
        }, 0);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && zipCode[index] === '' && index > 0) {
      const newZipCode = [...zipCode];
      newZipCode[index - 1] = '';
      setZipCode(newZipCode);
      setCurrentIndex(index - 1);
      setTimeout(() => {
        const prevInput = document.getElementById(`zip-input-${index - 1}`);
        if (prevInput) prevInput.focus();
      }, 0);
    }
  };

  const handleDelete = () => {
    if (currentIndex > 0) {
      const newZipCode = [...zipCode];
      newZipCode[currentIndex - 1] = '';
      setZipCode(newZipCode);
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0 && zipCode[0] !== '') {
      const newZipCode = [...zipCode];
      newZipCode[0] = '';
      setZipCode(newZipCode);
    }
  };

  const handleInputFocus = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const fullZip = zipCode.join('');
    if (fullZip.length === 5) {
      onNext(fullZip);
    }
  };

  const isComplete = zipCode.every(digit => digit !== '') && zipCode.join('').length === 5;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          What is your ZIP code?
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Please enter your ZIP code:
        </p>

        {/* ZIP Code Input Fields */}
        <div className="flex justify-center gap-2 mb-8">
          {zipCode.map((digit, index) => (
            <input
              key={index}
              id={`zip-input-${index}`}
              ref={index === 0 ? firstInputRef : null}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => handleInputFocus(index)}
              className={`w-14 h-14 md:w-16 md:h-16 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] ${
                index === currentIndex
                  ? 'border-[#00A896] bg-[#00A896]/5'
                  : 'border-[#00A896] bg-white'
              }`}
            />
          ))}
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

export default ZipCodeForm;
