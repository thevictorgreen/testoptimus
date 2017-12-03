import {DHXView} from "dhx-optimus";


export class ViewUserPermissionsFormView extends DHXView{

	render(){
		this.ui = this.root.attachForm({});
		this._load();
	}

	_load() {
		let struct =
    [
      {type: "fieldset", name: "custFormD", label: "EDIT USER PERMISSIONS", list: [
        {type: "hidden", name: "u_id"},
        {type: "input", inputWidth: "200", label: "SUBMIT SCRIPT", labelAlign: "right", position: "label-right", name:"submitScript"},
        {type: "input", inputWidth: "200", label: "SUBMIT SCRIPT DIRECT", labelAlign: "right", position: "label-right", name:"submitScriptDirect"},
        {type: "input", inputWidth: "200", label: "SUBMIT SCRIPT QUE ONLY", labelAlign: "right", position: "label-right", name:"submitScriptQueOnly"},
        {type: "input", inputWidth: "200", label: "VIEW SCRIPT", labelAlign: "right", position: "label-right", name:"viewScript"},
        {type: "input", inputWidth: "200", label: "VIEW SCRIPT QUE", labelAlign: "right", position: "label-right", name:"viewScriptQue"},
        {type: "input", inputWidth: "200", label: "VIEW REFILLS", labelAlign: "right", position: "label-right", name:"viewRefills"},
        {type: "input", inputWidth: "200", label: "VIEW ADHERENCE", labelAlign: "right", position: "label-right", name:"viewAdherence"},
        {type: "input", inputWidth: "200", label: "VIEW PATIENTS", labelAlign: "right", position: "label-right", name:"viewPatients"},
        {type: "input", inputWidth: "200", label: "VIEW CHARTS", labelAlign: "right", position: "label-right", name:"viewCharts"},
        {type: "input", inputWidth: "200", label: "VIEW FORMULARY", labelAlign: "right", position: "label-right", name:"viewFormulary"},
        {type: "input", inputWidth: "200", label: "VIEW REPORTS", labelAlign: "right", position: "label-right", name:"viewReports"},
        {type: "button", name:"submit", value:"EDIT USER PERMISSIONS"}
       ]}
    ];
		this.ui.loadStruct(struct);
	}

}
