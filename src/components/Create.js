import React from 'react';
import MyModal from "./UI/MyModal/MyModal";
import {Form} from "./UI/Form";
import {Input} from "./UI/Input";
import {FormButton} from "./UI/FormButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {createItem} from "../store/reducers/ListReducer";

function Create(props) {
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
    const onSubmit =  (notat) => {
        dispatch(createItem({...notat, id: Date.now()}))
        reset()
        props.setVisible(false)
    }
    const dispatch = useDispatch()
    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('title')}
                    id={'title'}
                    type={'text'}
                    label={'Label of notation'}
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                />
                <Input
                    {...register('body')}
                    id="body"
                    type="text"
                    label="Text of notation"
                    multiline
                    rows={4}
                    error={!!errors.body}
                    helperText={errors?.body?.message}
                />
                <FormButton>Create</FormButton>
            </Form>
        </MyModal>
    );
}

export default Create;