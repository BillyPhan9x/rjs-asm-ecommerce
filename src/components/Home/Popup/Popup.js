import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, Row, Col } from "reactstrap";

import { popupActions } from "../../../Redux/slices/popup-slice";

import priceFormat from "../../../utils/priceFormat";

const Popup = ({ item, show }) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(popupActions.HIDE_POPUP());
  };

  return (
    <>
      <Modal isOpen={show} centered size="xl" toggle={closePopup}>
        <ModalBody>
          <Row className="d-flex align-items-center position-relative m-2">
            <Col lg="6" md="12">
              <img src={item.img1} alt={item.name} className="border-0" />
            </Col>

            <Col lg="6" md="12">
              <Button
                className="btn-close position-absolute top-0 end-0"
                onClick={closePopup}
              ></Button>

              <div className="popup__info">
                <h3>{item.name}</h3>
                <p className="h5 mt-3">{priceFormat(item?.price)}</p>
                <p className="my-3">{item.short_desc}</p>
                <Button
                  type="button"
                  className="btn btn-dark rounded-0 py-2 px-4"
                >
                  <Link
                    to={`/detail/${item._id.$oid}`}
                    state={item}
                    className="link-light"
                  >
                    <i className="fa fa-shopping-cart me-2"></i>
                    View Detail
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Popup;
