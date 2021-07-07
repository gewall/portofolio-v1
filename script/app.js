let data = {
  sidebar: false,
};

let sidebar = document.querySelector('.sidebar');

// app

// sidebar Function
document.querySelector('.sidebar--button').addEventListener('click', (e) => {
  data.sidebar = !data.sidebar;

  handleSidebar();
});

const handleClickedSidebar = () => {
  document.querySelector('.sidebar').addEventListener('click', (e) => {
    e.target.id === 'sidebar' ? (data.sidebar = false) : null;

    handleSidebar();
  });
};

const handleSidebar = () => {
  return data.sidebar
    ? (sidebar.style.display = 'block')
    : (sidebar.style.display = 'none');
};

window.addEventListener('resize', (e) => {
  console.log('oke');
});

// load All Function
handleClickedSidebar();
navListItemHover();
