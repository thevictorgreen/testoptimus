import {DHXView} from "dhx-optimus";


export class ViewUsersGridView extends DHXView{

	render(){
		this.ui = this.root.attachGrid({});

    this.ui.setHeader("U_ID,LAST NAME,FIRST NAME,LOGIN,PASSD,IS_DR,DEA,SEND_SCRIPT,APPR_REQ,EMAIL,LIC_NUM");
    this.ui.setColumnIds("id,last_name,first_name,login,passd,is_dr,dea,send_script,appr_req,email,lic_num");
    this.ui.setInitWidths("100,*,*,*,*,*,*,*,*,*,*");
    this.ui.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
    this.ui.init();
		this._load();
	}

	_load() {
		let struct =
		  {
				"rows":[
			    { "id":1, "data":[1,"Taylor","Roger","rtaylor","newuser","true","AT5623740","true","false","rtaylor@logiscripts.com","AC123456"]},
          { "id":2, "data":[2,"Taylor","Denise","dtaylor","newuser","false","blank","false","false","dtaylor@logiscripts.com","blank"]}
			  ]
			};
		this.ui.parse(struct,"json");
	}

}
