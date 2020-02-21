const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function nameFormatting(name){
  let str1 = name.toLowerCase();
  let new_name = name[0].toUpperCase() + str1.slice(1);
  let index = new_name.indexOf('_');
  let arr = new_name.split('');
  arr[index] = ' ';
  return arr.join('');
}
//1
function getSubjects(obj){
  let subjects = [];
  for(let key in obj.subjects){
    let nameSubject = nameFormatting(key);
    subjects.push(nameSubject);
  }
  return subjects;
}
//2
function getAverageMark(obj){
  let sumaMark = 0; 
  let count = 0;
  for(key in obj.subjects){
    let length = obj.subjects[key].length;
    for(let i = 0; i < length; i++){
      count +=1;
      sumaMark += obj.subjects[key][i];
    }
  }
  return (sumaMark/count).toFixed(2);
}
//3
function getStudentInfo(obj){
  let studentInfo = {};
  studentInfo.name = obj.name;
  studentInfo.course = obj.course;
  studentInfo.averageMark = getAverageMark(obj);
return studentInfo;
}
//4
function getStudentsNames(arrayOfStudents){
  let arrayOfName = [];
  arrayOfStudents.forEach(element =>{arrayOfName.push(element.name)});
  return arrayOfName.sort();
}
//5
function getBestStudent(arrayOfStudents){
  let bestResult = 0;
  let bestStudent;
  arrayOfStudents.forEach(element=>{
    if (bestResult < getAverageMark(element)){
      bestResult = getAverageMark(element);
      bestStudent = element.name;
    }
  })
  return bestStudent;
}
//6
function calculateWordLetters(str){
  let wordLetters = {};
  for(let i = 0; i < str.length; i++){
    if(str[i] in wordLetters){
      wordLetters[str[i]] += 1;
    }else{
      wordLetters[str[i]] = 1;
    }
  }
  return wordLetters;
}

console.log(nameFormatting('data_science'));
console.log(getSubjects(students[1]));
console.log(getAverageMark(students[2]));
console.log(getStudentInfo(students[2]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('String test'));