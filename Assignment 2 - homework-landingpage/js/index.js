$(document).ready(function){

	$("#show-this-on-click").click(readMoreBtn);
	
	function readMoreBtn(){
		alert();
		$(".hide").slideDown();
		$(".readless hide").slideUp();
	}


}