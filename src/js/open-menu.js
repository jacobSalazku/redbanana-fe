const handleMenuToggle = () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const body = document.body;

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      document.getElementById('hamburger').classList.toggle('active');
      body.classList.toggle('no-scroll');
      console.log('Clicked hamburger menu');
    });
  }
};

export { handleMenuToggle };
