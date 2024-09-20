let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');
 // part 1

 let topMenuEl = document.getElementById('top-menu');
 topMenuEl.style.height = '100%';
 topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
 topMenuEl.classList.add('flex-around');
// part 2

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  menuLinks.forEach(link => {
    let aEl = document.createElement('a');
    aEl.href = link.href;
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
  });
    