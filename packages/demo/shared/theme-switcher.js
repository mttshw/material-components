const DARK_THEME = {
  palette: {
    mode: 'dark',
    background: { default: '#121212', paper: '#1e1e1e' },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.6)',
      disabled: 'rgba(255,255,255,0.38)',
    },
    divider: 'rgba(255,255,255,0.12)',
    action: {
      active: 'rgba(255,255,255,0.54)',
      hover: 'rgba(255,255,255,0.08)',
      selected: 'rgba(255,255,255,0.16)',
      disabled: 'rgba(255,255,255,0.3)',
      disabledBackground: 'rgba(255,255,255,0.12)',
      focus: 'rgba(255,255,255,0.12)',
    },
  },
};

const LIGHT_THEME = { palette: { mode: 'light' } };

let isDark = false;

function toggleTheme() {
  const provider = document.querySelector('me-theme-provider');
  if (!provider) return;

  isDark = !isDark;
  provider.theme = isDark ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

  const btn = document.getElementById('theme-toggle');
  if (btn) btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
});
