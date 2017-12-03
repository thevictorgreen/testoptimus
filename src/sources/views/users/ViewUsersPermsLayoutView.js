import {DHXView} from "dhx-optimus";
import {ViewUsersPermsTopLayoutView} from "views/users/ViewUsersPermsTopLayoutView.js";
import {ViewUserPermissionsFormView} from "views/forms/ViewUserPermissionsFormView.js";

export class ViewUsersPermsLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2E");
    this.ui.cells("a").hideHeader();
    this.ui.cells("b").setText("USER DETAILS");

    this.show(ViewUsersPermsTopLayoutView,this.ui.cells("a"));
    this.show(ViewUserPermissionsFormView, this.ui.cells("b"));

  }

}
