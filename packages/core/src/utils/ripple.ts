export const rippleSheet = new CSSStyleSheet();
rippleSheet.replaceSync(`
  @keyframes mc-ripple { to { transform: scale(1); opacity: 0; } }

  .mc-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: mc-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.3;
  }
`);

export class RippleController {
  private _target: HTMLElement | null = null;
  private _onPointerDown: ((e: PointerEvent) => void) | null = null;
  private _centered = false;

  attach(target: HTMLElement, options?: { centered?: boolean }): void {
    this.detach();
    this._target = target;
    this._centered = options?.centered ?? false;
    this._onPointerDown = (e: PointerEvent) => this._trigger(e);
    target.addEventListener('pointerdown', this._onPointerDown);
  }

  detach(): void {
    if (this._target && this._onPointerDown) {
      this._target.removeEventListener('pointerdown', this._onPointerDown);
    }
    this._target = null;
    this._onPointerDown = null;
  }

  private _trigger(e: PointerEvent): void {
    const target = this._target;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = this._centered ? (rect.width - size) / 2 : e.clientX - rect.left - size / 2;
    const y = this._centered ? (rect.height - size) / 2 : e.clientY - rect.top - size / 2;

    const wave = document.createElement('span');
    wave.className = 'mc-ripple-wave';
    wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    wave.addEventListener('animationend', () => wave.remove());
    target.appendChild(wave);
  }
}
