let float = prompt('write your marks here:- ');

switch (true) {
    case (float <=30):
        console.log( 'Your marks are' +float+ 'and your grade is F');
        break;
    case (float <= 40):
        console.log( 'Your marks are' +float+ 'and your grade is E');
        break;
    case (float <= 50):
        console.log( 'Your marks are' +float+ 'and your grade is D');
        break;
    case (float <= 60):
        console.log( 'Your marks are' +float+ 'and your grade is C');
        break;
    case (float <= 70):
        console.log( 'Your marks are' +float+ 'and your grade is B');
        break;
    case (float <= 85):
        console.log( 'Your marks are' +float+ 'and your grade is A');
        break;
    default:
        console.log( 'Your marks are' +float+ 'and your grade is A+');
}