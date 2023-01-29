// بناء على ماتعلمنا سابقا من TypeScript سوف نقوم : أولا : قم بكتابة واجهة اسمها بيانات Student تتكون من :
interface Student{
    id: number
    name: String
    level: string
    isSenior: boolean
}
let st1: Student = {
    id: 1,
    name: "Abduallah",
    level: "MAX",
    isSenior: true,
}
let st2: Student = {
    id: 1,
    name: "Abduallah",
    level: "MAX",
    isSenior: true,
}
let st3: Student = {
    id: 1,
    name: "Abduallah",
    level: "MAX",
    isSenior: true,
}

// ثانيا :انشئ مصفوفة نعطيها اسم school , ندخل بيانات ثلاث طلاب
let school: Object[] = [st1,st2,st3]

// ثالثا : انشئ function تقوم بطباعة بيانات الطلاب
function printer(){
    console.log(school);
}
printer()
// رابعا :انشئ واجهة بيانات جديدة باسم Teacher , تتكون من :

interface Teacher {
    id: number
    name: String
    specialty : string
    courseNum: Number
}
let th1: Teacher ={
    id: 1,
    name: "Abduallah",
    specialty : "Programing",
    courseNum: 1,
}
let th2: Teacher ={
    id: 1,
    name: "Abduallah",
    specialty : "Programing",
    courseNum: 1,
}
let th3: Teacher ={
    id: 1,
    name: "Abduallah",
    specialty : "Programing",
    courseNum: 1,
}

// خامسا : أدخل بيانات ثلاث معلمين على مصفوفة school , بستخدام Aliases
type TeachersNames = Teacher
let NamesOfTeachers: TeachersNames[] = [th1,th2,th3]
let arrAndObj: Object[] = school.concat(NamesOfTeachers)
console.log(arrAndObj);


// سادسا: اطبع بيانات مصفوفة school مع التميز بين student و Teacher
for (let i = 0; i < arrAndObj.length; i++) {
    if(i < 3){
        console.log("Student:" + arrAndObj[i]);
    }else{
        console.log("Teacher:" + arrAndObj[i]);
    }  
}

// سابعا :انشى function تحول قيمةisSenior بين fales and true
st3.isSenior = false
console.log(st3.isSenior);


// امنا : انشى function تغير قمية courseNum .
function changeCourse(num:Number) {
    return th1.courseNum = num
}
changeCourse(7)
console.log(th1.courseNum);
