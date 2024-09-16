import React, { useEffect, useState } from "react";
import Base from "./Base";
import PAPTable from "../Others/PAPTable";
import { Button, Drawer, Space, Tabs, Typography } from "antd";
import { useIndexedDB } from "../Models/useIndexDB";
import { DataBuilding, DataFoncier, DataPlanting } from '../Models/InitDB';
import BuildingForm from "../Forms/BuildingForm";
import FoncierForm from "../Forms/FoncierForm";
import PlantingForm from "../Forms/PlantingForm";

export default function Index() {
    const { Title } = Typography;
    const [DBname, setDBname] = useState(null)
    const [drawer, setDrawer ] = useState(false)
    const [drawerTitle, setDrawerTitle] = useState(null)

    const openDrawer = (_DBname) => {
        setDBname(_DBname)
        setDrawer(true)
    }

    const closeDrawer = () => {
        setDBname(null)
        setDrawer(false)
    }

    const itemTab = [
        {
            key: 'building',
            label: 'Donnée Batiment',
            children: <PAPTable DBname={DataBuilding} />,
        },
        {
            key: 'foncier',
            label: 'Donnée Foncier',
            children: <PAPTable DBname={DataFoncier} />,
        },
        {
            key: 'planting',
            label: 'Donnée Champs',
            children: <PAPTable DBname={DataPlanting} />,
        },
    ]

    useEffect(() => {
        if (DBname === DataBuilding) {
            setDrawerTitle(" Donnée pour les batiments",)
        } else if (DBname === DataFoncier) {
            setDrawerTitle(" Donnée pour le foncier")
        } else {
            setDrawerTitle('" Donnée pour les plantations",')
        }
    }, [DBname])

    return (
        <Base>
            <Title>Bienvenue dans PAPCollect</Title>
            <Tabs items={itemTab} />
            <Drawer
                onClose={closeDrawer}
                closable
                open={drawer}
                title={drawerTitle}
            >
                {DBname === DataBuilding ? <BuildingForm /> : DBname === DataFoncier ? <FoncierForm />: DBname === DataPlanting ? <PlantingForm /> : "pas de formualaire"  }
            </Drawer>
        </Base>
    )
}
