import React from 'react';

function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-6 h-6 bg-[#00A896] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">+</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-base text-muted-foreground mb-6">
          <a 
            href="https://www.mediplanassist.com/privacy" 
            className="hover:text-foreground"
          >
            Privacy
          </a>
          <a 
            href="https://www.mediplanassist.com/terms" 
            className="hover:text-foreground"
          >
            Terms
          </a>
        </div>
        
        <p className="text-base text-muted-foreground mb-2 whitespace-nowrap">
          © 2025 MediPlanAssist
        </p>
        
        <div className="text-sm text-muted-foreground mt-6 max-w-4xl mx-auto leading-relaxed space-y-3">
          <p className="text-left">
            <strong>Disclaimer:</strong> MediPlanAssist is a free referral service connecting consumers with licensed insurance agents. We are not affiliated with Medicare, CMS, SSA, or any government agency. The Medicare Part B premium reduction benefit varies by plan, carrier, and location. The $2,478 figure represents the maximum annual benefit in select areas and is not guaranteed. By using this site, you consent to be contacted by licensed agents who are compensated by insurance carriers. Eligibility and benefits are determined by the insurance carrier. For complete terms, see our{' '}
            <a 
              href="https://www.mediplanassist.com/terms" 
              className="underline hover:text-foreground"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a 
              href="https://www.mediplanassist.com/privacy" 
              className="underline hover:text-foreground"
            >
              Privacy Policy
            </a>.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
            Recovery Rebate Credit eligibility varies by individual circumstances and tax filing status. The $1,400 figure represents the maximum credit amount available per eligible individual. Actual credit amounts may vary based on income, filing status, and other factors. This service connects you with licensed tax professionals who can help determine your eligibility and assist with claiming your credits. Not affiliated with the IRS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

