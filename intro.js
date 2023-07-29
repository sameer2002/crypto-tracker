function showPage(index) {
    const pages = document.querySelectorAll('.pages .page');
    const tabs = document.querySelectorAll('.tabs .tab');
  
    // Hide all pages and remove the 'active' class from tabs
    pages.forEach(page => page.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Show the selected page and set the 'active' class on the clicked tab
    pages[index].classList.add('active');
    tabs[index].classList.add('active');
    if(tabs.ClassName==='active'){
        tabs.style.backgroundColor = "red";
    }
  }
  