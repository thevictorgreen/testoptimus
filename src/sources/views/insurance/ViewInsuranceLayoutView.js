import {DHXView} from "dhx-optimus";
import {ViewInsuranceTopLayoutView} from "views/insurance/ViewInsuranceTopLayoutView.js";
import {ViewMyInsuranceGridView} from "views/grids/ViewMyInsuranceGridView.js";

export class ViewInsuranceLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2E");
    this.ui.cells("a").hideHeader();
    this.ui.cells("b").setText("MY INSURANCE SUBSCRIPTIONS");

    this.show(ViewInsuranceTopLayoutView,this.ui.cells("a"));
    this.show(ViewMyInsuranceGridView, this.ui.cells("b"));

  }

}
