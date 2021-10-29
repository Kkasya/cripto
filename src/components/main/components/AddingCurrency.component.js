import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, InputGroup, Modal} from "react-bootstrap";
import {addCurrency, setIsOpenAddingWallet} from "../../../store/walletReducer";

const AddingCurrency = () => {
    const {isOpenAddingWallet, addedCurrency} = useSelector(state => state.wallet);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const closeWallet = () => {
        dispatch(setIsOpenAddingWallet(false));
    };

    const addToWallet = () => {
        const newCurrencyItem = {
            id: addedCurrency.id,
            name: addedCurrency.name,
            price: addedCurrency.priceUsd,
            count: count,
            summary: addedCurrency.priceUsd * count,
        };
        dispatch(addCurrency(newCurrencyItem));

        closeWallet();
    };

    return (
        <Modal
            show={isOpenAddingWallet}
            onHide={closeWallet}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add to the wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="centeredAllBlock">{addedCurrency.name}</h4>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Count: </InputGroup.Text>
                    <FormControl
                        placeholder="Count of currency"
                        aria-label="Count"
                        type="number"
                        min="0"
                        step="0.01"
                        onChange={(e) => setCount(e.target.value)}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addToWallet}>
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={closeWallet}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default AddingCurrency;