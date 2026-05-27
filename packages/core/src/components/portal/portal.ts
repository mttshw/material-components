/**
 * MEPortal moves its light-DOM children to a target container (default: document.body).
 * On disconnect it moves them back to restore the original DOM position.
 */
export class MEPortal extends HTMLElement {
  private _placeholder: Comment | null = null;
  private _movedNodes: Node[] = [];

  get container(): Element {
    const sel = this.getAttribute('container');
    return (sel ? document.querySelector(sel) : null) ?? document.body;
  }

  connectedCallback(): void {
    // Mark our position with a placeholder comment
    this._placeholder = document.createComment('me-portal');
    this.parentNode?.insertBefore(this._placeholder, this);

    // Move all children to the container
    this._movedNodes = Array.from(this.childNodes);
    this._movedNodes.forEach(n => this.container.appendChild(n));

    // Hide the portal element itself (it's just a mount point)
    this.style.display = 'none';
  }

  disconnectedCallback(): void {
    // Move nodes back before the placeholder
    if (this._placeholder?.parentNode) {
      this._movedNodes.forEach(n => this._placeholder!.parentNode!.insertBefore(n, this._placeholder!));
      this._placeholder.remove();
    }
    this._movedNodes = [];
    this._placeholder = null;
  }
}

customElements.define('me-portal', MEPortal);
