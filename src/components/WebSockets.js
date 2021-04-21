export function leaveGame({ socket }) {
  socket.current.emit("leave", (data) => {
    if (data && data.error) {
      console.log(data.error);
    } else {
      console.log("leaving game");
    }
  });
}

export function stopSearchingGame({ socket }) {
  socket.current.off("found_game");
  socket.current.emit("stop_searching", (data) => {
    if (data && data.error) {
      console.log(data.error);
    } else {
      console.log("stop searching");
    }
  });
}
