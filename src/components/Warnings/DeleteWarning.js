import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {deleteItem} from "../../store/reducers/ListReducer";
import MyModal from "../UI/MyModal/MyModal";
import {useDispatch} from "react-redux";

function DeleteWarning(props) {
    const dispatch = useDispatch()
    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            <div>Are you really want to delete this notation?</div>
            <MyButton onClick={() => {
                dispatch(deleteItem(props.id))
                props.setVisible(false)
            }}>Delete</MyButton>
        </MyModal>
    );
}

export default DeleteWarning;