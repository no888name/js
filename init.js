let uid = 18;
let url = "tevent/circus/healthcheck?";
let postUrl = "tevent/circus/progress";


function checkEvents() {
  sendCon(3);
}
setInterval(checkEvents, 3000);


async function sendCon(number) {
  try {
    let data = JSON.stringify(number);
    const response = await fetch( url + number, {
      method: "GET"
    });
    console.log('response',response);
    if (response.status === 200) {
      console.log("ok");
      addEventDiv("Cirkus");
    } else {
      console.log("error");
      document.getElementById("Cirkus").remove();
    }
  } catch (error) {
    console.log(error);
    document.getElementById("Cirkus").remove();
  }
}

window.addEventDiv = function (divId) {
	var ele = document.getElementById(divId);
	if(ele !== null){
    	console.log("already exist");
    } else {
    	//create div
        var div = document.createElement("div");
        div.id = divId;
		div.style.width = "80px";
		div.style.height = "80px";
		div.style.background = "#475a78";
		div.style.color = "white";
		div.innerHTML = divId;
        //div.style.-moz-border-radius: 50px;
    	//div.style.-webkit-border-radius: 50px;
    	div.style.borderRadius = "50%";
		div.style.display = "table-cell"
        div.style.textAlign = "center";
        div.style.verticalAlign = "middle";
        div.style.position = "absolute";
        div.style.bottom = "25%";
        div.style.right = "20px";
		document.body.appendChild(div);


    }
}
