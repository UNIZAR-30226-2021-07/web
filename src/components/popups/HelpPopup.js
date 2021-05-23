import React from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { PopupboxManager } from "react-popupbox";

import organ1 from "../../assets/common/cards/cuerpo_cerebro.png";
import organ2 from "../../assets/common/cards/cuerpo_corazon.png";
import organ3 from "../../assets/common/cards/cuerpo_estomago.png";
import organ4 from "../../assets/common/cards/cuerpo_hueso.png";
import organ5 from "../../assets/common/cards/cuerpo_full.png";

import virus1 from "../../assets/common/cards/virus_a.png";
import virus2 from "../../assets/common/cards/virus_b.png";
import virus3 from "../../assets/common/cards/virus_c.png";
import virus4 from "../../assets/common/cards/virus_d.png";
import virus5 from "../../assets/common/cards/virus_e.png";

import medicina3 from "../../assets/common/cards/medicina_jarabe.png";
import medicina2 from "../../assets/common/cards/medicina_jeringuilla.png";
import medicina5 from "../../assets/common/cards/medicina_medikit.png";
import medicina1 from "../../assets/common/cards/medicina_pastis.png";
import medicina4 from "../../assets/common/cards/medicina_tiritas.png";

import tratamiento1 from "../../assets/common/cards/especial_operacion.png";
import tratamiento2 from "../../assets/common/cards/especial_robaorganos.png";
import tratamiento3 from "../../assets/common/cards/especial_tos.png";
import tratamiento4 from "../../assets/common/cards/especial_guantes.png";
import tratamiento5 from "../../assets/common/cards/especial_radiografia.png";

