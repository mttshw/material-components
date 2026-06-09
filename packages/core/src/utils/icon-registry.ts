const registry = new Map<string, string>();

export function registerIcon(name: string, svg: string): void {
  registry.set(name, svg);
}

export function getIcon(name: string): string | undefined {
  return registry.get(name);
}

export function listIcons(): string[] {
  return Array.from(registry.keys());
}
