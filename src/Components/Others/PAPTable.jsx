import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space, Spin, Table, Tag, Modal } from 'antd';
import { useIndexedDB } from '../Models/useIndexDB';
import { DataBuilding, DataFoncier, DataPlanting } from '../Models/InitDB';
import { columnBuilding, columnFoncier, columnPlanting } from './tableColumn';
import BuildingForm from '../Forms/BuildingForm';
import FoncierForm from '../Forms/FoncierForm';
import PlantingForm from '../Forms/PlantingForm';


// Fonction pour convertir les données en CSV
const exportToCSV = (data, filename = 'data.csv') => {
  // Vérifie que les données ne sont pas vides
  if (!data || !data.length) {
    return;
  }

  // Récupère les clés des objets comme en-têtes du fichier CSV
  const headers = Object.keys(data[0]).join(',');

  // Construit les lignes du CSV avec les valeurs
  const csvData = data.map(row => {
    return Object.values(row).map(value => `"${value}"`).join(',');
  });

  // Ajoute les en-têtes au début du CSV
  const csvContent = [headers, ...csvData].join('\n');

  // Crée un lien de téléchargement et l'exécute
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



export default function PAPTable({ DBname }) {
  const { data, isLoading, drawer, setDrawer, clearTable } = useIndexedDB(DBname)
  const [columns, setColumns] = useState([])
  const [pageSize, setPageSize] = useState(3); // Valeur par défaut pour téléphone

  const [drawerTitle, setDrawerTitle] = useState(null)
  const [idObject, setIdObject] = useState(null)
  const [object, setObject] = useState(null)

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Vous allez supprimer les donenr de la base de donnée pour'.concat(DBname));
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setModalText('suppresion des données en cours ...');
    await clearTable();
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleExport = () => {
    exportToCSV(data, 'data_'.concat(DBname, '.csv'));
  };

  columnBuilding[1] = {
    title: 'PROJET',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => (
      <div style={{ whiteSpace: 'nowrap' }} onClick={() => {
        openDrawer(record)
      }}>
        {text.toUpperCase()}
      </div>
    ),
  }

  columnFoncier[1] = {
    title: 'PROJET',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => (
      <div style={{ whiteSpace: 'nowrap' }} onClick={() => {
        openDrawer(record)
      }}>
        {text.toUpperCase()}
      </div>
    ),
  }

  columnPlanting[1] = {
    title: 'PROJET',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => (
      <div style={{ whiteSpace: 'nowrap' }} onClick={() => {
        openDrawer(record)
      }}>
        {text.toUpperCase()}
      </div>
    ),
  }

  const openDrawer = (object = null) => {
    setDrawer(true)
    setObject(object)
  }

  const closeDrawer = () => {
    setDrawer(false)
    setObject(null)
  }

  useEffect(() => {
    if (DBname === DataBuilding) {
      setDrawerTitle("Donnée pour les batiments")
      setColumns(columnBuilding)
    } else if (DBname === DataFoncier) {
      setDrawerTitle("Donnée pour le foncier")
      setColumns(columnFoncier)
    } else {
      setDrawerTitle("Donnée pour les plantations")
      setColumns(columnPlanting)
    }
  }, [DBname])


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageSize(10); // Taille pour téléphone
      } else {
        setPageSize(20); // Taille pour tablette et plus grand
      }
    };
    handleResize(); // Vérifie la taille au chargement
    window.addEventListener('resize', handleResize); // Écoute les changements de taille de fenêtre
    return () => {
      window.removeEventListener('resize', handleResize); // Nettoie l'écouteur lors du démontage du composant
    };
  }, []);


  return (
    <React.Fragment>
      {isLoading ?
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin />
        </div> :
        <React.Fragment>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize }}
            scroll={{ x: 1300 }}
          />
          <Space wrap style={{padding: '1em'}}>
            <Button size="large" type='primary' onClick={() => openDrawer()} style={{ backgroundColor: '#0000ff' }}> Ajouter donnée</Button>
            <Button size='large' type="primary" onClick={handleExport} style={{ backgroundColor: '#00ff00' }}>Exporter en CSV</Button>
            <Button size='large' type="dash" onClick={showModal} style={{ backgroundColor: '#ff0000' }}>
              Supprimer les données
            </Button>
          </Space>
          <Modal
            title="Suppression de donnée"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
        </React.Fragment>
      }
      <Drawer
        onClose={closeDrawer}
        closable
        open={drawer}
        title={drawerTitle}
      >
        {object ?
          <React.Fragment>
            {DBname === DataBuilding ? <BuildingForm initialValue={object} /> : DBname === DataFoncier ? <FoncierForm initialValue={object} /> : DBname === DataPlanting ? <PlantingForm initialValue={object} /> : "pas de formualaire"}
          </React.Fragment>
          :
          <React.Fragment>
            {DBname === DataBuilding ? <BuildingForm /> : DBname === DataFoncier ? <FoncierForm /> : DBname === DataPlanting ? <PlantingForm /> : "pas de formualaire"}
          </React.Fragment>
        }
      </Drawer>

    </React.Fragment>
  );
}