function HelpPopup() {
  return (
    <Row className=" help-popup justify-content-center align-items-center mt-4 ml-2 mr-2">
      <Col>
        <Card className="card-help-popup p-0">
          <Button className="close card-close" onClick={PopupboxManager.close}>
            &times;
          </Button>
          <Card.Title>
            <p className="primary-title text-center">AYUDA</p>
          </Card.Title>
          <Card.Title className="mt-4">
            <p className="secondary-title text-center">
              Estructura del tablero
            </p>
          </Card.Title>
          <Card.Text className="mt-4 text-justify">
            En la parte más inferior aparece tu mano, es decir, las cartas que
            tienes en todo momento para poder jugar.
            <br />
            <br />
            En mitad de pantalla aparecen 3 componentes: <br />
            ● Un botón con el que puedes pasar el turno <br />
            ● El cronómetro, que cuando sea tu turno se activará y podrás ver el
            tiempo de juego restante en tu turno.
            <br />
            ● Un cuadro al que puedes descartar cartas de tu mano. <br />
            <br />
            Entre estos componentes y tu mano, se encuentra el espacio para ir
            colocando las cartas de tu cuerpo. Entre los botones superiores y
            los componentes mencionados se encuentran los cuerpos de tus
            oponentes. Puedes colocar en tu turno cartas sobre estos cuerpos.
          </Card.Text>
          <Card.Title className="mt-4">
            <p className="secondary-title text-center">Objetivo del juego</p>
          </Card.Title>
          <Card.Text className="mt-4 text-justify">
            Sé el primer jugador en completar tu cuerpo. Un cuerpo lo forman 4
            órganos, uno de cada color. Si logras reunir sobre la mesa, frente a
            ti, tus 4 órganos diferentes sanos, ¡habrás ganado la partida!.
          </Card.Text>
          <Card.Title className="mt-4">
            <p className="secondary-title text-center">Mecánica del juego</p>
          </Card.Title>
          <Card.Text className="mt-4 text-justify">
            Cada jugador debe tener siempre al comienzo de su turno 3 cartas en
            su mano y tan solo podrá realizar una acción por turno. Después de
            haber actuado, recibirá cartas del mazo para volver a tener su mano
            completa. Juega los distintos tipos de carta, colocándolas en el
            espacio del cuerpo para construirlo, o sobre las cartas de tus
            rivales para evitar que estos lo logren antes que tú.
            <br />
            <br />
            Algunas cartas pueden obligarte a descartar o cambiar tus órganos,
            tus vacunas o incluso tu mano. Elabora tu estrategia para ser el
            primero en formar tu cuerpo completo.
            <br />
            Permanece atento a las jugadas de los demás, porque tendrás que
            evitar que el resto de jugadores terminen su cuerpo antes que tú.
          </Card.Text>
          <Card.Title className="mt-4">
            <p className="secondary-title text-center">Fases del juego</p>
          </Card.Title>
          <Card.Text className="mt-4 text-justify">
            <b>● FASE 1: Jugar o descartar. </b>
            Jugar una única carta de tu mano o descarta las cartas que se desee.
            <br />
            <br />
            <b>● FASE 2: Robar. </b>
            Tu mano se completará automáticamente cuando termine tu turno.
            <br />
            <br />
            <b>● FASE 3: Pasar. </b>
            Pasa el turno al jugador de tu derecha.
          </Card.Text>
          <Card.Title className="mt-4">
            <p className="secondary-title text-center">Tipos de carta</p>
          </Card.Title>
          <Card.Title className="mt-4">
            <p className="tertiary-title text-left">Órganos</p>
          </Card.Title>
          <Row className="align-items-center justify-content-center mt-4">
            <Card.Img className="help-component-image mt-2" src={organ1} />
            <Card.Img className="help-component-image mt-2" src={organ2} />
            <Card.Img className="help-component-image mt-2" src={organ3} />
            <Card.Img className="help-component-image mt-2" src={organ4} />
            <Card.Img className="help-component-image mt-2" src={organ5} />
          </Row>
          <Card.Text className="mt-4 text-justify">
            Usa las cartas de virus para destruir los órganos y medicinas de tus
            rivales. Los virus sólo tienen efecto sobre órganos y medicinas de
            su mismo color.
            <br />
            <br />
            El órgano multicolor actúa como un comodín para ayudarte a completar
            tu cuerpo y cuenta como órgano a todos sus efectos. Puede vacunarse
            con una medicina de cualquier color, pero también puede ser
            infectado por un virus de cualquier color.
          </Card.Text>
          <Card.Title className="mt-4">
            <hr />
            <p className="tertiary-title text-left">Virus</p>
          </Card.Title>
          <Row className="align-items-center justify-content-center mt-4">
            <Card.Img className="help-component-image mt-2" src={virus1} />
            <Card.Img className="help-component-image mt-2" src={virus2} />
            <Card.Img className="help-component-image mt-2" src={virus3} />
            <Card.Img className="help-component-image mt-2" src={virus4} />
            <Card.Img className="help-component-image mt-2" src={virus5} />
          </Row>
          <Card.Text className="mt-4 text-justify">
            <b>● INFECTAR:</b> Coloca una carta de virus sobre un órgano libre
            de su color para infectarlo. No podrás completar tu cuerpo si alguno
            de tus órganos está infectado por un virus.
            <br />
            <br />
            <b>● EXTIRPAR:</b> Destruye un órgano infectado. Coloca un segundo
            virus sobre un órgano ya infectado: Este órgano es destruido y las
            tres cartas van a parar a los descartes.
            <br />
            <br />
            <b>● DESTRUIR VACUNA:</b> Destruye una vacuna. Elimina una carta de
            medicina que se encuentre sobre un órgano. Envía el virus y la
            medicina a los descartes.
            <br />
            <br />
            <b>● VIRUS MULTICOLOR:</b> Este virus comodín puede infectar un
            órgano o destruir una vacuna de cualquier color. Sin embargo,
            también puede ser curado por medicinas de cualquier color.
          </Card.Text>
          <Card.Title className="mt-4">
            <hr />
            <p className="tertiary-title text-left">Medicinas</p>
          </Card.Title>
          <Row className="align-items-center justify-content-center mt-4">
            <Card.Img className="help-component-image mt-2" src={medicina1} />
            <Card.Img className="help-component-image mt-2" src={medicina2} />
            <Card.Img className="help-component-image mt-2" src={medicina3} />
            <Card.Img className="help-component-image mt-2" src={medicina4} />
            <Card.Img className="help-component-image mt-2" src={medicina5} />
          </Row>
          <Card.Text className="mt-4 text-justify">
            <b>● CURAR:</b> Destruye un virus. Utiliza una carta de medicina
            para descartar un virus de su mismo color que se encuentre sobre un
            órgano.
            <br />
            <br />
            <b>● VACUNAR:</b> Protege un órgano. Coloca una medicina sobre un
            órgano libre de su mismo color. Ahora tus rivales necesitan dos
            virus para infectar tu órgano.
            <br />
            <br />
            <b>● INMUNIZAR:</b> Coloca una segunda medicina sobre un órgano.
            Este queda protegido para siempre contra el ataque de cualquier
            virus y no podrá ser destruido ni afectado por cartas de
            tratamiento.
            <br />
            <br />
            <b>● MEDICINAS MULTICOLOR:</b> Estas medicinas son comodines.
            Utilízalas para curar virus o vacunar órganos de cualquier color.
            Del mismo modo, pueden ser destruidas por virus de cualquier color.
          </Card.Text>
          <Card.Title className="mt-4">
            <hr />
            <p className="tertiary-title text-left">Tratamientos</p>
          </Card.Title>
          <Card.Text className="mt-4 text-justify">
            Las cartas de tratamiento pueden alterar el juego para ayudarte a
            ganar. Utilízalas en tu beneficio o para evitar que tus rivales
            completen su cuerpo antes que tú.
            <br />
            <br />
            <b>● TRASPLANTE:</b> Intercambia un órgano por otro entre dos
            jugadores cualesquiera. No importa si el color de estos órganos es
            diferente, ni si están sanos, infectados o vacunados. Sencillamente
            el jugador cambia el órgano escogido por otro, siempre y cuando
            ninguno de los dos jugadores tenga dos órganos del mismo color ni
            éstos estén inmunizados.
            <Row className="align-items-center justify-content-center mt-4">
              <Card.Img
                className="help-component-image mt-2"
                src={tratamiento1}
              />
            </Row>
            <br />
            <br />
            Para realizar esta acción primero debes arrastrar la carta al órgano
            del primer jugador con el que quieres intercambiar y lo mismo con el
            segundo que participa en el transplante.
            <br />
            <br />
            <b>● LADRÓN DE ÓRGANOS:</b> Roba un órgano de otro jugador y añádelo
            a tu cuerpo. Puedes robar órganos sanos, vacunados o infectados,
            pero no inmunes. Recuerda que no puedes tener dos órganos del mismo
            color
            <Row className="align-items-center justify-content-center mt-4">
              <Card.Img
                className="help-component-image mt-2"
                src={tratamiento2}
              />
            </Row>
            <br />
            <br />
            Para realizar esta acción arrastra la carta de tratamiento al órgano
            que quieras robar.
            <br />
            <br />
            <b>● CONTAGIO:</b> Contagia con tantos virus como puedas de tus
            órganos infectados a los órganos de los demás jugadores.
            <Row className="align-items-center justify-content-center mt-4">
              <Card.Img
                className="help-component-image mt-2"
                src={tratamiento3}
              />
            </Row>
            <br />
            <br />
            Para realizar esta acción arrastra la carta de tratamiento a
            cualquier cuerpo y se realizará el contagio de manera aleatoria.
            <br />
            <br />
            <b>● GUANTE DE LÁTEX:</b> Todos los jugadores, excepto el que
            utiliza el guante, descartan su mano. Su mano será reestablecida de
            nuevo con cartas nuevas.
            <Row className="align-items-center justify-content-center mt-4">
              <Card.Img
                className="help-component-image mt-2"
                src={tratamiento4}
              />
            </Row>
            <br />
            <br />
            Para realizar esta acción arrastra la carta de tratamiento a
            cualquier cuerpo.
            <br />
            <br />
            <b>● ERROR MÉDICO:</b> Intercambia todo tu cuerpo por el de otro
            jugador, incluyendo órganos, virus y vacunas. No importa el número
            de cartas que cada uno tenga. Cuando usas esta carta, los órganos
            inmunizados también son intercambiados.
            <Row className="align-items-center justify-content-center mt-4">
              <Card.Img
                className="help-component-image mt-2"
                src={tratamiento5}
              />
            </Row>
            <br />
            <br />
            Para realizar esta acción arrastra la carta de tratamiento al cuerpo
            del jugador con el que quieras intercambiar el cuerpo.
          </Card.Text>
        </Card>
      </Col>
    </Row>
  );
}

export function renderHelpPopup() {
  const content = <HelpPopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      fadeOut: true,
      fadeOutSpeed: 400,
    },
  });
}
