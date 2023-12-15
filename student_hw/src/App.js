import "./App.css";
import Student from "./Student";
import { useState } from "react";
// function App() {
//   const names = ["Mishelle", "Pedro", "Jake", "Tom", "Mike"];
//   return (
//     <div className="App">
//       {names.map((name, key) => {
//         return <h1 key={key}> {name}</h1>;
//       })}
//     </div>
//   );
// }

function App() {
  const [studentData, setStudentData] = useState({
    students: [
      {
        name: "Cait Yomorta",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
        scores: [
          {
            date: "2018-02-08",
            score: 77,
          },
          {
            date: "2018-04-22",
            score: 92,
          },
          {
            date: "2018-09-15",
            score: 68,
          },
        ],
      },
      {
        name: "Holly Baird",
        bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
        scores: [
          {
            date: "2018-12-14",
            score: 88,
          },
          {
            date: "2019-01-09",
            score: 79,
          },
          {
            date: "2019-02-23",
            score: 91,
          },
          {
            date: "2019-03-01",
            score: 95,
          },
        ],
      },
      {
        name: "Wes Mungia",
        bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
        scores: [
          {
            date: "2018-10-11",
            score: 62,
          },
          {
            date: "2018-11-24",
            score: 74,
          },
          {
            date: "2018-12-19",
            score: 85,
          },
        ],
      },
    ],
  });

  //these students sometimes got above 90 ---just for fun
  // const sometimesAbove90 = studentData.students.filter((student) =>
  //   student.scores.some((score) => score.score > 90)
  // );
  // return (
  //   <div className="App">
  //     {sometimesAbove90.map((student, key) => (
  //       <Student
  //         // key={key}
  //         // student={student} />
  //         key={key}
  //         name={student.name}
  //         bio={student.bio}
  //         scores={student.scores}
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <div className="App">
      {studentData.students.map((student, key) => (
        <Student
          key={key}
          name={student.name}
          bio={student.bio}
          scores={student.scores}
        />
      ))}
    </div>
  );
}

export default App;
