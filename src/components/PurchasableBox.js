import React, { useContext, useEffect, useState } from "react";
import { Card, Image, Row, Col } from "react-bootstrap";

import { getBoard } from "../utils/json";
import { getAvatar } from "../utils/json";
import { getUserData, modifyUser } from "../utils/api";

import lock from "../assets/common/icons/candado.svg";
import coinImg from "../assets/common/icons/huella.svg";
import check from "../assets/common/icons/check.svg";

import { SessionContext } from "./SessionProvider";
import { renderConfirmPurchasePopup } from "./popups/ConfirmPurchasePopup";
import { renderErrorPopup } from "./popups/ErrorPopup";

function PurchasableBox({ index, type }) {
  const session = useContext(SessionContext);
  const [isBought, setIsBought] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  let [elt, eltPrice] = type == "board" ? getBoard(index) : getAvatar(index);

  useEffect(() => {
    // Check if element is bought
    if (session.userData.purchases) {
      setIsBought(
        session.userData.purchases.some(
          (elem) => elem.type == type && elem.item_id == index
        )
      );
    }
  }, [session.userData.purchases]);

  // Check if element is selected
  useEffect(() => {
    if (type == "profile_pic") {
      if (session.userData.picture == index) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    } else {
      if (session.userData.board == index) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }, [session.userData.picture, session.userData.board]);

  function changeUserData() {
    // If it is already selected disable the call
    if (!isSelected) {
      // Update user configuration calling API function
      let data = new URLSearchParams();
      if (type == "profile_pic") data.append(`picture`, index);
      else data.append(`board`, index);
      modifyUser({
        token: session.token,
        data,
        setToken: session.setToken,
      }).then((response) => {
        if (response != null) {
          if ("message" in response) {
            // Update local user_data as server has just updated
            getUserData(session).then((response) => {
              if (response != null) {
                if ("error" in response) {
                  console.error(response.error);
                } else {
                  session.setUserData({
                    email: response.email,
                    name: response.name,
                    coins: response.coins,
                    picture: response.picture,
                    board: response.board,
                    purchases: response.purchases,
                  });
                }
              }
            });
          } else {
            renderErrorPopup(response.error);
          }
        }
      });
    }
  }

  return isBought ? (
    <Card
      className="purchasable-component p-0 my-3 ml-sm-4 ml-md-2"
      onClick={() => changeUserData()}
    >
      <Card.Img
        className="purchasable-component-image"
        src={elt}
        rounded="true"
      />
      {isSelected ? (
        <Card.ImgOverlay className="align-items-center justify-content-center">
          <Image className="check-image" src={check} roundedCircle />
        </Card.ImgOverlay>
      ) : null}
    </Card>
  ) : (
    <Card
      className="purchasable-component p-0 my-3 ml-sm-4 ml-md-2"
      onClick={() => renderConfirmPurchasePopup(index, type, eltPrice)}
    >
      <Card.Img
        className="purchasable-component-image"
        src={elt}
        rounded="true"
      />
      <Card.ImgOverlay className="align-items-center justify-content-center">
        <Row className="align-items-center justify-content-center">
          <Image className="box-image" src={lock} />
        </Row>
        <Row className="align-items-center justify-content-center">
          <Card className="coins-box">
            <Row className="p-0 m-0 ml-2 flex-nowrap">
              <Col className="p-0 flex-grow-0">{eltPrice}</Col>
              <Col className="p-0 flex-grow-0 ml-1 mr-2">
                <Image className="coin-image" src={coinImg} />
              </Col>
            </Row>
          </Card>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
}

export default PurchasableBox;
