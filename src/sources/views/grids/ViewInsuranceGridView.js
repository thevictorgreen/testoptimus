import {DHXView} from "dhx-optimus";


export class ViewInsuranceGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("INS_ID,INS NAME");
    this.ui.setColumnIds("ins_id,ins_name");
    this.ui.setInitWidths("100,*");
    this.ui.setColTypes("ro,ro");
    this.ui.init();
		this._load();
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,"AFTRA"]},
          { "id":2, "data":[2,"Aetna"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
