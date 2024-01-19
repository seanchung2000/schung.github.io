import React, { useEffect, useState } from 'react';

const App = () => {
  const [navHidden, setNavHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (lastScrollY < currentScrollY) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }

    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only add/remove the event listener on mount/unmount

  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', reveal);

    // To check the scroll position on the page load
    reveal();

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []); // Only add/remove the event listener on mount/unmount

  return (
    <div>
      {/* Your React components go here */}
      <div className={navHidden ? 'nav nav--hidden' : 'nav'}>
        {/* Navigation content */}
      </div>
      <div className="reveal">
        {/* Your reveal content */}
      </div>
    </div>
  );
};

export default App;
