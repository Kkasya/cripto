import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, InputGroup, Modal} from "react-bootstrap";
import {addCurrency, setIsOpenAddingWallet} from "../../../store/walletReducer";
import {roundSeparateNumber} from "../../../common/utils";

const AddingCurrency = () => {
    const {isOpenAddingWallet, addedCurrency} = useSelector(state => state.wallet);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0.01);

    const closeWallet = () => {
        dispatch(setIsOpenAddingWallet(false));
    };

    const addToWallet = () => {
        if (count > 0) {
            const newCurrencyItem = {
                id: addedCurrency.id,
                name: addedCurrency.name,
                price: addedCurrency.priceUsd,
                count: count,
                summary: addedCurrency.priceUsd * count,
            };
            dispatch(addCurrency(newCurrencyItem));

            closeWallet();
        } else setCount(0)
    };

    const checkValue = (e) => {
        console.log('----------')
        console.log(Number(e.target.value) > 0)
        if (Number(e.target.value) >= 0 )  setCount(e.target.value);

    }

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
            <Modal.Body className="centeredRows">
                <h4>{addedCurrency.name} - ${roundSeparateNumber(addedCurrency.priceUsd)}</h4>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Count: </InputGroup.Text>
                    <FormControl
                        placeholder="Count of currency"
                        aria-label="Count"
                        type="number"
                        min="0"
                        step="0.01"
                        value={count}
                        // onkeyup={() => checkValue()}
                        onChange={checkValue}
                    />
                </InputGroup>
                <p>The count must be a positive number greater than zero </p>
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