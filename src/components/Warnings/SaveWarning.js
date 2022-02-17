import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {editItem} from "../../store/reducers/ListReducer";
import MyModal from "../UI/MyModal/MyModal";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function SaveWarning(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            <div>Are you really want to save editions of this notation?</div>
            <MyButton onClick={() => {
                dispatch(editItem(props.editedNotation))
                props.setVisible(false)
                navigate("/")
            }}>
                Save editions
            </MyButton>
        </MyModal>
    );
}

export default SaveWarning;