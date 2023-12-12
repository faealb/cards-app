import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/accent-card/accent-card.js";
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "clothing-card/src/clothing-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardsApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--cards-app-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'my app';
  }

  render() {
    return html`
      <main>
        <meme-maker alt="grumpy cat" image-url="https://media.istockphoto.com/id/1434414228/photo/stern-sad-cat-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wis7NGP0_4_Vwti3xioilh3NfYrwHO-JoRMvFVzr6Ck=" top-text="I am tired" bottom-text="my tired is tired"></meme-maker>
        <clothing-card clothing="hoodie sales" information="Almost out of stock!"></clothing-card>
    </main>
    `;
  }
}

customElements.define('cards-app', CardsApp);