import React from 'react';
import MyButton from "./UI/MyButton/MyButton";
import {useDispatch} from "react-redux";
import {deleteItem} from "../store/reducers/ListReducer";

const Item = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="item">
            <div className="item__content">
                <strong className='item__content_text'>{props.id}. {props.title}</strong>
                <div className='item__content_text'>
                    {props.body}
                </div>
            </div>
            <div className="item__btns">
                <MyButton >
                    Открыть
                </MyButton>
                <MyButton onClick={() => dispatch(deleteItem(props.id))}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default Item;