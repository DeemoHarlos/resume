window.onload = function() {
	//document.getElementById("load").style.opacity = "0";
	setTimeout(function(){
		//document.getElementById("load").style.display = "none";
		setTimeout(function(){
			document.styleSheets[0].addRule(
				'#skill tr:nth-child(2)>td:last-child:before'
				,'width: 80%!important');
			document.styleSheets[0].addRule(
				'#skill tr:nth-child(3)>td:last-child:before'
				,'width: 60%!important');
			document.styleSheets[0].addRule(
				'#skill tr:nth-child(4)>td:last-child:before'
				,'width: 60%!important');
		},200);
	}, 400);
}