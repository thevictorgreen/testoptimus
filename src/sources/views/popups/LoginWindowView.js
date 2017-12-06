import {DHXView} from "dhx-optimus";
import {ViewOfficesLayoutView} from "../offices/ViewOfficesLayoutView.js";
import {MainView} from "../app/mainview.js";

export class LoginWindowView extends DHXView{

	render(){

    var lgX = screen.width / 2 - 250;
    var lgY = screen.height / 2 - 150;
		this.ui = this.root.layout.dhxWins.createWindow("lgWin", lgX, lgY, 300, 175);
    this.ui.center();
    this.ui.setText("User Authentication");
    this.ui.denyResize();
    this.ui.denyMove();
    this.ui.denyPark();
    this.ui.button("close").hide();
    this.ui.setModal(true);

    var formData = [
      {type: "fieldset", name: "myLgForm", label: "Login", list: [
        {type: "input", label: "Username", labelAlign: "right", position: "label-right", name:"uname"},
        {type: "password", label: "Password", labelAlign: "right", position: "label-right", name:"pass"},
        {type: "button", name: "submit",value: "Proceed"}
      ]}
    ];

    var lgForm = this.ui.attachForm(formData);
    var win = this.ui;

    lgForm.attachEvent("onButtonClick",function(id) {
			 if (id == "submit") {

				var uname = lgForm.getItemValue("uname");
        var upass = lgForm.getItemValue("pass");

        dhtmlxAjax.get("auth/authenticate.php?uname="+uname+"&upass="+upass,function(loader) {

					if (loader.xmlDoc.responseText == "authenticated") {
						dhtmlx.message("Success");
            win.hide();
            win.setModal(false);
            //layout.cells("b").attachObject("splash_canvas");
          }

          else {
						dhtmlx.message("Invalid Credentials");
            console.log(loader.xmlDoc.responseText);
          }
        });

      }
    });

	}

}
