import {DHXView} from "dhx-optimus";


export class ViewUserDetailsFormView extends DHXView{

	render(){
		this.ui = this.root.attachForm({});
		this._load();
	}

	_load() {
		let struct =
    [
      {type: "fieldset", name: "custFormD", label: "EDIT USER DATA", list: [
        {type: "hidden", name: "id"},
        {type: "input", inputWidth: "200", label: "LAST NAME", labelAlign: "right", position: "label-right", name:"last_name"},
        {type: "input", inputWidth: "200", label: "FIRST NAME", labelAlign: "right", position: "label-right", name:"first_name"},
        {type: "input", inputWidth: "200", label: "LOGIN", labelAlign: "right", position: "label-right", name:"login"},

        {type: "input", inputWidth: "200", label: "PASSD", labelAlign: "right", position: "label-right", name:"passd"},
        {type: "input", inputWidth: "200", label: "IS_DR", labelAlign: "right", position: "label-right", name:"is_dr"},
        {type: "input", inputWidth: "200", label: "DEA", labelAlign: "right", position: "label-right", name:"dea"},
        {type: "input", inputWidth: "200", label: "SEND_SCRIPT", labelAlign: "right", position: "label-right", name:"send_script"},
        {type: "input", inputWidth: "200", label: "APRR_REQ", labelAlign: "right", position: "label-right", name:"appr_req"},
        {type: "input", inputWidth: "200", label: "EMAIL", labelAlign: "right", position: "label-right", name:"email"},
        {type: "input", inputWidth: "200", label: "LIC_NUM", labelAlign: "right", position: "label-right", name:"lic_num"},

        {type: "button", name:"submit", value:"EDIT USER"}
      ]}
    ];
		this.ui.loadStruct(struct);
	}

}
