// This function accepts two parameter and inputs a grade when a score is inputed
function grader(score, idofgrade){
	if (score >= 0 && score < 40){
	document.getElementById(idofgrade).value='F'
}else if (score >= 40 && score < 45){
	document.getElementById(idofgrade).value='E'
}else if (score >= 45 && score < 50){
	document.getElementById(idofgrade).value='D'
}else if (score >= 50 && score < 60){
	document.getElementById(idofgrade).value='C'
}else if (score >= 60 && score < 69){
	document.getElementById(idofgrade).value='B'
}else if (score >= 70 && score <= 100){
	document.getElementById(idofgrade).value='A'
}else{
	alert('please enter a valid score')
}
}

// this function handles grade calculation
function totalGrade(){
	// 
	var calcScore=document.getElementsByClassName("score");
	var totalScores=0;
	
	for(var i=0; i<calcScore.length; i++){
		var totalOfScores=Number(calcScore[i].value);
		totalScores=totalScores + totalOfScores;

		if( totalOfScores== ""){
			document.getElementById('errormessage').innerHTML='*Please input all subject scores';
			return;
		}
	}
// if any of the input field is empty 
	document.getElementById('errormessage').innerHTML='';

	document.getElementById('totalscore').innerHTML=totalScores;

	var averagescore=totalScores / 7;

	document.getElementById('averagescore').innerHTML=averagescore;

	if(averagescore > 50){
		document.getElementById('remarks').innerHTML='Cheers! You passed!';
		document.getElementById('remarksimage').src='images/passed.png';
	}
	else{
		document.getElementById('remarks').innerHTML="You failed";
		document.getElementById('remarksimage').src='images/failed.png';
	}

}