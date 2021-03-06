import {DHXView} from "dhx-optimus";
//import {ViewOfficesGridView} from "views/offices/ViewOfficesGridView.js";

export class ViewOfficesFormView extends DHXView{

	render(){
		this.ui = this.root.attachForm({});
		this._load();

		var mygrid = this.app.getService("OfficesGrid").getGrid();
		this.ui.bind(mygrid);

		var form = this.ui;

		this.ui.attachEvent("onButtonClick",function(id){
			if (id == "submit") {
				form.save();
				console.log(form);
			}
		});

	}

	_load() {
		let struct =
    [
      {type: "fieldset", name: "custFormD", label: "EDIT DR OFFICE", list: [
        {type: "hidden", name: "id"},
        {type: "input", inputWidth: "200", label: "Office Name", labelAlign: "right", position: "label-right", name:"name"},
        {type: "input", inputWidth: "200", label: "Address", labelAlign: "right", position: "label-right", name:"addr"},
        {type: "input", inputWidth: "200", label: "City", labelAlign: "right", position: "label-right", name:"city"},
        {type: "input", inputWidth: "200", label: "State", labelAlign: "right", position: "label-right", name:"state"},
        {type: "input", inputWidth: "200", label: "Zip", labelAlign: "right", position: "label-right", name:"zip"},
        {type: "input", inputWidth: "200", label: "Phone", labelAlign: "right", position: "label-right", name:"phone"},
        {type: "button", name:"submit", value:"EDIT DR OFFICE"}
      ]}
    ];
		this.ui.loadStruct(struct);
	}

}
