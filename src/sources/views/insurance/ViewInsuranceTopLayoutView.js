import {DHXView} from "dhx-optimus";
import {ViewInsuranceToolbarView} from "views/insurance/ViewInsuranceToolbarView.js";
import {ViewStatesGridView} from "views/grids/ViewStatesGridView.js";
import {ViewInsuranceGridView} from "views/grids/ViewInsuranceGridView.js";

export class ViewInsuranceTopLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2U");
    this.ui.cells("a").setText("STATES");
    this.ui.cells("b").setText("INSURANCE SUBSCRIPTIONS");

    this.show(ViewInsuranceToolbarView, this.ui.cells("a"));
    this.show(ViewStatesGridView, this.ui.cells("a"));
    this.show(ViewInsuranceGridView, this.ui.cells("b"));


    //Toolbar Event Handler
    this.attachEvent("ViewInsuranceToolbarClick", (id) => {

      if (id === "addInsBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

      else if (id === "removeInsBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

    });

  }

}
