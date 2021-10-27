import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import TableWalletCurrency from "./components/TableWalletCurrency.component";

const Wallet = () => {
    const {isOpenWallet} = useSelector(state => state.wallet);
    const dispatch = useDispatch();

    const closeWallet = () => {
        dispatch({type: "SET_IS_OPEN_WALLET", payload: false});
    }

    return (
        <Modal
            show={isOpenWallet}
            onHide={closeWallet}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"  className=" centeredBlock">
                    List of my currency
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TableWalletCurrency />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeWallet} >Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default Wallet;