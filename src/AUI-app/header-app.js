import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class HeaderApp extends PolymerElement {
  static get template() {
    return html`
 <style>

        :host {
          display: block;
        }

        nav {
          display: inline-block;
          width: 100%;
          border-bottom: 1px solid #80808066;
          background-image: url("../../assets/img/bg-1.jpg");
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
        }

        ul {
          width: 50%;
          text-align: center;
          margin: 0 auto;
        }

        li {
          float: left;
          padding: 30px;
          text-align: center;
          list-style: none;
        }

        a {
          text-decoration: none;
          color: white;
          font-size: 20px;
        }

        a:hover {
          text-decoration: underline;
        }
      </style>
      <nav>
        <ul>
          <template is="dom-repeat" items="{{Menuitems}}" as="item">
          <li><a href="[[item.link]]">[[item.naam]]</a></li>
          </template>
        </ul>
      </nav>
    `;
  }
  static get properties() {
    return {
      Menuitems: {
        type: Array,
        value: [
          {naam: "Terug naar home screen", link: "/"},
          {naam: "Bestelling invoeren", link: "/bestel.html"},
          {naam: "Gerecht status", link: "/status-gerecht.html"}

        ]
      }
    };
  }
}

window.customElements.define('header-app', HeaderApp);
