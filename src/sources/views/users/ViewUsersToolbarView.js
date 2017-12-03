import {DHXView} from "dhx-optimus";

export class ViewUsersToolbarView extends DHXView{
	render(){
		this.ui = this.root.attachToolbar({

		});
		this.ui.attachEvent("onClick", (id) => this.callEvent("ViewUsersToolbarClick", [id]));
		this._load();
	}

	_load(){
		let struct = [
			{id:"addUserBtn",type:"button",text:"ADD USER"},
			{id:"removeUserBtn",type:"button",text:"REMOVE USER"},
      {id:"importUserBtn",type:"button",text:"IMPORT USERS"}
		];
		this.ui.loadStruct(struct);
	}
}
