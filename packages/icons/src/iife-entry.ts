import { ICONS, ICONS_META } from './generated/icons-data.js';

const g = (typeof window !== 'undefined' ? window : globalThis) as Record<string, unknown>;
const me = g['ME'] as { registerIcon?: (name: string, svg: string) => void } | undefined;

if (me?.registerIcon) {
  for (const [name, svg] of Object.entries(ICONS)) {
    me.registerIcon(name, svg);
  }
} else {
  console.warn('[@materialelements/icons] Load @materialelements/core before icons.');
}

g['ME_ICONS_META'] = ICONS_META;
