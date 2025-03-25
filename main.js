function Score() {
	let grade=document.getElementById('InputGrade').value;

	if (grade >=0&&grade<=74) {
		window.alert('You have FAILED');
	}
	else if (grade>=75&&grade<=79){
		window.alert('You are Below Average');
	}
	else if (grade>=80&&grade<=84){
		window.alert('You are Average');
	}
	else {
		window.alert('You are Excellent!');
	}

}