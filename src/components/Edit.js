import React, {useState} from 'react';
import EditForm from "./Forms/EditForm";
import { useParams } from "react-router-dom";
import MyButton from "./UI/MyButton/MyButton";
import DeleteWarning from "./Warnings/DeleteWarning";
import CancelWarning from "./Warnings/CancelWarning";

function Edit(props) {
    const [cancelWarning, setCancelWarning] = useState(false)
    const [deleteWarning, setDeleteWarning] = useState(false)
    const params = useParams()
    return (
        <>
            <EditForm/>
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