import React, {useState} from 'react';
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput/MyInput";
import {MyFormButton} from "../UI/MyFormButton/MyFormButton";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import SaveWarning from "../Warnings/SaveWarning";

function EditForm(props) {
    const schema = yup.object().shape({
        title: yup
            .string()
            .required("This is a required field"),
        body: yup
            .string()
            .required("This is a required field"),
    });
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const [saveWarning, setSaveWarning] = useState(false)
    const [titleValue, setTitleValue] = useState(props.title)
    const [bodyValue, setBodyValue] = useState(props.body)
    const onSubmit = (editedNotat) => {
        reset()
        setSaveWarning(true)
    }
    return (
        <>
            <SaveWarning visible={saveWarning}
                         setVisible={setSaveWarning}
                         editedNotation={{title: titleValue, body: bodyValue, id: props.id}}/>
            <h1>Edit this notation</h1>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register('title')}
                    id={'title'}
                    type={'text'}
                    label={'Label of notation'}
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                    value={titleValue}
                    onChange={e => setTitleValue(e.target.value)}
                />
                <MyInput
                    {...register('body')}
                    id="body"
                    type="text"
                    label="Text of notation"
                    multiline
                    rows={4}
                    error={!!errors.body}
                    helperText={errors?.body?.message}
                    value={bodyValue}
                    onChange={e => setBodyValue(e.target.value)}
                />
                <MyFormButton style={{margin: "20px 0 20px"}}>Save editions</MyFormButton>
            </MyForm>
        </>
    );
}

export default EditForm;