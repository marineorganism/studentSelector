function reqListener()
{
	document.body.innerHTML = this.responseText
};


function loadPage(pageName)
{
	//clear old junk
	document.body.innerHTML = "";

	//get new data via a xmlhttprequest
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load",reqListener);
	oReq.open("GET", "pages/"+pageName,true);
	oReq.send();
};
