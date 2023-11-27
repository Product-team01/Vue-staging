import React, { useState } from 'react';
import Layout from '@theme/Layout';
import HomeFooter from '../components/homepage/HomeFooter';
import clsx from 'clsx';
import { useMemo } from 'react';
import { Minus, Plus, Search } from 'react-feather';
import { paramCase } from 'param-case';
import ReactMarkdown from 'react-markdown';
import './relase.css';
import FAQs from '../faq';
import { useEffect } from 'react';
import HelpSection from '../components/homepage/HelpSection';
import {
  PaddingDown20Filled,
  PaddingLeft20Filled,
} from '@fluentui/react-icons';

const tags = FAQs.reduce((allTags, faq) => {
  if (!faq.tags) return allTags;

  for (const tag of faq.tags) {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  }
  return allTags;
}, []);

function Accordion({ title, children, open, onOpen, onClose }) {
  const headingId = paramCase(title);
  const panelId = headingId + '-panel';

  const handleOpen = () => {
    if (!open) {
      onOpen();
      history.pushState({}, '', '#' + headingId);
    } else {
      onClose();
      history.pushState({}, '', '');
    }
  };

  return (
    <div
      id={'parent-' + headingId}
      className={clsx(
        'dyte-accordion cursor-pointer border-0 border-solid last-of-type:border-0',
        open
          ? 'mb-4 rounded-2xl bg-secondary-800'
          : 'border-b border-zinc-300 dark:border-zinc-700'
      )}
      role="tab"
      aria-expanded={open}
      aria-controls={panelId}
    >
      {/* Summary */}
      <div
        role="heading"
        className={clsx(
          'flex w-full cursor-pointer select-none items-center justify-between gap-4 border-0 border-solid bg-transparent p-6',
          open && '!pb-0 text-primary dark:text-primary-100'
        )}
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
        id={headingId}
      >
        <h3 id={headingId} className="text-lg font-semibold">
          {title}
        </h3>
        <div className="text-zinc-300">
          <Minus
            className={clsx(
              'h-4 w-4 text-zinc-500 dark:text-zinc-300',
              !open && 'hidden'
            )}
          />
          <Plus
            className={clsx(
              'h-4 w-4 text-primary-100',
              open ? 'hidden' : 'block'
            )}
          />
        </div>
      </div>

      {/* Contents */}
      <div
        role="region"
        id={panelId}
        aria-labelledby={headingId}
        className={clsx(
          'accordion-content p-6 !pt-0',
          open ? 'block' : 'hidden'
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeFAQ, setActiveFAQ] = useState('');
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const faqId = window.location.hash.substring(1);

    if (faqId !== '') {
      setActiveFAQ(faqId);
      document.querySelector('#parent-' + faqId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, []);

  const filteredFAQs = useMemo(() => {
    if (query.trim() === '') {
      if (activeTab === 'All') {
        return FAQs;
      }
      return FAQs.filter((faq) => faq.tags.includes(activeTab));
    }

    return FAQs.filter((faq) => {
      const str = faq.question + ' ' + faq.answer + ' ' + faq.tags.join(' ');
      return str.toLowerCase().includes(query.toLowerCase());
    });
  }, [activeTab, query]);

  function Pill({ tag }) {
    return (
      <button
        className={clsx(
          'cursor-pointer rounded-md border-none px-3.5 py-1.5 font-jakarta text-sm font-medium',
          activeTab === tag
            ? 'bg-primary text-white'
            : 'bg-secondary-800 text-black dark:text-white'
        )}
        data-tag={tag}
        onClick={() => setActiveTab(tag)}
      >
        {tag}
      </button>
    );
  }

  return (
    <Layout wrapperClassName="faq-page bg-secondary-1000" noFooter>
      {/* Hero? */}
      <>
        <link rel="stylesheet" href="relase.css" />
        <body>
          <div id="page-container">
            <h1>Release Notes</h1>
            <section>
              <div id="changelogs">
                <div id="items">
                  {/* Version 1.0.1 */}

                  {/* Version 1.0.0 */}
                 

                  {/* Version 2.0 */}
                  <div className="item">
                    <div className="timeline">
                      <div>
                        <div className="meta">
                          <div className="version">Blox v2</div>
                          <div className="release-date"> today</div>
                        </div>
                        <div className="connector">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3> Content Hub - Catalog Create 🚀</h3>

                      <p></p>
                      <div className="feature">
                        <div className="tag new">New</div>

                        <p>
                          Customers can now connect and manage multiple data
                          sources within the same catalog
                        </p>
                      </div>
                      <div className="feature">
                        <div className="tag enhancements">Enhancement</div>
                        <p>
                          Add multiple connectors to the same catalog Manage and
                          organize data from multiple sources in one place
                        </p>
                      </div>
                      <div className="feature">
                        <h3> Content Hub - Catalog Explore </h3>
                      </div>
                      <div className="feature">
                        <div className="tag new">New</div>

                        <p>
                          <b>Manually upload adhoc files:</b>
                          You will now be able to upload Catalog data in either
                          csv or json formats o any existing Catalog with a
                          ‘Manual’ data source
                        </p>
                      </div>
                      <div className="feature">
                        <div className="tag enhancements">Enhancement</div>
                        <p>
                          Customers can add files using manual upload method
                        </p>
                      </div>
                      <div className="feature">
                        <h3> Content Hub - Enrich </h3>
                      </div>
                      <div className="feature">
                        <div className="tag fixes">Fixes</div>
                        <p>
                        improve the accuracy and performance of the image classification process. 
                        </p>
                      </div>
                     
                    </div>
                  </div>

                  {/* <div className="item">
                    <div className="timeline">
                      <div>
                        <div className="meta">
                          <div className="version">Version 2.0.0</div>
                          <div className="release-date">New Release Date</div>
                        </div>
                        <div className="connector">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3>New features in Version 2.0.0! 🚀</h3>
                      <p>
                        Describe the new features and changes in version 2.0.0.
                      </p>
                      <div className="feature">
                        <div className="tag new">New</div>
                        <p>Highlight any new additions.</p>
                      </div>
                      <div className="feature">
                        <div className="tag enhancements">Enhancement</div>
                        <p>Describe any enhancements or improvements.</p>
                      </div>
                      <div className="feature">
                        <div className="tag fixes">Fixes</div>
                        <p>
                          Mention any bug fixes or issues that have been
                          addressed.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="item">
                    <div className="timeline has-next">
                      <div>
                        <div className="meta">
                          <div className="version">Blox v3</div>
                          <div className="release-date"></div>
                        </div>
                        <div className="connector">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3>Welcome to Vue!</h3>
                      <p>
                        {/* Content for Version 1.0.0 */}
                        Welcome to Connectors Hub, which enables you to connect
                        to any data sources and create datasets. Whether you are
                        a IT head or data scientist or site merchandizer or
                        analyst, you now have the ability to onboard your data,
                        for consumption or analysis downstream or to simply
                        unify, transform & write to any destination. With
                        Connector Hub, you can easily upload, configure, and
                        manage datasets. Onboard data from over 200+ data
                        sources by creating source, destination & connections,
                        by configuring schema, data validations, sync mode &
                        schedule and manage your data. Data management made
                        effortless. Here’s the host of features that await you!
                      </p>
                      <h3>Connectors Hub</h3>
                      <p>
                        {/* More content for Version 1.0.0 */}
                        Welcome to Connectors Hub, which enables you to connect
                        to any data sources and create datasets. Whether you are
                        a IT head or data scientist or site merchandizer or
                        analyst, you now have the ability to onboard your data,
                        for consumption or analysis downstream or to simply
                        unify, transform & write to any destination. With
                        Connector Hub, you can easily upload, configure, and
                        manage datasets. Onboard data from over 200+ data
                        sources by creating source, destination & connections,
                        by configuring schema, data validations, sync mode &
                        schedule and manage your data. Data management made
                        effortless. Here’s the host of features that await you!
                      </p>
                    </div>
                  </div>
                </div>
                <div id="pagination" tabIndex="0"></div>
              </div>

              <form id="subscribe">
                <div>
                  <h2>Keep up to date!</h2>
                  <div>Want to be the first to hear about changes?</div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email..."
                  />
                  <button className="button" type="button" id="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </section>
          </div>
          <script src="relase.js"></script>
        </body>
      </>
      <HelpSection className="relative z-10 border border-solid border-secondary-700" />
    </Layout>
  );
}
