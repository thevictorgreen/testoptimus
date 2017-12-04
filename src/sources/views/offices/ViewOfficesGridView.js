import {DHXView} from "dhx-optimus";


export class ViewOfficesGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("ID,NAME,ADDR,CITY,STATE,ZIP,PHONE");
    this.ui.setColumnIds("id,name,addr,city,state,zip,phone");
    this.ui.setInitWidths("*,*,*,*,*,*,*");
    this.ui.setColTypes("ro,ro,ro,ro,ro,ro,ro");

    this.ui.init();
		//this._load();
		this.ui.loadXML("xml/view_dr_office.php");
		var dp = new dataProcessor("xml/view_dr_office.php");
		dp.setTransactionMode("REST");
		dp.init(this.ui);
		
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,"DR TAYLOR GP","1642 6TH ST NW","Washington","DC","20001","202-560-9534"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
