
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
//Increase the ease of fetching ID's
function _(x){
	return document.getElementById(x);
}
//returning the date
function date12()
{
	var d=new Date();
	var month=["january", "Feburary","March", "April", "May", "June", "July", "August","September", "October", "November","December"];
	console.log(d);
	document.getElementById("date").innerHTML = d.getDate();
	_("date").innerHTML += "-";
	_("date").innerHTML += month[d.getMonth()];
		_("date").innerHTML += "-";
	_("date").innerHTML += d.getFullYear();
}
//Rendering Question in HTML 
function renderQuestion(pist){
	test = _("test");
	if(pist == 0)
		{
			pos=0;
			correct=0;
			wrong=0;
		}
	if(pos >= questions.length){
		var wrong=questions.length-correct;
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		test.innerHTML += "<h2>You got "+wrong+" questions wrong</h2>";
		correct = 0;
		return false;
	}
	//Render the radio button questions
	if(questions[pos].questionType == 1)
	{
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;	document.getElementById("topic").innerHTML=questions[pos].category;
	question = questions[pos].question;
	chA = questions[pos].choices[0];
	chB = questions[pos].choices[1];
	chC = questions[pos].choices[2];
	chD = questions[pos].choices[3];
	chE = questions[pos].choices[4];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A' id='ching1' >"+"&nbsp;"+chA+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' id='ching' value='B' >"+"&nbsp;"+chB+"<br><br> ";
	test.innerHTML += "<input type='radio' name='choices' value='C'>" +"&nbsp;"+chC+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'>"+"&nbsp;"+chD+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='E'> "+"&nbsp;"+chE+"<br><br>";
	test.innerHTML += "<br>";
	test.innerHTML += "<button class='btn blacken btn-lg' onclick='checkAnswer()' >Next Question</button>";
		}
	//Render the Text entry questions
	else{
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos].question;	document.getElementById("topic").innerHTML=questions[pos].category;
	test.innerHTML = "<h3>"+question+"</h3>"
	test.innerHTML += "<input type='text' name='text' id='text1' style='color:black;'/><br>";	
		test.innerHTML += "<br>";
	test.innerHTML += "<button class='btn blacken btn-lg' onclick='checkAnswer()'>Next Question</button>";
				
	}
}
//Checking the answers entered 
function checkAnswer(){
rp();
	//check for radio questions
if(questions[pos].questionType == 1)
{
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
		
			choice = choices[i].value;
			console.log(choice);
			console.log(pos);
		}
	}
if(choice == questions[pos].correctChoice){
			correct++;
			score_correct();
	}
	else{
		score_wrong();
	}
				pos++;
			renderQuestion();
			

}
	//check for text entry questions
else
{
	choices = document.getElementById("text1").value;
	choices=choices.trim();
	var ans =questions[pos].correctAnswer.toLowerCase(); // Converting both the answer and the input to lower case to compare
	console.log(ans);
	choice = choices.toLowerCase();	
	console.log(choice);
	if(choice.localeCompare(ans)== 0)
		{
			correct++;
			score_correct();
		}
	else
		{
		score_wrong();
		}
		pos++;
		renderQuestion();
	
}
}
//Score Accounted for Wrong answers
function score_wrong()
{
	var wrong12=_("test12").innerHTML;
	wrong12++;
	_("test12").innerHTML=wrong12;
}
//Score accounted for right answers
function score_correct()
{
	
	var correct12=_("test123").innerHTML;
	correct12++;
	_("test123").innerHTML=correct12;
}
//Stopping the quiz
function stop()
{
		document.getElementById("test_status").innerHTML = "Thank You for taking the quiz!";
	 document.getElementById("test").innerHTML = "";		
}
//Reset the score on starting the quiz over again
function reset_score()
{
	_("test12").innerHTML=0;
	_("test123").innerHTML=0;
}
//Starting a quiz over again
function start()
{
	location.reload();	
}

window.addEventListener("load",renderQuestion, false);

