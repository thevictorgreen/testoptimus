import {DHXView} from "dhx-optimus";


export class ViewMyPharmaciesGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("PH_ID,CNAME,ADDR,PHONE,LAT,LON");
    this.ui.setColumnIds("ph_id,cname,addr,phone,lat,lon");
    this.ui.setInitWidths("100,*,*,*,*,*");
    this.ui.setColTypes("ro,ro,ro,ro,ro,ro");
    this.ui.init();
		this._load();
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,"Rite Aid","514 Kirland St","13345852282","31.562","-85.252"]},
          { "id":2, "data":[2,"Mikes Pharmacy","201 Kirland St","13345852234","31.562","-85.252"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
