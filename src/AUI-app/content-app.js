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

        :host {
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

      .item {
            background-color:blue !important;
        }

        .content{
          padding:20px;
          margin-left: -400px;
          background-image: url("../../assets/img/bg-1.jpg");
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
        }

        .content span {
          color: white;
        }

        button,
        a {
          margin-top: 30px;
          padding: 5px 10px;
          background: none;
          border-color: white;
          border-radius: 24px;
          font-size: 20px;
          color: white;
          border: 2px solid white;
          text-decoration: none;
          transtition-duration: 0.5s;
        }

        a:hover{
          background-color: white;
          color: black;
        }

        .tel {
          margin-left:300px;
          color:white;
        }

        .tafelnr {
              width: 60%;
              margin: 0 auto;
              margin-bottom: 50px;
              color:white;
        }

      </style>

     <div class="content">
     <div class="wrap">
     <h1 class="tel"> Bestel formulier </h1>
          <span class="tel"> Tafelnummer:</span> <paper-input type="number" class="tafelnr" always-float-label value="{{prop1}}" ></paper-input>
            <searchable-multi placeholder="Search fruits...">
            <select multiple>
                <option>Euro Burger</option>
                <option>Hamburger kip</option>
                <option>Hamburger speciaal</option>
                <option >Vegan deluxe</option>
                <option>Broodje bal</option>
                <option>HU speciaal</option>
            </select>
          </searchable-multi>
          <button style="margin-left: 295px;" raised on-click="handleClick">Bestel</button>
          <a href="/" style="margin-left: 690px;">Annuleer</a>
      </div>
      </div>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String
      },
      Gerechten:{
        type:Array,
         value: [
          "Hamburger speciaal",
          "HU speciaal",
          "Euro Burger"
        ]
      },
      Bestellingen:{
        type:Array,
        value: [
          {gerecht: "HU Speciaal", status: "besteld"}
        ]
      }
    };
  }

 handleClick() {
        let new_array = new Array();
         let multi = this.shadowRoot.querySelector('searchable-multi');
         let input = this.shadowRoot.querySelector('paper-input');
        if (localStorage.getItem("gerechten_lijst") !== null){
          new_array = JSON.parse(localStorage.getItem("gerechten_lijst"));
        }
    if(multi.value.length > 0 && input.value){
        for (var i = multi.value.length - 1; i >= 0; i--) {

          if(multi.value[i] == "Vegan deluxe"){
              alert("het gerecht " + multi.value[i] + " is helaas niet meer beschikbaar");
          }else{
            new_array.push({tafelnr:input.value,gerecht: multi.value[i], status: "Besteld"});
          }
        }

        localStorage.setItem("gerechten_lijst",JSON.stringify(new_array));

        alert("De gerechten zijn in behandeling");
        document.location.reload(true);

      }else{
        alert("Er mist nog een tafelnummer of je hebt geen gerechten geslecteerd");
      }
    }
}

window.customElements.define('content-app', ContentApp);
