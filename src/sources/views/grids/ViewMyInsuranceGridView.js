import {DHXView} from "dhx-optimus";


export class ViewMyInsuranceGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("INS_ID,NAME,STATE");
    this.ui.setColumnIds("ins_id,ins_name");
    this.ui.setInitWidths("100,*,*");
    this.ui.setColTypes("ro,ro,ro");
    this.ui.init();
		this._load();
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,"AFTRA","AL"]},
          { "id":2, "data":[2,"Aetna","AL"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
