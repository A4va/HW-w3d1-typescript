"use strict";
let st1 = {
    id: 1,
    name: "Abduallah",
    level: "MAX",
    isSenior: true,
};
let st2 = {
    id: 1,
    name: "Abduallah",
    level: "MAX",
    isSenior: true,
};
let st3 = {
    id: 1,
    name: "Abduallah",
    level: "MAX",
    isSenior: true,
};
// ثانيا :انشئ مصفوفة نعطيها اسم school , ندخل بيانات ثلاث طلاب
let school = [st1, st2, st3];
// ثالثا : انشئ function تقوم بطباعة بيانات الطلاب
function printer() {
    console.log(school);
}
printer();
let th1 = {
    id: 1,
    name: "Abduallah",
    specialty: "Programing",
    courseNum: 1,
};
let th2 = {
    id: 1,
    name: "Abduallah",
    specialty: "Programing",
    courseNum: 1,
};
let th3 = {
    id: 1,
    name: "Abduallah",
    specialty: "Programing",
    courseNum: 1,
};
let NamesOfTeachers = [th1, th2, th3];
let arrAndObj = school.concat(NamesOfTeachers);
console.log(arrAndObj);
// سادسا: اطبع بيانات مصفوفة school مع التميز بين student و Teacher
for (let i = 0; i < arrAndObj.length; i++) {
    if (i < 3) {
        console.log("Student:" + arrAndObj[i]);
    }
    else {
        console.log("Teacher:" + arrAndObj[i]);
    }
}
// سابعا :انشى function تحول قيمةisSenior بين fales and true
st3.isSenior = false;
console.log(st3.isSenior);
// امنا : انشى function تغير قمية courseNum .
function changeCourse(num) {
    return th1.courseNum = num;
}
changeCourse(7);
console.log(th1.courseNum);
