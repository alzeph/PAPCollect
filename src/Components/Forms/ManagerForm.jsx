import { Form } from "antd";
import { useIndexedDB } from "../Models/useIndexDB";
import { useEffect, useState } from "react";

export default function ManagerForm({ children, initialValue = null, DBName }) {
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);
    const { addData, updateData, isLoading } = useIndexedDB(DBName)
    const onFinish = async (_values) => {
        if (initialValue) {
            // mettre les données a jour dans IndexedBD
            await updateData(initialValue.id, _values)
            console.log('Données enregistrées dans IndexedDB:', _values);
        } else {
            // Enregistre les données dans IndexedDB
            await addData(_values);
            console.log('Données enregistrées dans IndexedDB:', _values);
        }
    };

    useEffect(()=>{
        if(!isLoading){
            form.resetFields()
        }
    }, [isLoading])

    return (
        <Form form={form} initialValues={initialValue} onFinish={onFinish}>
            {children}
        </Form>
            
    )
}