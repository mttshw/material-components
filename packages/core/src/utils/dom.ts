export function getAttr(el: Element, name: string, defaultValue: string): string {
  return el.getAttribute(name) ?? defaultValue;
}

export function getBoolAttr(el: Element, name: string): boolean {
  return el.hasAttribute(name);
}

export function dispatch(
  el: EventTarget,
  type: string,
  detail: unknown = null,
): void {
  el.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
}
