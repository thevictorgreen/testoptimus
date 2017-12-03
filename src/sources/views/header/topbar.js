import {DHXView} from "dhx-optimus";

export class TopbarView extends DHXView{
	render(){
		this.ui = this.root.attachToolbar({

		});
		//this.ui.setIconSize(32);
		this.ui.attachEvent("onClick", (id) => this.callEvent("ToolbarClick", [id]))
		this._load();
	}

	_load(){
		let struct = [
			{id:"acctBtn",type:"button",text:"My Account"},
			{id:"logsBtn",type:"button",text:"Logs"},
			{id:"signoutBtn",type:"button",text:"Sign Out"}
		];
		this.ui.loadStruct(struct);
	}
}
