import {DHXView} from "dhx-optimus";
import {ViewUsersToolbarView} from "views/users/ViewUsersToolbarView.js";
import {ViewOfficesGridView} from "views/offices/ViewOfficesGridView.js";
import {ViewUsersGridView} from "views/users/ViewUsersGridView.js";

export class ViewUsersTopLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2U");
    this.ui.cells("a").setText("DR OFFICE");
    this.ui.cells("b").setText("DRS USERS");

    this.show(ViewUsersToolbarView, this.ui.cells("a"));
    this.show(ViewOfficesGridView, this.ui.cells("a"));
    this.show(ViewUsersGridView, this.ui.cells("b"));


    //Toolbar Event Handler
    this.attachEvent("ViewUsersToolbarClick", (id) => {

      if (id === "addUserBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

      else if (id === "removeUserBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

      else if (id === "importUserBtn") {
        dhtmlx.alert(id + " button was clicked");
      }

    });

  }

}
