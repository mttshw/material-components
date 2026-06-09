import { registerIcon } from '@materialelements/core';
import { ICONS } from './generated/icons-data.js';

for (const [name, svg] of Object.entries(ICONS)) {
  registerIcon(name, svg);
}

export { ICONS };
