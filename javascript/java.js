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


function totalGrade(){
	var calcScore=document.getElementsByClassName("score");
	var totalScores=0;
	for(var i=0; i<calcScore.length; i++){
		var totalOfScores=Number(calcScore[i].value);
		totalScores=totalScores + totalOfScores;
	}
	alert(totalScores);
}