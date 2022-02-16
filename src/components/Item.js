import React from 'react';
import MyButton from "./UI/MyButton/MyButton";
import {useDispatch} from "react-redux";
import {deleteItem} from "../store/reducers/ListReducer";

const Item = (props) => {
    const dispatch = useDispatch()
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
                <MyButton style={{width: "100%"}} onClick={() => dispatch(deleteItem(props.id))}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default Item;