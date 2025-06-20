const sectionAnimations = () => {
  const sections = document.querySelectorAll('.section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // check if section is visible
      if (entry.isIntersecting) {
        entry.target.classList.add('section--visible');

        //stop observe to only animate once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
};

export { sectionAnimations };
