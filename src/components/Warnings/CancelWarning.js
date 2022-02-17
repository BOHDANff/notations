import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import {useNavigate} from "react-router-dom";

function CancelWarning(props) {
    const navigate = useNavigate()
    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            <div>Are you really want to cancel editions?</div>
            <MyButton onClick={() => {
                props.setVisible(false)
                navigate("/")
            }}>
                Cancel editions
            </MyButton>
        </MyModal>
    );
}

export default CancelWarning;