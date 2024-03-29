import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {deleteItem} from "../../store/reducers/ListReducer";
import MyModal from "../UI/MyModal/MyModal";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function DeleteWarning(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            <div>Are you really want to delete this notation?</div>
            <MyButton onClick={() => {
                dispatch(deleteItem(props.id))
                props.setVisible(false)
                navigate("/")
            }}>
                Delete
            </MyButton>
        </MyModal>
    );
}

export default DeleteWarning;