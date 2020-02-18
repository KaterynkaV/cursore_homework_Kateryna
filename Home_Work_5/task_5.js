//1
function getRandomArray(length, min, max){
	let array = [];
	min = Math.ceil(min);
	max = Math.floor(max);
	Math.floor(Math.random() * (max - min)) + min;
	for(let i = 0; i < length; i++){
		let random = Math.floor(Math.random() * (max - min) + min);
			array.push(random);
	}
	return array;
}

//2
/*function = getModa(...numbers){

}*/
//3
function getAverage(...numbers){
	let suma = 0;
	numbers.forEach(element => {if(Number.isInteger(element)){suma+=element}});
	return suma / numbers.length;

}
//5
function filterEvenNumbers(...numbers){
	let odd_number = [];
	numbers.forEach(element => {if((element % 2)==1) odd_number.push(element);})
	return odd_number;
}
//6
function countPositiveNumbers(...numbers){
	let count = 0;
	numbers.forEach(element=>{if(element >0) count++})
	return count;
}
//7
function getDividedByFive(...numbers){
	let array = numbers.filter(element => element % 5 == 0);
	return array;
}
//8
function replaceBadWords(string){
	let firstArray = string.split(' ');
	let arrayBadWords = ['shit', 'fuck'];
	for(let i = 0; i < firstArray.length; i++){
		for(let j = 0; j < arrayBadWords.length; j++){
			if (firstArray[i].indexOf(arrayBadWords[j]) != -1){
				firstArray[i] = firstArray[i].replace(arrayBadWords[j], '****');
			}
		}
	}
	return firstArray.join(' ');
}


console.log(getRandomArray(5, 5, 10));
console.log(getAverage(1,2,3,4,5));
console.log(Number.isInteger(5));
console.log(countPositiveNumbers(-5,-3,-1,0,1,2,3,3.5));
console.log(filterEvenNumbers(1,2,3,4,5,6));
console.log(getDividedByFive(1,5,7,10,10));
console.log(replaceBadWords("Are you fucking kidding?"));