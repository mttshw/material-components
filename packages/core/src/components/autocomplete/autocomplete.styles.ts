const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    vertical-align: top;
  }

  .me-autocomplete__input-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .me-autocomplete__input {
    width: 100%;
    font: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    background: transparent;
    border: 1px solid var(--me-palette-divider, rgba(0,0,0,0.23));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    padding: 16.5px 40px 16.5px 14px;
    outline: none;
    box-sizing: border-box;
    transition: border-color 200ms cubic-bezier(0.4,0,0.2,1);
    background-color: var(--me-palette-background-paper, #fff);
  }
  .me-autocomplete__input:hover { border-color: var(--me-palette-text-primary, rgba(0,0,0,0.87)); }
  .me-autocomplete__input:focus { border-color: var(--me-palette-primary-main, #1976d2); border-width: 2px; padding: 15.5px 39px 15.5px 13px; }

  .me-autocomplete__label {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    pointer-events: none;
    transition: all 150ms cubic-bezier(0.4,0,0.2,1);
    background: var(--me-palette-background-paper, #fff);
    padding: 0 4px;
  }
  .me-autocomplete__input:focus ~ .me-autocomplete__label,
  .me-autocomplete--has-value .me-autocomplete__label {
    top: 0;
    font-size: 0.75rem;
    color: var(--me-palette-primary-main, #1976d2);
  }
  .me-autocomplete__input:not(:focus) ~ .me-autocomplete__label {
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
  .me-autocomplete--has-value:not(:focus-within) .me-autocomplete__label {
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }

  .me-autocomplete__arrow {
    position: absolute;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--me-palette-action-active, rgba(0,0,0,0.54));
    transition: transform 200ms;
    display: flex;
  }
  :host([open]) .me-autocomplete__arrow { transform: translateY(-50%) rotate(180deg); }

  .me-autocomplete__clear {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    color: var(--me-palette-action-active, rgba(0,0,0,0.54));
    display: none;
    align-items: center;
    justify-content: center;
  }
  .me-autocomplete--has-value .me-autocomplete__clear { display: flex; }

  .me-autocomplete__listbox {
    display: none;
    position: fixed;
    z-index: var(--me-zIndex-modal, 1300);
    background: var(--me-palette-background-paper, #fff);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,.2),
      0px 8px 10px 1px rgba(0,0,0,.14),
      0px 3px 14px 2px rgba(0,0,0,.12));
    max-height: 256px;
    overflow-y: auto;
    padding: 8px 0;
    min-width: 100px;
  }
  :host([open]) .me-autocomplete__listbox { display: block; }

  .me-autocomplete__option {
    padding: 6px 16px;
    font-size: 1rem;
    cursor: pointer;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    transition: background 150ms;
    list-style: none;
  }
  .me-autocomplete__option:hover,
  .me-autocomplete__option[aria-selected="true"],
  .me-autocomplete__option.focused {
    background: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }
  .me-autocomplete__option[aria-selected="true"] {
    background: color-mix(in srgb, var(--me-palette-primary-main, #1976d2) 8%, transparent);
  }
  .me-autocomplete__no-options {
    padding: 12px 16px;
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
`);
export default sheet;
