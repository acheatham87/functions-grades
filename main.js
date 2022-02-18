

const createNewStudent = () => {
    const newStudent = {
        Name: "Andrew",
        Grade: "Freshman"
    }
    return newStudent
}

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
const newStudent = createNewStudent()

const studentWithMath = addMathGrade(newStudent)
const studentWithHistory = addHistoryGrade(studentWithMath)
const studentWithScience = addScienceGrade(studentWithHistory)

console.log (newStudent)

