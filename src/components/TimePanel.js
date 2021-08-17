import React from "react";
import styled from "styled-components";

const TimePanel = ({ miliseconds }) => {
  // switch (miliseconds) {
  //   case miliseconds > 100 && miliseconds < 1000:
  //     console.log("ok");
  //     break;
  //   default:
  //     console.log("default");
  // }

  return (
    <Timer>{`${Math.floor(miliseconds / 6000)}:${Math.floor(
      miliseconds / 100
    )}:${
      miliseconds <= 9 ? "0" + (miliseconds % 100) : miliseconds % 100
    }`}</Timer>
  );
};

// class TimePanel extends React.Component {
//   state = {
//     seconds: 0,
//     minutes: 0,
//   };

//   render() {
//     const {
//       props: { miliseconds },
//       state: { seconds, minutes },
//     } = this;
//     if (seconds >= 60) {
//       this.setState({
//         minutes: minutes + 1,
//       });
//     }
//     if (miliseconds === 100) {
//       console.log("jestem na 100");
//     }
//     if (seconds === 60)
//       this.setState({
//         seconds: 0,
//       });
//     console.log(miliseconds);

//     return (
//       <Timer>{` ${minutes <= 9 ? "0" : ""}${minutes}:${
//         seconds <= 9 ? "0" : ""
//       }${seconds}:${miliseconds <= 9 ? "0" : ""}${
//         miliseconds === 100 ? "00" : miliseconds
//       }`}</Timer>
//     );
//   }
// }

const Timer = styled.div`
  display: flex;
  align-items: center;
  height: 154px;

  background-color: #f5c801;
  padding-left: 8px;
  border-radius: 10px;
  letter-spacing: 9px;
`;

export default TimePanel;
