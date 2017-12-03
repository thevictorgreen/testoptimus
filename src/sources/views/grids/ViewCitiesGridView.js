import {DHXView} from "dhx-optimus";


export class ViewCitiesGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("CT_ID,ST_ID,CT NAME");
    this.ui.setColumnIds("ct_id,st_id,ct_name");
    this.ui.setInitWidths("100,100,*");
    this.ui.setColTypes("ro,ro,ro");
    this.ui.init();
		this._load();
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,1,"abbeville"]},
          { "id":2, "data":[2,1,"abernant"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
