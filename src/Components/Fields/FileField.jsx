import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Image,  message, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

export const ImageField = ({ name = "photo", label, initialValue }) => {
    const [fileList, setFileList] = useState([]);

    const handleChange = ({ fileList: newFileList }) => {
        // Allow only one file
        setFileList(newFileList.slice(-1));
    };


    const handleRemove = () => {
        setFileList([]);
    };

    const beforeUpload = (file) => {
        const isImage = file.type.startsWith('image/');
        return isImage ? true : Upload.LIST_IGNORE;
    };



    useEffect(() => {
        const initializeFileList = async () => {
            if (initialValue) {
                const response = await fetch(initialValue);
                const blob = await response.blob();
                const file = new File([blob], 'initial_image', { type: blob.type });
                const _photo = {
                    uid: '-1',
                    name: 'initial_image',
                    status: 'done',
                    url: initialValue,
                    originFileObj: file,
                }
                setFileList([_photo]);
            }
        };
        initializeFileList();
    }, [initialValue]);

    return (
        <Form.Item
            name={name}
            label={label}
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
        >
            <Upload
                listType="picture"
                fileList={fileList}
                onChange={handleChange}
                onRemove={handleRemove}
                beforeUpload={beforeUpload}
            >
                {fileList.length === 0 && (
                    <Button icon={<UploadOutlined />}>Select Image</Button>
                )}
            </Upload>
            {initialValue && fileList.length === 1 && <Image src={fileList[0].url} height={100} />}
        </Form.Item>
    );
};



const { Dragger } = Upload;

export const ShapeFileField = () => {
    const [fileList, setFileList] = useState([]);
  
    const handleFileChange = (info) => {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} fichier téléchargé avec succès.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} échec du téléchargement du fichier.`);
      }
      // Mettez à jour la liste des fichiers uniquement
      setFileList(info.fileList);
    };
  
    return (
      <Form.Item
                name="shapefiles"
                valuePropName="fileList" // Assurez-vous de capturer les fichiers ici
                getValueFromEvent={(e) => e.fileList} // Assurez-vous que la valeur retournée est correctement formatée
            >
               
           
      <Dragger
        name="shapefiles"
        multiple
        accept=".shp,.dbf,.shx" // Limite le type de fichiers aux shapefiles
        onChange={handleFileChange}
        beforeUpload={() => false} // Empêche le téléchargement automatique
        fileList={fileList} // Affiche la liste des fichiers sélectionnés
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Cliquez ou faites glisser les fichiers Shapefile(s) dans cette zone pour les sélectionner
        </p>
        <p className="ant-upload-hint">
          Prend en charge la sélection unique ou en masse des Shapefiles. Seuls les fichiers .shp, .dbf et .shx sont acceptés.
        </p>
      </Dragger>
      </Form.Item>
    );
  };


