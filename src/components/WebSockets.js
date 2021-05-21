import { renderErrorPopup } from "./popups/ErrorPopup";

export function leaveGame({ socket }) {
  socket.current.emit("leave", (data) => {
    if (data && data.error) {
      console.log(data.error);
    }
  });
}

export function stopSearchingGame({ socket }) {
  socket.current.off("found_game");
  socket.current.emit("stop_searching", (data) => {
    if (data && data.error) {
      console.log(data.error);
    }
  });
}

export function playCard({ socket }, data) {
  socket.current.emit("play_card", data, (response) => {
    if (response && response.error) {
      console.log(response.error);
      renderErrorPopup(response.error);
    }
  });
}

export function playDiscard({ socket }, data) {
  socket.current.emit("play_discard", data, (response) => {
    if (response && response.error) {
      console.log(response.error);
      renderErrorPopup(response.error);
    }
  });
}
