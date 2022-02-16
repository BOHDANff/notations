import React, {useState} from 'react';
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import MyButton from "./UI/MyButton/MyButton";

function Main(props) {
    const list = useSelector(state => state.list.list)
    const dispatch = useDispatch()
    const [visible, isVisible] = useState(false)
    return (
        <div className="main">
            Main
            <MyButton>Add notation</MyButton>
            {list.map((el, i) => (
                <Item title={el.title} body={el.body} id={el.id} key={i}/>
            ))}
        </div>
    );
}

export default Main;