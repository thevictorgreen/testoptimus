import {DHXView} from "dhx-optimus";
import {ViewPharmaciesToolbarView} from "views/pharmacies/ViewPharmaciesToolbarView.js";
import {ViewStatesGridView} from "views/grids/ViewStatesGridView.js";
import {ViewCitiesGridView} from "views/grids/ViewCitiesGridView.js";

export class ViewPharmaciesTopLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2U");
    this.ui.cells("a").setText("STATES");
    this.ui.cells("b").setText("CITIES");

    this.show(ViewPharmaciesToolbarView, this.ui.cells("a"));
    this.show(ViewStatesGridView, this.ui.cells("a"));
    this.show(ViewCitiesGridView, this.ui.cells("b"));


    //Toolbar Event Handler
    this.attachEvent("ViewPharmaciesToolbarClick", (id) => {

      if (id === "addPharmBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

      else if (id === "removePharmBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

    });

  }

}
