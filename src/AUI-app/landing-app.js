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

        #h1 {
          font-family: sailregular, Arial, sans-serif;
          font-weight:normal;
          font-style:normal;
        }

        .welcome {
          padding-top: 200px;
          margin-bottom: 50px;
        }

        a {
          padding: 8px 12px;
          background: none;
          border-radius: 24px;
          border-color: white;
          font-size: 36px;
          color: white;
          border: 2px solid white;
          text-decoration: none;
          transition-duration: 0.5s;
        }

        a:hover{
          background-color: white;
          color: black;
        }


      </style>
        <div class="wallp">
            <h1 class="welcome"> [[welkom]] </h1>
            <a href="bestel.html">Naar Bestelmenu</a>
            <a href="tafeltoekennen.html">Tafels toevoegen</a>
        </div>

    `;
  }
  static get properties() {
    return {
      welkom: {
        type: String,
        value: "Welkom bij 030 Burgers"
      }
    };
  }
}

window.customElements.define('landing-app', LandingApp);
