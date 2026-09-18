
const fs = require("fs");

// Load student records
const students = JSON.parse(
  fs.readFileSync("students.json", "utf8")
);

// Calculate average grade
function calculateAverage(grades) {
  const total = grades.reduce(
    (sum, grade) => sum + grade,
    0
  );

  return (total / grades.length).toFixed(2);
}

// Display report title
console.log("====================================");
console.log("     STUDENT RECORDS PROCESSOR");
console.log("====================================");

// Display student records
students.forEach((student) => {
  const average = calculateAverage(student.grades);

  console.log(`\nID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Year: ${student.year}`);
  console.log(`Course: ${student.course}`);
  console.log(`Grades: ${student.grades.join(", ")}`);
  console.log(`Average: ${average}`);
  console.log(`Enrolled: ${student.enrolled ? "Yes" : "No"}`);
  console.log(`Attendance: ${student.attendance}`);
});

// Summary calculations
const totalStudents = students.length;

const enrolledStudents = students.filter(
  (student) => student.enrolled
).length;

const absentStudents = students.filter(
  (student) => student.attendance === "Absent"
).length;

const presentStudents = students.filter(
  (student) => student.attendance === "Present"
).length;

const overallAverage = (
  students.reduce((total, student) => {
    return total + Number(calculateAverage(student.grades));
  }, 0) / totalStudents
).toFixed(2);

// Summary report
console.log("\n====================================");
console.log("           SUMMARY REPORT");
console.log("====================================");

console.log(`Total Students: ${totalStudents}`);
console.log(`Enrolled Students: ${enrolledStudents}`);
console.log(`Present Students: ${presentStudents}`);
console.log(`Absent Students: ${absentStudents}`);
console.log(`Overall Average: ${overallAverage}`);

console.log("====================================");
console.log("       PROCESSING COMPLETE");
console.log("====================================");
