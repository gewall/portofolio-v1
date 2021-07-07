const navListItemHover = () => {
  document.querySelectorAll('.nav--list-item').forEach((touched) => {
    touched.addEventListener('mousemove', (e) => {
      const xPos = e.offsetX;
      const yPos = e.offsetY;
      touched.addEventListener('mouseleave', (e) => {
        if (xPos > 20) {
          touched.style.backgroundPosition = 'right';
        } else {
          touched.style.backgroundPosition = 'left';
        }
        touched.removeEventListener('mouseleave', this);
      });
    });
  });
};
