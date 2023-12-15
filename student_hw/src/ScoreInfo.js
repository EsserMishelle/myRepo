import React from "react";

function ScoreInfo(props) {
  //the props: each entry of testing date & score
  return (
    <div className="scoreInfo">
      <p>Date: {props.date}</p>
      <p>Score: {props.score}</p>
    </div>
  );
}

//// either solution will work:
// function ScoreInfo({ date, score }) {
//   return (
//     <div>
//       <p>Date: {date}</p>
//       <p>Score: {score}</p>
//     </div>
//   );
// }

export default ScoreInfo;
