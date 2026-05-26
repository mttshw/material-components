export function transition(
  properties: string[],
  durationVar = 'var(--me-transitions-duration-standard, 300ms)',
  easingVar = 'var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1))',
): string {
  return properties.map((p) => `${p} ${durationVar} ${easingVar}`).join(', ');
}
