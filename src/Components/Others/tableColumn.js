import { Tag } from "antd";

export const columnBuilding = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'PROJET',
        dataIndex: 'project',
        key: 'project',
        render: (text) => (
            <div style={{ whiteSpace: 'nowrap' }}>
                {text.toUpperCase()}
            </div>
        ),
    },
    {
        title: 'localite',
        dataIndex: 'localite',
        key: 'localite',
    },
    {
        title: 'position',
        dataIndex: 'position_bien',
        key: 'position',
        render: (value, data) => {
            let color = value == 'gauche' ? 'red' : 'blue';
            return (
                <Tag color={color}>
                    {value ? value.toUpperCase() : value}
                </Tag>
            );
        }
    },
    {
        title: 'nom',
        dataIndex: 'nom',
        key: 'nom',
    },

    {
        title: 'type_piece',
        dataIndex: 'type_piece',
        key: 'type_piece',
    },
    {
        title: 'numero_piece',
        dataIndex: 'numero_piece',
        key: 'numero_piece',
    },
    {
        title: 'contact',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'type_bien',
        dataIndex: 'type_bien',
        key: 'type_bien',
    },
    {
        title: 'categorie',
        dataIndex: 'categorie',
        key: 'categorie',
    },
    {
        title: 'photo_piece_code',
        dataIndex: 'photo_piece_code',
        key: 'photo_piece_code',
    },
    {
        title: 'photo_code',
        dataIndex: 'photo_code',
        key: 'photo_code',
    },

];


export const columnPlanting = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'PROJET',
        dataIndex: 'project',
        key: 'project',
        render: (text) => (
            <div style={{ whiteSpace: 'nowrap' }}>
                {text.toUpperCase()}
            </div>
        ),
    },
    {
        title: 'localite',
        dataIndex: 'localite',
        key: 'localite',
    },
    {
        title: 'position',
        dataIndex: 'position_bien',
        key: 'position',
        render: (value, data) => {
            let color = value == 'gauche' ? 'red' : 'blue';
            return (
                <Tag color={color}>
                    {value ? value.toUpperCase() : value}
                </Tag>
            );
        }
    },
    {
        title: 'nom',
        dataIndex: 'nom',
        key: 'nom',
    },

    {
        title: 'nature_bien',
        dataIndex: 'nature_bien',
        key: 'nature_bien',
    },
    {
        title: 'numero_piece',
        dataIndex: 'numero_piece',
        key: 'numero_piece',
    },
    {
        title: 'contact',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'type_bien',
        dataIndex: 'type_bien',
        key: 'type_bien',
    },
    {
        title: 'categorie',
        dataIndex: 'categorie',
        key: 'categorie',
    },
    {
        title: 'photo_piece_code',
        dataIndex: 'photo_piece_code',
        key: 'photo_piece_code',
    },
    {
        title: 'photo_code',
        dataIndex: 'photo_code',
        key: 'photo_code',
    },

];


export const columnFoncier = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'PROJET',
        dataIndex: 'project',
        key: 'project',
        render: (text) => (
            <div style={{ whiteSpace: 'nowrap' }}>
                {text.toUpperCase()}
            </div>
        ),
    },
    {
        title: 'localite',
        dataIndex: 'localite',
        key: 'localite',
    },
    {
        title: 'position',
        dataIndex: 'position_bien',
        key: 'position',
        render: (value, data) => {
            let color = value == 'gauche' ? 'red' : 'blue';
            return (
                <Tag color={color}>
                    {value ? value.toUpperCase() : value}
                </Tag>
            );
        }
    },
    {
        title: 'nom',
        dataIndex: 'nom',
        key: 'nom',
    },

    {
        title: 'type_piece',
        dataIndex: 'type_piece',
        key: 'type_piece',
    },
    {
        title: 'numero_piece',
        dataIndex: 'numero_piece',
        key: 'numero_piece',
    },
    {
        title: 'contact',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'type_bien',
        dataIndex: 'type_bien',
        key: 'type_bien',
    },
    {
        title: 'categorie',
        dataIndex: 'categorie',
        key: 'categorie',
    },
    {
        title: 'photo_piece_code',
        dataIndex: 'photo_piece_code',
        key: 'photo_piece_code',
    },
    {
        title: 'photo_code',
        dataIndex: 'photo_code',
        key: 'photo_code',
    },

];