import {DHXView} from "dhx-optimus";


export class ViewStatesGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("ST_ID,ST SHORT,ST LONG");
    this.ui.setColumnIds("st_id,st_short,st_long");
    this.ui.setInitWidths("100,*,*");
    this.ui.setColTypes("ro,ro,ro");
    this.ui.init();
		this._load();
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,"AL","ALABAMA"]},
          { "id":2, "data":[2,"AK","ALASKA"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
