import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/*
*@customElement
*@polymer
*/

class LandingApp extends PolymerElement{
  static get template(){
    return html`
    <style>

      :host {
        display: block;

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
          <a href="bestel.html">bestel iets</a>
      </div>
  `;
}

  static get properties(){
    return{
      welkom:{
        type: String,
        value: "Welkom bij restaurant YEET voor al uw geYEET"
      }
    };
  }
}

window.customElements.define('Landing-app', LandingApp);
