import {DHXView} from "dhx-optimus";

export class SidebarView extends DHXView{
	render(){
		this.ui = this.root.attachSidebar({
			template: "text"
		});
		this.ui.attachEvent("onSelect", (id) => this.callEvent("SideBar", [id]) );
		this._load();
	}

	_load(){
		const struct = {
			items:[
				{
					id:"officeMainBtn",
					text: "DR OFFICES",
					selected: true
				},
				{
					type:"separator"
				},
				{
					id:"userMainBtn",
					text: "USERS"
				},
				{
					id:"userPermBtn",
					text: "USER PERMISSIONS"
				},
				{
					type:"separator"
				},
				{
					id:"insuranceMainBtn",
					text: "INSURANCE SUBSCRIPTIONS"
				},
				{
					type:"separator"
				},
				{
					id:"pharmacyMainBtn",
					text: "PHARMACY SUBSCRIPTIONS"
				},
				{
					id:"pharmacyFaxBtn",
					text: "PHARMACY FAX NUMBERS"
				}
			]
		};

		this.ui.loadStruct(struct);
	}

}
