import {DHXView} from "dhx-optimus";

export class ViewInsuranceToolbarView extends DHXView{
	render(){
		this.ui = this.root.attachToolbar({

		});
		this.ui.attachEvent("onClick", (id) => this.callEvent("ViewInsuranceToolbarClick", [id]));
		this._load();
	}

	_load(){
		let struct = [
			{id:"addInsBtn",type:"button",text:"ADD INSURANCE"},
			{id:"removeInsBtn",type:"button",text:"REMOVE INSURANCE"}
		];
		this.ui.loadStruct(struct);
	}
}
