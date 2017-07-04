function addScore() {
	var contentText = document.querySelector('#count');
    if (contentText.innerHTML === "true") {
    	var level = Number(document.querySelector('#level'));
        contentText = document.querySelector('#content-text');
        var score = Number(contentText.innerHTML) + 1 * level;
        contentText.innerHTML = score;
        contentText.innerHTML = contentText.innerHTML;
        contentText = document.querySelector('#scoreSavior');
        contentText.innerHTML = score;
        if (score > level * level) {
        	level++;
        	contentText = document.querySelector('#level');
        	contentText.innerHTML = level;
        }
       // contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    }
};


window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
   // var mainPage = document.querySelector('#main');

    /*mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#count');
        if (contentText.innerHTML == "true") {
	        contentText = document.querySelector('#content-text');
	        var score = Number(contentText.innerHTML) + 1;
	        contentText.innerHTML = score;
	        contentText.innerHTML = contentText.innerHTML;
	        contentText = document.querySelector('#scoreSavior');
	        contentText.innerHTML = score;
	       // contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
        }
    });*/
};


/*function showScore() {
	 var contentText = contentText = document.querySelector('#scoreSavior');
     var score = Number(contentText.innerHTML);
     contentText = document.querySelector('#content-text');
     contentText.innerHTML = score;
     contentText = document.querySelector('#count');
     contentText.innerHTML = "true";
}

function showResolution() {
	var contentText = document.querySelector('#count');
	contentText.innerHTML = "false";
	contentText = document.querySelector('#content-text');
	contentText.innerHTML = window.screen.height + " x " + window.screen.width;
}*/

