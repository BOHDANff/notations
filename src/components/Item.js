import React, {useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";
import DeleteWarning from "./Warnings/DeleteWarning";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
    const [deleteVisible, setDeleteVisible] = useState(false)
    let navigate = useNavigate()
    return (
        <div className="item">
            <div className="item__content">
                <strong className='item__content_text'>{props.title}</strong>
                <div className='item__content_text'>
                    {props.body}
                </div>
            </div>
            <div className="item__btns">
                <MyButton style={{width: "100%", marginBottom: "10px"}} onClick={() => navigate(`/edit/${props.id}`)}>
                    Edit
                </MyButton>
                <MyButton style={{width: "100%"}} onClick={() => setDeleteVisible(true)}>
                    Delete
                </MyButton>
                <DeleteWarning visible={deleteVisible} setVisible={setDeleteVisible} id={props.id}/>
            </div>
        </div>
    );
};

export default Item;