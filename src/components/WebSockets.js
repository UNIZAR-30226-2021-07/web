export function leaveGame({ socket }) {
  socket.current.emit("leave", (data) => {
    if (data && data.error) {
      console.log(data.error);
    } else {
      console.log("leaving game");
    }
  });
}
