import { Form, Select } from "antd";
import { useEffect, useState } from "react";


export const SelectField = ({
  url = null,
  options = [],
  label,
  message: validationMessage,
  required = true,
  name,
  disabled = false,
  render,
  restField,
  ...SelectProps
}) => {
  const [dataOptions, setDataOptions] = useState(options);
  
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Form.Item
      hasFeedback
      name={name}
      rules={[
        {
          required,
          message:
            validationMessage || "Veuillez obligatoirement faire un choix",
        },
      ]}
      {...restField}
    >
      <Select
        showSearch
        size="large"
        disabled={disabled}
        placeholder={label}
        optionFilterProp="children"
        filterOption={filterOption}
        options={dataOptions}
        style={{ minWidth: "140px" }}
        {...SelectProps}
      />
    </Form.Item>
  );
};
