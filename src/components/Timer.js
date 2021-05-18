import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { SessionContext } from "./SessionProvider";
import { GameContext } from "./GameProvider";

const renderTime = ({ remainingTime }, isTurn) => {
  return isTurn ? (
    <div className="text-center">
      <div className="time">{remainingTime} </div>
    </div>
  ) : (
    <div className="text-center">
      <strong style={{ fontSize: "14px" }}>ESPERA</strong>
    </div>
  );
};

function Timer() {
  const { userData } = useContext(SessionContext);
  const { isPaused, currentTurn, isFinished } = useContext(GameContext);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsPlaying(!isPaused);
  }, [isPaused]);

  let isTurn = currentTurn == userData.name;
  return isFinished ? null : (
    <Row className="justify-content-center mb-2">
      <CountdownCircleTimer
        key={currentTurn}
        isPlaying={currentTurn == userData.name ? isPlaying : false}
        duration={30}
        colors={
          currentTurn == userData.name
            ? [["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]
            : [["#7A7A7A"]]
        }
        size={80}
        strokeWidth={8}
        onComplete={() => [true, 1000]}
      >
        {({ remainingTime }) => renderTime({ remainingTime }, isTurn)}
      </CountdownCircleTimer>
    </Row>
  );
}

export default Timer;
