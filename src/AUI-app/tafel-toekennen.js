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
              background-image: url("../../assets/img/wallpaper.jpg");
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
                border: 1px solid black;
                color: black;
            }
            h1 {
              color: black;
            }

            #caller {
              color: black;
            }
                    button,
        a {
          margin-top: 30px;
          padding: 5px 10px;
          background: none;
          border-color: black;
          font-size: 20px;
          color: black;
          border: 2px solid black;
          text-decoration: none;
        }

        contact {
          width: 300px;
        }
        </style>
        <h1>Openstaande gerechten</h1>
        <div class="content">
            <table>
                <tr style="width:300px !important;">
                    <th style = width:50%>Tafelnummer</th>
                    <th style = width:50%>Tafel Status</th>
                </tr>
                <template is="dom-repeat" items="{{Tafels}}" as="tafels">
                        <tr>
                            <td style= width:10%>[[tafels.tafelnr]]</td>
                            <td style = width:20%><high-select search on-change="hello" style="color:black;">
                                    <high-option>[[tafels.status]]</high-option>
                                    <template is="dom-repeat" items="{{status}}" as="state">
                                        <high-option>[[state]]</high-option>
                                    </template>
                                </high-select></td>
                        </tr>
                </template>

            </table>
      </div>

    ;
  }
  static get properties() {
    return {
      Tafels:{
        type:Object,
         value:
          JSON.parse(localStorage.getItem("tafel_lijst"))
      },
      status:{
        type:Array,
         value: [
          "bezet",
          "vrij"
         ]
      }
    };

  }
  hello(evt){

      console.log(evt.path[2].rowIndex);
      let list = JSON.parse(localStorage.getItem("tafel_lijst"));
      list[evt.path[2].rowIndex-1].status = evt.path[0].value;
      console.log(list);
      localStorage.setItem("tafel_lijst",JSON.stringify(list));
  }

}

window.customElements.define('tafel-toekennen', GerechtContentApp);
