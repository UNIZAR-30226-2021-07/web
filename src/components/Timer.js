import React, {useContext} from "react";
import { Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { GameContext } from "./GameProvider";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="text-center">
      <div className="time">{remainingTime}</div>
    </div>
  );
};

function Timer() {
  const { pause } = useContext(GameContext);
  return (
    <Row className="justify-content-center mb-2">
      <CountdownCircleTimer
        isPlaying={!pause.paused}
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
