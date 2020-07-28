let capitalLetter=['A', 'B', 'C','D',  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let smallLetter=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let caseChanger=(input)=>{
	if (capitalLetter.includes(input)){
		let indexOfInput= capitalLetter.indexOf(input);
		let output= smallLetter[indexOfInput];
		return output;
		

	}else if(smallLetter.includes(input)){
		let indexOfInput=smallLetter.indexOf(input);
		let output=capitalLetter[indexOfInput];
		return output;
	}else{
		console.log("Only single letter allowed!!");
	}
};
//write a function which converts case of words.
function wordCaseChanger(word){
	let output='';
	let changedLetter='';
	for(let i=0; i<word.length; i++){
		changedLetter=caseChanger(word[i]);
		output=output+changedLetter;
	}
	console.log(output);
}
wordCaseChanger('kaparphori');







