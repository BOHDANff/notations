import React from 'react';
import EditForm from "./Forms/EditForm";
import { useParams } from "react-router-dom";
import MyButton from "./UI/MyButton/MyButton";

function Edit(props) {
    return (
        <>
            <EditForm/>
            <MyButton style={{marginBottom: "20px"}}>Cancel editions</MyButton>
            <MyButton>Delete this notation</MyButton>
        </>
    );
}

export default Edit;