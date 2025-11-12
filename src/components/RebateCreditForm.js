import React, { useState } from 'react';
import CongratulationsModal from './CongratulationsModal';

function RebateCreditForm({ onNext, onBack, showModal, onModalClose }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleContinue = () => {
    if (selectedOption) {
      onNext({ rebateCredit: selectedOption });
    }
  };

  return (
    <>
      {showModal && <CongratulationsModal onClose={onModalClose} />}
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Information Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              You Could Qualify For Recovery Act Audit $1,400 Recovery Rebate Credits.
            </h2>
            <p className="text-base text-gray-600">
              The IRS estimates that over 9 million Americans haven't claimed their credits.
            </p>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Have you claimed your $1,400 Rebate Credit?
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Please select an option:
            </p>

            {/* Answer Options - Centered */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <button
                onClick={() => setSelectedOption('No')}
                className={`w-full max-w-md px-6 py-4 rounded-lg border-2 font-medium transition-all ${
                  selectedOption === 'No'
                    ? 'border-[#00A896] bg-[#00A896]/10 text-[#00A896]'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                No
              </button>
              <button
                onClick={() => setSelectedOption('Yes')}
                className={`w-full max-w-md px-6 py-4 rounded-lg border-2 font-medium transition-all ${
                  selectedOption === 'Yes'
                    ? 'border-[#00A896] bg-[#00A896]/10 text-[#00A896]'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setSelectedOption('Not Sure')}
                className={`w-full max-w-md px-6 py-4 rounded-lg border-2 font-medium transition-all ${
                  selectedOption === 'Not Sure'
                    ? 'border-[#00A896] bg-[#00A896]/10 text-[#00A896]'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                Not Sure
              </button>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center">
              <button
                onClick={handleContinue}
                disabled={!selectedOption}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  selectedOption
                    ? 'bg-[#00A896] hover:bg-[#008c7a] text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RebateCreditForm;
