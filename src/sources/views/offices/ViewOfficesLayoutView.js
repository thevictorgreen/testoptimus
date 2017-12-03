import {DHXView} from "dhx-optimus";
import {ViewOfficesToolbarView} from "views/offices/ViewOfficesToolbarView.js";
import {ViewOfficesGridView} from "views/offices/ViewOfficesGridView.js";
import {ViewOfficesFormView} from "views/offices/ViewOfficesFormView.js";

export class ViewOfficesLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2E");
    this.ui.cells("a").setText("DRS OFFICES");
    this.ui.cells("b").setText("DR OFFICE DETAILS");


    this.show(ViewOfficesToolbarView, this.ui);
    this.show(ViewOfficesGridView, this.ui.cells("a"));
    this.show(ViewOfficesFormView, this.ui.cells("b"));


    //Toolbar Event Handler
    this.attachEvent("ViewOfficesToolbarClick", (id) => {

      if (id === "newOfcBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

      else if (id === "dropOfcBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

    });

  }

}
