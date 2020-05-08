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

function getSubjects (students)  {
    const Subjects = Object.keys(students.subjects);
    studSub = Subjects.map(function (value) {
        let SubjectName = value.charAt(0).toUpperCase() + value.slice(1).replace(/\_/, ' ');
        return SubjectName;
    });
    return studSub;
};
console.log(getSubjects(students[0]));

const getAverageMark = (student) => {
    const studentMarks = Object.values(student.subjects).flat();
    let sum = 0;
    for( let i= 0; i < studentMarks.length; i++){
        sum = sum + studentMarks[i];
    }
    const averageMark = sum / studentMarks.length;
    return averageMark.toFixed(2);
};
console.log(getAverageMark(students[0]));

const getStudentInfo = (student) => {
    const result = {};
    result.course = student.course;
    result.name = student.name;
    result.avMark = getAverageMark(student);
    return result
};
console.log(getStudentInfo(students[0]));

const getStudentsNames = (arr) => {
    return arr.map(el => el.name).sort()
};
console.log(getStudentsNames(students));

const getBestStudent = (students) =>{
    let name = '';
    Object.values(students).forEach((element) => {
        let maxMark = 0;
        const mark = getAverageMark(element);
        if (maxMark < mark){
            maxMark = mark;
            name = element.name;
        }
    });
    return name
};
console.log(getBestStudent(students));
function calculateWordLetters(s) {
    const  letters = {};
    for (let i= 0; i <s.length; i++){
        s[i] in letters ? letters[s[i]] +=1 : letters[s[i]] = 1;
    }
    return letters
}
console.log(calculateWordLetters('test'))