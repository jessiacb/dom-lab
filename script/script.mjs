// Menu link data
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  //Part 1
  //1.    Select and cache the <main> element in a variable named mainEl.
  const mainEl = document.getElementsByTagName('main');
  console.log(mainEl[0]);
  
  // 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
  // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
  mainEl[0].style.backgroundColor = 'var(--main-bg)';
  
  // 3.    Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
  mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
  
  // 4.    Add a class of flex-ctr to mainEl.
  // Hint: Use the Element.classList API.
  mainEl[0].classList.add(`flex-ctr`);
  
  //Part 2:
  // 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
  const topMenuEl = document.getElementById(`top-menu`);
  console.log(topMenuEl);
  
  // 2.   Set the height of the topMenuEl element to be 100%.
  topMenuEl.style.height = `100%`;
  
  // 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
  topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
  
  // ^^^ Dylan's code. The following is part 2 of this lab.

var menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog',
      href: '#',
      subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ],
    },
    {
      text: 'orders',
      href: '#',
      subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ],
    },
    {
      text: 'account',
      href: '#',
      subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ],
    },
  ];
  // menu link
  
  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
  mainEl.classList.add('flex-ctr');
  
  const topMenuEl = document.getElementById('top-menu');
  topMenuEl.style.height = '100%';
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');
  
  menuLinks.forEach((link) => createLink(link, topMenuEl));
  // modifying elements in top menu

  const subMenuEl = document.getElementById('sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add('flex-around');
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = '0';
  // set up for sub menu
  
  const topMenuLinks = document.querySelectorAll('#top-menu a');
  
  topMenuEl.addEventListener('click', handleNavClick);
  subMenuEl.addEventListener('click', handleSubNavClick);
  
  function createLink(linkObj, parentEl) {
    const linkEl = document.createElement('a');
    linkEl.href = linkObj.href;
    linkEl.textContent = linkObj.text;
    parentEl.appendChild(linkEl);
  }
  
  let currentSubLinks = null;
  
  function handleNavClick(e) {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
  
    topMenuLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  
    const clickedLink = menuLinks.find(link => link.text === e.target.textContent);
    if (clickedLink && clickedLink.subLinks) {
      currentSubLinks = clickedLink.subLinks;
      buildSubMenu(currentSubLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
      mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
    }
  }
  // main menu clicks

  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(link => createLink(link, subMenuEl));
  }
  
  function handleSubNavClick(e) {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
    // sub menu clicks
  
    subMenuEl.style.top = '0';
    topMenuLinks.forEach(link => link.classList.remove('active'));
    mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
  }