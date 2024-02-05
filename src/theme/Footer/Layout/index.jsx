import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        {/* <script data-jsd-embedded data-key="2bdf156b-05e4-4505-b0b5-fed52583c53c" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script> */}
        <script data-jsd-embedded data-key="2bdf156b-05e4-4505-b0b5-fed52583c53c" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script>
        <p className="footer__description mb-8"></p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta"></div>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
