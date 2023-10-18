// const jack = {};
// jack.name = 'jack';
// jack.age = 10;
// jack.study = function () {
//   console.log('study');
// };

// const rose = {};
// rose.name = 'rose';
// rose.age = 10;
// rose.study = function () {
//   console.log('study');
// };






funciont Student(name){
    const obj = {}
    obj.name=name
    obj.age=10
    obj.study = ()=>{
        console.log('study');
    }
    return obj
}



const jack = Student('jack')
const rose = Student('rose')

