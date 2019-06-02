import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import 'high-select/lib/high-select.js';

/**
 * @customElement
 * @polymer
 */
class GerechtContentApp extends PolymerElement {
  static get template() {
    return html`
        <style>

            :host {
              display: block;
              background-image: url("../../assets/img/bl.jpg");
              background-size: cover !important;
              background-repeat: no-repeat !important;
              background-position: center center !important;
              height: 100vh;

            }

            .content{
            padding:20px;

            }

            table{
                width: 100%;
                border-collapse: collapse;
                text-align: left;
            }

            table, th, td{
                border: 1px solid white;
                color: white;
            }
            h1 {
              color: white;
            }

            #caller {
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
        }

        contact {
          width: 300px;
        }
        </style>
        <h1>Status van de gerechten:</h1>
        <div class="content">
            <table>
                <tr style="width:300px !important;">
                <th style = width:10%>Tafelnummer</th>
                <th style = width:70%>Gerechtnaam</th>
                <th style = width:30%>Gerechtstatus</th>
                </tr>
                <template is="dom-repeat" items="{{Bestellingen}}" as="bestelling">
                        <tr>
                            <td style= width:10%>[[bestelling.tafelnr]]</td>
                            <td style = width:20%>[[bestelling.gerecht]]</td>
                            <td style = width:20%>

                                <high-select search on-change="hello" style="color:white;">
                                    <high-option>[[bestelling.status]]</high-option>
                                    <template is="dom-repeat" items="{{status}}" as="state">
                                        <high-option>[[state]]</high-option>
                                    </template>
                                </high-select>
                            </td>
                        </tr>
                </template>

            </table>
      </div>
      <a href="bestel.html" style="margin-left: 295px;" >Ga terug naar bestelscherm</a>
      <a href="/" style="margin-left: 690px;">Annuleer</a>
    `;
  }
  static get properties() {
    return {
      Tafels:{
        type:Object,
         value:
          JSON.parse(localStorage.getItem("gerecht-lijst"))
      },
      status:{
        type:Array,
         value: [
           "Besteld",
           "Wordt bereid",
           "Serveerbaar"
         ]
      }
    };

  }
  hello(evt){

      console.log(evt.path[2].rowIndex);
      let list = JSON.parse(localStorage.getItem("lijst"));
      list[evt.path[2].rowIndex-1].status = evt.path[0].value;
      console.log(list);
      localStorage.setItem("lijst",JSON.stringify(list));
  }

}

window.customElements.define('gerechtcontent-app', GerechtContentApp);
