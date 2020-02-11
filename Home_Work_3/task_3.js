//1
function getMaxDigit(number){
	let max_number = 0;
	let arrayOfNumber = number.toString().split('');
	for(let i = 0; i < arrayOfNumber.length; i++){
		if ( +arrayOfNumber[i] > max_number){
			max_number = +arrayOfNumber[i];
		}
	}
	return max_number;
}
//2
function powerOfNumber(number,pow){
	let i = 1;
	let new_number = number;
	while(i < pow){
		i++;
		new_number *=number;
	}
	return new_number;
}
//3
function nameFormatting(name){
	let str1 = name.toLowerCase();
	let new_name = name[0].toUpperCase() + str1.slice(1);
	return new_name;
}
//4
function calculationSalaryWithoutTax(salary){
	return salaryWithoutTax = (salary*80.5)/100;
}
//5
function getRandomNumber(min,max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;

}
//6
function countLetter(letter, str){
	let count = 0;
	for(let i = 1; i < str.length; i++){
		if(str[i] == letter){
			count+=1;
		}
	}
	return count;
}
//7
function convertCurrency(string){
	let uan = 'uan';
	let dolar ='$';

}
//8


 console.log(getMaxDigit(1080));
 console.log(powerOfNumber(2,5));
 console.log(nameFormatting('kaTeRyNa'));
 console.log(calculationSalaryWithoutTax(100));
 console.log(getRandomNumber(1,10));
 console.log(countLetter('o','Helo'));
