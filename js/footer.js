(function(){
  const year = new Date().getFullYear();
  const footer = document.createElement('footer');
  footer.id = 'skin-footer';
  footer.innerHTML = `
    <span class="footer-copy-full">Skinnervation &copy; 2026 &nbsp;&middot;&nbsp; Niels Dalsgaard Nielsen &nbsp;&middot;&nbsp; All rights reserved</span>
    <span class="footer-copy-short">Skinnervation &copy; 2026 &nbsp;&middot;&nbsp; Niels D. Nielsen</span>
    <span>
      Version 1.1
      &nbsp;&middot;&nbsp;
      <a href="legal.html">Legal disclaimer</a>
      &nbsp;&middot;&nbsp;
      <a href="https://buymeacoffee.com/skinnervation" target="_blank" rel="noopener">&#9749; Buy us a coffee</a>
    </span>
  `;
  document.body.appendChild(footer);
})();
