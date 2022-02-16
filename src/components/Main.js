import React, {useState} from 'react';
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import MyButton from "./UI/MyButton/MyButton";
import Create from "./Create";

function Main(props) {
    const list = useSelector(state => state.list.list)
    const dispatch = useDispatch()
    const [createVisible, setCreateVisible] = useState(false)
    return (
        <div className="main">
            <MyButton onClick={() => setCreateVisible(true)}>Add notation</MyButton>
            <Create visible={createVisible} setVisible={setCreateVisible}/>
            {list.map((el, i) => (
                <Item title={el.title} body={el.body} id={el.id} key={i}/>
            ))}
        </div>
    );
}

export default Main;