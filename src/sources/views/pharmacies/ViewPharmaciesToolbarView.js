import {DHXView} from "dhx-optimus";

export class ViewPharmaciesToolbarView extends DHXView{
	render(){
		this.ui = this.root.attachToolbar({

		});
		this.ui.attachEvent("onClick", (id) => this.callEvent("ViewPharmaciesToolbarClick", [id]));
		this._load();
	}

	_load(){
		let struct = [
			{id:"addPharmBtn",type:"button",text:"ADD PHARMACY"},
			{id:"removePharmBtn",type:"button",text:"REMOVE PHARMACY"}
		];
		this.ui.loadStruct(struct);
	}
}
