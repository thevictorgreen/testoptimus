import {DHXView} from "dhx-optimus";
import {ViewMyPharmaciesGridView} from "views/grids/ViewMyPharmaciesGridView.js";
import {ViewPharmacyFaxFormView} from "views/forms/ViewPharmacyFaxFormView.js";

export class ViewPharmaciesFaxLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2E");
    this.ui.cells("a").setText("MY PHARMACIES");
    this.ui.cells("b").setText("PHARMACY FAX NUMBER");

    this.show(ViewMyPharmaciesGridView, this.ui.cells("a"));
    this.show(ViewPharmacyFaxFormView, this.ui.cells("b"));

  }

}
