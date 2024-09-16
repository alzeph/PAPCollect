import { openDB } from 'idb';
import { useState, useEffect } from 'react';
import initDB from './InitDB';

// Hook pour gérer la base de données IndexedDB
export const useIndexedDB = (_DB_name) => {
    const [DB_name, setDB_name] = useState(_DB_name)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [drawer, setDrawer] = useState(false)


    // Fonction pour ajouter une donnée
    const addData = async (_data) => {
        setIsLoading(true)
        const db = await initDB();
        const tx = db.transaction(DB_name, 'readwrite');
        const store = tx.objectStore(DB_name);
        await store.add(_data);
        await tx.done;
        loadData(); // Recharge les données après ajout
    };

    // Fonction pour modifier une donnée
    const updateData = async (id, _data) => {
        setIsLoading(true)
        const db = await initDB();
        const tx = db.transaction(DB_name, 'readwrite');
        const store = tx.objectStore(DB_name);
        await store.put({ ..._data, id });
        await tx.done;
        loadData(); // Recharge les données après modification
    };

    // Fonction pour supprimer une donnée
    const deleteData = async (id) => {
        setIsLoading(true)
        const db = await initDB();
        const tx = db.transaction(DB_name, 'readwrite');
        const store = tx.objectStore(DB_name);
        await store.delete(id);
        await tx.done;
        loadData(); // Recharge les données après suppression
    };

    const clearTable = async () => {
        const db = await initDB(); // Assure-toi d'avoir une méthode pour initialiser la DB
        const tx = db.transaction(DB_name, 'readwrite'); // Remplace 'people' par le nom de ton store
        const store = tx.objectStore(DB_name); // Remplace également ici
        await store.clear(); // Vide la table
        await tx.done;
        loadData()
        console.log("Table vidée avec succès !");
      };
      

    // Fonction pour charger toutes les données
    const loadData = async () => {
        const db = await initDB();
        const tx = db.transaction(DB_name, 'readonly');
        const store = tx.objectStore(DB_name);
        const allData = await store.getAll();
        setData(allData); // Met à jour l'état avec les données récupérées
        setIsLoading(false)
    };

    useEffect(()=>{
        if (!drawer) {
            setIsLoading(true)
            loadData()
        }
    }, [drawer])

    // Charge les données au montage du composant
    useEffect(() => {
        loadData();
    }, []);
    return {isLoading, data,drawer, setDrawer, addData, updateData, deleteData, loadData, clearTable };
};
