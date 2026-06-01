(function(){
  const pages = [
    { href: 'app.html',   label: 'App'   },
    { href: 'guide.html', label: 'Guide' },
    { href: 'about.html', label: 'About' },
  ];
  const cur = location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  nav.id = 'skin-nav';

  const brand = document.createElement('a');
  brand.className = 'nav-brand';
  brand.href = 'index.html';
  brand.innerHTML = '<span>Skinnervation</span><span>Index of Cutaneous Innervation</span>';
  nav.appendChild(brand);

  pages.forEach(({href, label}) => {
    const a = document.createElement('a');
    a.className = 'nav-link' + (cur === href ? ' active' : '');
    a.href = href;
    a.textContent = label;
    nav.appendChild(a);
  });

  // Insert as first child of body (before any existing header)
  document.body.insertBefore(nav, document.body.firstChild);
})();
