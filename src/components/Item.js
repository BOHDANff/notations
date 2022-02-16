import React, {useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";
import {useDispatch} from "react-redux";
import {deleteItem} from "../store/reducers/ListReducer";
import MyModal from "./UI/MyModal/MyModal";

const Item = (props) => {
    const dispatch = useDispatch()
    const [deleteVisible, setDeleteVisible] = useState(false)
    return (
        <div className="item">
            <div className="item__content">
                <strong className='item__content_text'>{props.title}</strong>
                <div className='item__content_text'>
                    {props.body}
                </div>
            </div>
            <div className="item__btns">
                <MyButton style={{width: "100%", marginBottom: "10px"}}>
                    Open
                </MyButton>
                <MyButton style={{width: "100%"}} onClick={() => setDeleteVisible(true)}>
                    Delete
                </MyButton>
                <MyModal visible={deleteVisible} setVisible={setDeleteVisible}>
                    <div>Are you realy want to delete this notation?</div>
                    <MyButton onClick={() => {
                        dispatch(deleteItem(props.id))
                        setDeleteVisible(false)
                    }}>Delete</MyButton>
                </MyModal>
            </div>
        </div>
    );
};

export default Item;