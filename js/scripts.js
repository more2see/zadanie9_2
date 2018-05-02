var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';

function check(allNames) {
	if (allNames.indexOf(newName) === -1) return allNamesWithNewNames;
}
var allNamesWithNewName = (allNames.push('Marian'));
console.log(allNamesWithNewName);