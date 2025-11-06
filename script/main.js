(function () {
    const root = document.documentElement; 
    const toggle = document.getElementById('switch');

    // Leggi preferenza salvata (se esiste). Default = dark.
    const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
    const isDark = saved ? saved === 'dark' : true; // default dark

    // Applica stato iniziale
    root.classList.toggle('dark', isDark);
    if (toggle) toggle.checked = isDark;

    // Toggle su cambio checkbox
    toggle?.addEventListener('change', (e) => {
      const on = e.target.checked;
      root.classList.toggle('dark', on);
      localStorage.setItem('theme', on ? 'dark' : 'light');
    });
  })();