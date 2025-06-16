const handleMenuToggle = () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      document.getElementById('hamburger').classList.toggle('active');
      console.log('Clicked hamburger menu');
    });
  }
};

export { handleMenuToggle };
