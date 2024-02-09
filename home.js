



document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a.learn_more');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Add the class for slide-in animation
      document.body.classList.add('page-transition');

      // Wait for the animation to complete, then navigate to the new page
      setTimeout(() => {
        window.location.href = link.href;
      }, 500); // Adjust the delay to match the transition duration
    });
  });
});
