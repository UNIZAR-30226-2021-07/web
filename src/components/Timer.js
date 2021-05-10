import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { SessionContext } from "./SessionProvider";
import { GameContext } from "./GameProvider";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="text-center">
      <div className="time">{remainingTime}</div>
    </div>
  );
};

function Timer() {
  const { userData } = useContext(SessionContext);
  const { pause, currentTurn } = useContext(GameContext);

  const [isPaused, setIsPaused] = useState(pause.paused);

  useEffect(() => {
    setIsPaused(pause.paused);
  }, [pause.paused]);

  return (
    currentTurn == userData.name && (
      <Row className="justify-content-center mb-2">
        <CountdownCircleTimer
          isPlaying={!isPaused}
          duration={30}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          size={80}
          strokeWidth={8}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </Row>
    )
  );
}

export default Timer;
