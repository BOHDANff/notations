import React, {useState} from 'react';
import EditForm from "./Forms/EditForm";
import { useParams } from "react-router-dom";
import MyButton from "./UI/MyButton/MyButton";
import DeleteWarning from "./Warnings/DeleteWarning";
import CancelWarning from "./Warnings/CancelWarning";
import {useSelector} from "react-redux";

function Edit(props) {
    const [cancelWarning, setCancelWarning] = useState(false)
    const [deleteWarning, setDeleteWarning] = useState(false)
    const params = useParams()
    const notation = useSelector(state => state.list.list.find(item => item.id === params.id))
    return (
        <>
            <EditForm title={notation.title} body={notation.body} id={params.id}/>
            <CancelWarning
                visible={cancelWarning}
                setVisible={setCancelWarning}/>
            <MyButton style={{marginBottom: "20px"}}
                      onClick={() => setCancelWarning(true)}>
                Cancel editions
            </MyButton>
            <DeleteWarning
                visible={deleteWarning}
                setVisible={setDeleteWarning}
                id={params.id}/>
            <MyButton onClick={() => setDeleteWarning(true)}>
                Delete this notation
            </MyButton>
        </>
    );
}

export default Edit;