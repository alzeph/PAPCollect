import { openDB } from 'idb';
import { useState, useEffect } from 'react';

export const DataBuilding = 'DataBuilding'
export const DataPlanting = 'DataPlanting'
export const DataFoncier = 'DataFoncier'

const initDB = async () => {
    return openDB('PAP_COLLECT_DB', 3, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(DataBuilding)) {
                const store = db.createObjectStore(DataBuilding, { keyPath: 'id', autoIncrement: true });
                // Ajout des champs correspondant à la classe DataBuilding
                store.createIndex('project', 'project', { unique: false });
                store.createIndex('localite', 'localite', { unique: false });
                store.createIndex('nom', 'nom', { unique: false });
                store.createIndex('type_piece', 'type_piece', { unique: false });
                store.createIndex('numero_piece', 'numero_piece', { unique: false });
                store.createIndex('contact', 'contact', { unique: false });
                store.createIndex('type_bien', 'type_bien', { unique: false });
                store.createIndex('position_bien', 'position_bien', { unique: false });
                store.createIndex('categorie', 'categorie', { unique: false });
                store.createIndex('photo_piece_code', 'photo_piece_code', { unique: false });
                store.createIndex('photo_code', 'photo_code', { unique: false });
            }

            if (!db.objectStoreNames.contains(DataPlanting)) {
                const store = db.createObjectStore(DataPlanting, { keyPath: 'id', autoIncrement: true });
                // Ajout des champs correspondant à la classe DataPlanting
                store.createIndex('project', 'project', { unique: false });
                store.createIndex('localite', 'localite', { unique: false });
                store.createIndex('nom', 'nom', { unique: false });
                store.createIndex('type_piece', 'type_piece', { unique: false });
                store.createIndex('numero_piece', 'numero_piece', { unique: false });
                store.createIndex('contact', 'contact', { unique: false });
                store.createIndex('nature_bien', 'nature_bien', { unique: false });
                store.createIndex('position_bien', 'position_bien', { unique: false });
                store.createIndex('categorie', 'categorie', { unique: false });
                store.createIndex('photo_piece_code', 'photo_piece_code', { unique: false });
                store.createIndex('photo_code', 'photo_code', { unique: false });
            }

            if (!db.objectStoreNames.contains(DataFoncier)) {
                const store = db.createObjectStore(DataFoncier, { keyPath: 'id', autoIncrement: true });
                // Ajout des champs correspondant à la classe DataFoncier
                store.createIndex('project', 'project', { unique: false });
                store.createIndex('localite', 'localite', { unique: false });
                store.createIndex('nom', 'nom', { unique: false });
                store.createIndex('type_piece', 'type_piece', { unique: false });
                store.createIndex('numero_piece', 'numero_piece', { unique: false });
                store.createIndex('contact', 'contact', { unique: false });
                store.createIndex('type_bien', 'type_bien', { unique: false });
                store.createIndex('position_bien', 'position_bien', { unique: false });
                store.createIndex('categorie', 'categorie', { unique: false });
                store.createIndex('photo_piece_code', 'photo_piece_code', { unique: false });
                store.createIndex('photo_code', 'photo_code', { unique: false });
            }

        },
    });
};

export default initDB