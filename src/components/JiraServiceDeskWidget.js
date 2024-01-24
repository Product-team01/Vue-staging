// src/components/JiraServiceDeskWidget.js
import React, { useEffect } from 'react';

const JiraServiceDeskWidget = () => {
  useEffect(() => {
    // Load the Atlassian JSD widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://jsd-widget.atlassian.com/assets/embed.js';
    script.async = true;
    script.dataset.jsdEmbedded = true;
    script.dataset.key = '2bdf156b-05e4-4505-b0b5-fed52583c53c';
    script.dataset.baseUrl = 'https://jsd-widget.atlassian.com';

    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div>{/* Your Docusaurus content goes here */}</div>;
};

export default JiraServiceDeskWidget;
