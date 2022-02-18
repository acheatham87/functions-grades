

const createStudent = () => {
    const newStudent = {
        name: "James",
        grade: "Freshman"
    }
    return newStudent
}
const newStudent = createStudent()
console.log(newStudent)

const addMathGrade = (student) => {
    student.mathGrade = "B"
    return student
}

const addHistoryGrade = (student) => {
    student.historyGrade = "C"
    return student
}
const addScienceGrade = (student) => {
    student.scienceGrade = "A"
    return student
}
const studentWithMath = addMathGrade(newStudent)
const studentWithHistory = addHistoryGrade(studentWithMath)
const studentWithScience = addScienceGrade(studentWithHistory)


