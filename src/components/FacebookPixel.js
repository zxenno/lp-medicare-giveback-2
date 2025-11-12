import React, { useEffect } from 'react';

function FacebookPixel() {
  useEffect(() => {
    // Facebook Pixel Code
    /* eslint-disable */
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    
    // Initialize and track page view
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', '1116352030657647');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{display: 'none'}} 
        src="https://www.facebook.com/tr?id=1116352030657647&ev=PageView&noscript=1" 
        alt="" 
      />
    </noscript>
  );
}

export default FacebookPixel;
