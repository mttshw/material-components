function toggleTheme() {
  const provider = document.querySelector('mc-theme-provider');
  if (!provider) return;
  const isDark = provider.theme?.palette?.mode === 'dark';
  provider.theme = {
    palette: {
      mode: isDark ? 'light' : 'dark',
      ...(isDark
        ? {}
        : {
            background: { default: '#121212', paper: '#1e1e1e' },
            text: {
              primary: 'rgba(255,255,255,0.87)',
              secondary: 'rgba(255,255,255,0.6)',
              disabled: 'rgba(255,255,255,0.38)',
            },
          }),
    },
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
});
