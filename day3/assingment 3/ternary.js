//Ternary Operators
 


let float = prompt ('what is your marks:- ');
    console.log(float <= 30 ? 'you are fale' :'you are pass');

let result = 
            (float <=30) ? 'Your marks are' +float+ 'and your grade is F': 
             (float <= 40) ? 'Your marks are' +float+ 'and your grade is E':
             (float <= 50) ? 'Your marks are' +float+ 'and your grade is D':
             (float <= 60) ? 'Your marks are' +float+ 'and your grade is C':
             (float <= 70) ? 'Your marks are' +float+ 'and your grade is B':
             (float <= 85 > float) ? 'Your marks are' +float+ 'and your grade is A': 'Your marks are' +float+ 'and your grade is A+';
             

console.log(result);
