(function(){
  const short = window.innerWidth <= 640;
  const copy = short
    ? 'Skinnervation © 2026  ·  Niels D. Nielsen'
    : 'Skinnervation © 2026  ·  Niels Dalsgaard Nielsen  ·  All rights reserved';

  const footer = document.createElement('footer');
  footer.id = 'skin-footer';
  footer.innerHTML = `
    <span>${copy}</span>
    <span>
      Version 1.0
      &nbsp;&middot;&nbsp;
      <a href="legal.html">Legal disclaimer</a>
      &nbsp;&middot;&nbsp;
      <a href="https://buymeacoffee.com/skinnervation" target="_blank" rel="noopener">&#9749; Buy us a coffee</a>
    </span>
  `;
  document.body.appendChild(footer);
})();
