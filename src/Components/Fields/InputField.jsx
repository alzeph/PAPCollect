import { Button, DatePicker, Form, Image, Input, InputNumber, Space, Upload, Spin } from "antd";
import { useEffect, useState } from "react";

export const CharField = ({
    name = "name",
    initialValue,
    placeholder,
    isVisible = true,
    required = true,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        if (onChange) {
            onChange(value);
        }
    }, [value, onChange])

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
    };

    return (
        <Form.Item
            className={isVisible ? '' : 'd-none'}
            required={required}
            hasFeedback
            name={name}
            initialValue={initialValue}
            rules={[
                {
                    required:required,
                    message: 'Champ required',
                },
            ]}
        >
            <Input
                size="large"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                
                {...props}
            />
        </Form.Item>
    );
};

export const NumberField = ({ name, initialValue, message, placeholder, restField, ...props }) => {

    return (
        <Form.Item
            hasFeedback
            name={name}
            initialValue={initialValue}
            rules={[
                {
                    required: true,
                    message: message ? message : 'Champ requis',
                },
            ]}
            {...restField}
        >
            <InputNumber
                size="large"
                placeholder={placeholder}
                {...props}
                className="w-100"
            />
        </Form.Item>
    );
};

