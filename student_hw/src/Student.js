import React from "react";
import ScoreInfo from "./ScoreInfo";

// function Student(props) {////-wrong: needs to pass each student; can't manupulate each property in App()
//   const { name, bio, scores } = props.student;
//   return (
//     <div className="student">
//       <p>{bio}</p>
//       <h3>Scores: </h3>
//       {scores && scores.length > 0 ? (
//         scores.map((score, key) => (
//           <ScoreInfo key={key} date={score.date} score={score.score} />
//         ))
//       ) : (
//         <p>No scores available</p>
//       )}
//     </div>
//   );
// }
const Student = ({ name, bio, scores }) => (
  <div>
    <h1 style={{ color: "green" }}>{name}</h1>
    <p>{bio}</p>
    <h3>Scores:</h3>
    {scores.map((score, index) => (
      <ScoreInfo key={index} date={score.date} score={score.score} />
    ))}
  </div>
);

export default Student;
