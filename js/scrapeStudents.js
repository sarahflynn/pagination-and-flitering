const studentData = [];

const students = document.querySelectorAll('.student-item');

console.log('students', students);

students.forEach(student => {
  const src = student.childNodes[1].childNodes[1].src;
  const name = student.childNodes[1].childNodes[3].innerText;
  const email = student.childNodes[1].childNodes[5].innerText;
  const joined = student.childNodes[3].childNodes[1].innerText.split(' ')[1];

  studentData.push({
    src: src,
    name: name,
    email: email,
    joined: joined
  });
});

const jsonStudentData = JSON.stringify(studentData);

console.log('json', jsonStudentData)

