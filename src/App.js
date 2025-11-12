import React, { useState } from 'react';
import Header from './components/Header';
import AlertBanner from './components/AlertBanner';
import Hero from './components/Hero';
import Eligibility from './components/Eligibility';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FacebookPixel from './components/FacebookPixel';
import ZipCodeForm from './components/ZipCodeForm';
import AgeForm from './components/AgeForm';
import LoadingStep from './components/LoadingStep';
// import RebateCreditForm from './components/RebateCreditForm';
import SuccessPage from './components/SuccessPage';
import SuccessPageLinkout from './components/SuccessPageLinkout';
import CongratulationsModal from './components/CongratulationsModal';

function App() {
  const [currentStep, setCurrentStep] = useState('home'); // 'home', 'zip', 'age', 'loading', 'rebate', 'success'
  const [formData, setFormData] = useState({ zipCode: '', age: '', rebateCredit: '' });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCheckEligibility = () => {
    setCurrentStep('zip');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep('home');
      setFormData({ zipCode: '', age: '', rebateCredit: '' });
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleZipCodeNext = (zipCode) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setFormData({ ...formData, zipCode });
      setCurrentStep('age');
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleAgeNext = (data) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setFormData({ ...formData, zipCode: data.zipCode, age: data.age });
      setCurrentStep('loading');
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleLoadingComplete = () => {
    // Skip rebate step and go directly to modal
    setShowModal(true);
  };

  // const handleRebateNext = (data) => {
  //   // Show modal first
  //   setShowModal(true);
  //   setFormData({ ...formData, rebateCredit: data.rebateCredit });
  // };

  const handleModalClose = () => {
    // Fade out modal and show success page
    setShowModal(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep('success');
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300); // Faster transition
  };

  const handleBackToZip = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep('zip');
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  // Get progress bar percentage and step text
  const getProgressInfo = () => {
    if (currentStep === 'zip') {
      return { step: 'Step 1 of 2', percentage: 50 };
    } else if (currentStep === 'age') {
      return { step: 'Step 2 of 2', percentage: 100 };
    } else if (currentStep === 'loading' || currentStep === 'rebate' || currentStep === 'success') {
      return { step: 'Step 2 of 2', percentage: 100 };
    }
    return { step: '', percentage: 0 };
  };

  const progressInfo = getProgressInfo();

  if (currentStep === 'zip' || currentStep === 'age' || currentStep === 'loading' || currentStep === 'rebate' || currentStep === 'success') {
    return (
      <div className="min-h-screen bg-gray-50">
        <FacebookPixel />
        
        {/* Show modal if needed */}
        {showModal && <CongratulationsModal onClose={handleModalClose} />}
        
        {/* Header - stays fixed */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#00A896] rounded flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Rebate Assistance</div>
                {/* <div className="text-xs text-gray-500">MEDICARE PLAN ASSIST</div> */}
              </div>
            </div>
          </div>
        </header>

        {/* Progress Indicator - stays fixed, updates content */}
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{progressInfo.step}</span>
            <div className="flex items-center gap-2 flex-1 mx-4">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#00A896] rounded-full transition-all duration-300 ease-in-out" 
                  style={{ width: `${progressInfo.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700">{progressInfo.percentage}%</span>
            </div>
          </div>
        </div>

        {/* Form Content - transitions */}
        <div className={`step-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {currentStep === 'zip' && (
            <ZipCodeForm onBack={handleBackToHome} onNext={handleZipCodeNext} />
          )}
          {currentStep === 'age' && (
            <AgeForm 
              onBack={handleBackToZip} 
              onNext={handleAgeNext} 
              zipCode={formData.zipCode}
            />
          )}
          {currentStep === 'loading' && (
            <LoadingStep onComplete={handleLoadingComplete} />
          )}
          {/* Commented out rebate step - skipping directly to modal */}
          {/* {currentStep === 'rebate' && (
            <RebateCreditForm 
              onNext={handleRebateNext}
              onBack={handleBackToZip}
              showModal={showModal}
              onModalClose={handleModalClose}
            />
          )} */}
          {currentStep === 'success' && (
            <SuccessPageLinkout onBack={handleBackToHome} />
          )}
        </div>

        {/* Footer - stays fixed */}
        <footer className="mt-auto py-6">
          <div className="flex justify-center">
            <div className="w-6 h-6 bg-[#00A896] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">+</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <FacebookPixel />
      <Header onCheckEligibility={handleCheckEligibility} />
      <AlertBanner />
      <Hero onCheckEligibility={handleCheckEligibility} />
      <Eligibility onCheckEligibility={handleCheckEligibility} />
      <HowItWorks onCheckEligibility={handleCheckEligibility} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
