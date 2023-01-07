// Selecting all of the css classes on which
// we want to apply functionalities
const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
  
// Setting up the period of working
setInterval(() => {
  
    // Extracting the current time 
    // from DATE() function
    let day = new Date()
    let hour = day.getHours()
    let minutes = day.getMinutes()
    let seconds = day.getSeconds()
  
    // Formula that is explained above for 
    // the rotation of different hands
    let hrrotation = (30 * hour) + (0.5 * minutes);
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;
  
    hr.style.transform =
        `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =
        `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform =
        `translate(-50%,-85%) rotate(${secrotation}deg)`
		
	console.log(hour + ":" + minutes + ":" + seconds);
	var dc = document.getElementById("digital").innerHTML = hour + ":" + minutes + ":" + seconds;
	if(minutes == 59 && seconds == 42){
		playHour();
	}
	if(minutes == 0 & seconds == 0){
		playStrike(hour);
	}
	if(minutes == 15 && seconds == 0){
		playQuartOne();
	}
	if(minutes == 45 && seconds == 0){
		playQuartTwo();
	}
	if(minutes == 30 && seconds == 0){
		playHalf();
	}
});

function toggleCheckboxOne(){
	var firstButton = document.getElementById("enablePart1");
	var secButton = document.getElementById("enablePart2");
	var thirdButton = document.getElementById("enablePart3");
	if (firstButton.checked == true){
		secButton.disabled = false;
	}
	if (firstButton.checked == false){
		secButton.disabled = true;
		secButton.checked = false;
		thirdButton.disabled = true;
		thirdButton.checked = false;
	}
}

function toggleCheckboxTwo(){
	var secButton = document.getElementById("enablePart2");
	var thirdButton = document.getElementById("enablePart3");
	if (secButton.checked == true){
		thirdButton.disabled = false;
	}
	if (secButton.checked == false){
		thirdButton.disabled = true;
		thirdButton.checked = false;
	}
}

function playHour(){
	var firstButton = document.getElementById("enablePart1");
	if (firstButton.checked == true){
		var hourAudio = document.getElementById("hourlyAudio").play();
	}
}

function playQuartOne(){
	var thirdButton = document.getElementById("enablePart3");
	if (thirdButton.checked == true){
		var fifAudio = document.getElementById("m15Audio").play();
	}
}

function playQuartTwo(){
	var thirdButton = document.getElementById("enablePart3");
	if (thirdButton.checked == true){
		var fouAudio = document.getElementById("m45Audio").play();
	}
}

function playHalf(){
	var secButton = document.getElementById("enablePart2");
	if (secButton.checked == true){
		var halfAudio = document.getElementById("m30Audio").play();
	}
}

function playStrike(hour){
	var firstButton = document.getElementById("enablePart1");
	if (firstButton.checked == true){
		if(hour == 1 || hour == 13){
			var oneStr = document.getElementById("strOne").play();
		}
		if(hour == 0 || hour == 12){
			var twelveStr = document.getElementById("strTwelve").play();
		}
	}
}
