import React from "react";
import { Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    /*alert("Tiempo finalizado");*/
  }

  return (
    <div className="text-center">
      <div className="time">{remainingTime}</div>
    </div>
  );
};

function Timer() {
  return (
    <Row className="justify-content-center">
      <CountdownCircleTimer
        isPlaying={true}
        duration={30}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        size={80}
        strokeWidth={8}
        onComplete={() => [true, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </Row>
  );
}

export default Timer;
