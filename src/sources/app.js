import "less/app.less";

import {DHXApp} from "dhx-optimus";
import {MainView} from "views/app/mainview.js";


class MyApp extends DHXApp{
	constructor(config){
		super(config);
		this.attachEvent("ToolbarClick", (id) => dhtmlx.alert(id + " button was clicked"));
	}
	render(){
		this.show(MainView);
	}
}

window.MyApp = MyApp;
