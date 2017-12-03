import {DHXView} from "dhx-optimus";
import {ViewUserDetailsFormView} from "views/forms/ViewUserDetailsFormView.js";
;
export class ViewUsersBottomLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2U");
    this.ui.cells("a").setText("USER DETAILS");
    this.ui.cells("b").setText("UPLOAD USER FILE FOR IMPORT");

    this.show(ViewUserDetailsFormView, this.ui.cells("a"));

  }

}
