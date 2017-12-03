import {DHXView} from "dhx-optimus";
import {ViewOfficesGridView} from "views/offices/ViewOfficesGridView.js";
import {ViewUsersGridView} from "views/users/ViewUsersGridView.js";

export class ViewUsersPermsTopLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2U");
    this.ui.cells("a").setText("DR OFFICE");
    this.ui.cells("b").setText("DRS USERS");

    this.show(ViewOfficesGridView, this.ui.cells("a"));
    this.show(ViewUsersGridView, this.ui.cells("b"));

  }

}
