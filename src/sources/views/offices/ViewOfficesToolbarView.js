import {DHXView} from "dhx-optimus";

export class ViewOfficesToolbarView extends DHXView{
	render(){
		this.ui = this.root.attachToolbar({

		});
		this.ui.attachEvent("onClick", (id) => this.callEvent("ViewOfficesToolbarClick", [id]))
		this._load();
	}

	_load(){
		let struct = [
			{id:"newOfcBtn",type:"button",text:"NEW OFFICE"},
			{id:"dropOfcBtn",type:"button",text:"DROP OFFICE"}
		];
		this.ui.loadStruct(struct);
	}
}
