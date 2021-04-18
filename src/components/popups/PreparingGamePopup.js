import React, { useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { renderStartGamePopup } from "./StartGamePopup";
import { NumUsersContext } from "../UsersProvider";

export default function PreparingGamePopup({ socket }) {
  const history = useHistory();
  const userContext = useContext(NumUsersContext);
  const total = 6;

  if (!socket || !socket.current) return;

  socket.current.on("start_game", (response) => {
    if (response && response.error) {
      renderErrorPopup(response.error);
    } else {
      PopupboxManager.close();
      history.push("/match");
      // TODO: Opciones que se me ocurren:
      // 1. Apagar la escucha temporalmente hasta cambiar el popup, y empezarla
      //    en otro sitio con otra función asociada
      // 2. Entender bien los componentes, y forzar un unmount de este componente
      //    para dejar de escuchar, evitando disparos no deseados
      // 3. Subir las escuchas a un componente más global, por encima 
      //   (lifting-up state), intentando no hacer las escuchas desde este popup,
      //    sino que sean más genéricas 
      // TODO. Probando a apagar la escucha desde este popup
      // https://stackoverflow.com/questions/59842978/is-there-any-way-to-stop-the-listening-from-socket-io
      socket.current.off("game_owner");
    }
  });

  console.log("FASE 1")
  
  socket.current.on("game_owner", () => {
    console.log("GAME_OWNER_MSG");
    PopupboxManager.close();
    renderStartGamePopup(socket);
    // Return
    return () => {
      console.log("COMPONENT UNMOUNT 1");
    }
  });

  console.log("FASE 2")  

  return (
    <Popup title="Preparando partida...">
      <Row className="justify-content-center mb-3 mt-3">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Row>
      <Row className="justify-content-center">
        <p className="h5 text-center mb-3">
          {userContext.users}/{total} usuarios preparados
        </p>
      </Row>
    </Popup>
  );

}

export function renderPreparingGamePopup(socket) {
  const content = <PreparingGamePopup socket={socket} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      escClose: false,
      overlayClose: false,
    },
  });
  console.log("FASE 3");
}
