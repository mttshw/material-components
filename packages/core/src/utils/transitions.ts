export function transition(
  properties: string[],
  durationVar = 'var(--mc-transitions-duration-standard, 300ms)',
  easingVar = 'var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1))',
): string {
  return properties.map((p) => `${p} ${durationVar} ${easingVar}`).join(', ');
}
