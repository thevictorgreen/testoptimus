import {DHXView} from "dhx-optimus";
import {ViewPharmaciesTopLayoutView} from "views/pharmacies/ViewPharmaciesTopLayoutView.js";
import {ViewPharmaciesBottomLayoutView} from "views/pharmacies/ViewPharmaciesBottomLayoutView.js"

export class ViewPharmaciesLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2E");
    this.ui.cells("a").hideHeader();
    this.ui.cells("b").hideHeader();

    this.show(ViewPharmaciesTopLayoutView,this.ui.cells("a"));
    this.show(ViewPharmaciesBottomLayoutView,this.ui.cells("b"));

  }

}
