import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * @customElement
 * @polymer
 */

 class ContentApp extends PolymerElement {
   static get template() {
     return html`
      <style>

      :host{
        display: block;
        margin-left: 21%;
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

      .item{
        background-color: blue !important;
      }

     </style>

     <div class="content">
       <div class="wrap">
       <h1 class="tel">Bestel Menu</h1>
        <span class="tel"> Tafelnummer:</span> <paper-input type="number" class="tafelnr" always-float-label value="{{prop1}}"></paper-input>
          <searchable-multi placeholder="gerechten ...">
          <select multiple>
            <option>Broodje ball</option>
            <option>Hamburger Speciaal</option>
            <option>De Domtoren</option>
            <option>HU Speciaal</option>
            <option>Hamburger Kaas</option>
            <option>Vegan deluxe</option>
           </select>
          </searchable-multi>
       </div>
     </div>
     `;
   }
 }
