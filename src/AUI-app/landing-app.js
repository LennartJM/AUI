import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class LandingApp extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host {
          display: block;

        }


        .wallp {
          background-image: url("../../assets/img/bg-1.jpg");
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          height: 100vh;
          text-align:center;
          color:white;
        }

        .welcome {
          padding-top: 200px;
          margin-bottom: 50px;
        }

        a {
          padding: 5px 10px;
          background: none;
          border-color: white;
          font-size: 20px;
          color: white;
          border: 2px solid white;
          text-decoration: none;
        }


      </style>
        <div class="wallp">
            <h1 class="welcome"> [[welkom]] </h1>
            <a href="bestel.html">Naar bestellijst</a>
        </div>

    `;
  }
  static get properties() {
    return {
      welkom: {
        type: String,
        value: "Welkom bij restaurant YEET"
      }
    };
  }
}

window.customElements.define('landing-app', LandingApp);
