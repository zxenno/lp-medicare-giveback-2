import React from 'react';

function AlertBanner() {
  return (
    <div className="bg-blue-50 border-b border-blue-200 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-sm text-[#1A3B5C] text-center font-medium leading-relaxed">
          Medicare Part B Refund available in <span className="font-bold">FL</span>.<br />
          Residents can still apply NOV 11, 2025.
        </p>
      </div>
    </div>
  );
}

export default AlertBanner;

