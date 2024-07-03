window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', function(event) {
      event.preventDefault();
      const targetTab = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
  });
});
