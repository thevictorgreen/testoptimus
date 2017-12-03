import {DHXView} from "dhx-optimus";
import {ViewUsersTopLayoutView} from "views/users/ViewUsersTopLayoutView.js";
import {ViewUsersBottomLayoutView} from "views/users/ViewUsersBottomLayoutView.js";

export class ViewUsersLayoutView extends DHXView {

  render() {

    this.ui = this.root.attachLayout("2E");
    this.ui.cells("a").hideHeader();
    this.ui.cells("b").hideHeader();

    this.show(ViewUsersTopLayoutView,this.ui.cells("a"));
    this.show(ViewUsersBottomLayoutView,this.ui.cells("b"));

  }

}
