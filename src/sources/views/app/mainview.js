import {DHXView} from "dhx-optimus";

import {TopbarView} 	from "../header/topbar.js";
import {SidebarView} 	from "../sidenav/sidebar.js";

import {ViewOfficesLayoutView} from "../offices/ViewOfficesLayoutView.js";
import {ViewUsersLayoutView} from "../users/ViewUsersLayoutView.js";
import {ViewUsersPermsLayoutView} from "../users/ViewUsersPermsLayoutView.js";
import {ViewInsuranceLayoutView} from "../insurance/ViewInsuranceLayoutView.js";
import {ViewPharmaciesLayoutView} from "../pharmacies/ViewPharmaciesLayoutView.js";
import {ViewPharmaciesFaxLayoutView} from "../pharmacies/ViewPharmaciesFaxLayoutView.js";
import {LoginWindowView} from "../popups/LoginWindowView.js";



export class MainView extends DHXView{
	render(){

		this.ui = this.root.attachLayout("2U");

		this.show(TopbarView, this.ui);
		this.show(SidebarView, this.ui.cells("a"));

		this.ui.cells("a").setWidth(200);
		this.ui.forEachItem( cell =>{
			cell.hideHeader();
			cell.fixSize(true);
		});

		this.addSlot("content", this.ui.cells("b"));

		//Show initial content view
		//this.show(ViewOfficesLayoutView, "content");
		this.show(LoginWindowView, "content");

    //Change Views when sidebar is clicked
		this.attachEvent("SideBar", (id) => {

			if (id === "officeMainBtn") {
				this.show(ViewOfficesLayoutView, "content");
			}

			else if (id === "userMainBtn") {
				this.show(ViewUsersLayoutView, "content");
			}

			else if (id === "userPermBtn") {
				this.show(ViewUsersPermsLayoutView, "content");
			}

			else if (id === "insuranceMainBtn") {
				this.show(ViewInsuranceLayoutView, "content");
			}

			else if (id === "pharmacyMainBtn") {
				this.show(ViewPharmaciesLayoutView, "content");
			}

			else if (id === "pharmacyFaxBtn") {
				this.show(ViewPharmaciesFaxLayoutView, "content");
			}

		});

	}
}
