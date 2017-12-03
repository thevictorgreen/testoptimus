import {DHXView} from "dhx-optimus";


export class ViewPharmacyFaxFormView extends DHXView{

	render(){
		this.ui = this.root.attachForm({});
		this._load();
	}

	_load() {
		let struct =
    [
      {type: "fieldset", name: "custFormD", label: "EDIT PHARMACY FAX NUMBER", list: [
        {type: "hidden", name: "id"},
        {type: "input", inputWidth: "200", label: "Fax Number", labelAlign: "right", position: "label-right", name:"fax"},
        {type: "button", name:"submit", value:"UPDATE"}
      ]}
    ];
		this.ui.loadStruct(struct);
	}

}
