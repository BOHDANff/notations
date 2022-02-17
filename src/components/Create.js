import React from 'react';
import MyModal from "./UI/MyModal/MyModal";
import CreateForm from "./Forms/CreateForm";

function Create(props) {

    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            <CreateForm setVisible={props.setVisible}/>
        </MyModal>
    );
}

export default Create;