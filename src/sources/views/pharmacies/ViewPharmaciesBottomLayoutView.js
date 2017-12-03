import {DHXView} from "dhx-optimus";
import {ViewPharmaciesGridView} from "views/grids/ViewPharmaciesGridView.js";
import {ViewMyPharmaciesGridView} from "views/grids/ViewMyPharmaciesGridView.js";

export class ViewPharmaciesBottomLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2U");
    this.ui.cells("a").setText("AVAILABLE PHARMACIES");
    this.ui.cells("b").setText("MY PHARMACIES");

    this.show(ViewPharmaciesGridView, this.ui.cells("a"));
    this.show(ViewMyPharmaciesGridView, this.ui.cells("b"));

  }

}
