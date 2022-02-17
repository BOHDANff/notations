import React, {useState} from 'react';
import Item from "./Item";
import {useSelector} from "react-redux";
import MyButton from "./UI/MyButton/MyButton";
import Create from "./Create";

function Main(props) {
    const list = useSelector(state => state.list.list)
    const [createVisible, setCreateVisible] = useState(false)
    return (
        <>
            <MyButton onClick={() => setCreateVisible(true)}>Add notation</MyButton>
            <Create visible={createVisible} setVisible={setCreateVisible}/>
            {list.length
                ? list.map((el) => (
                    <Item title={el.title} body={el.body} id={el.id} key={el.id}/>
                ))
                : <h1>Any notation has been created yet</h1>}
        </>
    );
}

export default Main;