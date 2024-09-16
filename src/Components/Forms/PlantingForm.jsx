import { Button, Form } from "antd";
import PROJECTS from "../Models/project";
import { CATEGORIE, TYPE_PIECE, POSITION } from "../Models/constante";
import { SelectField } from "../Fields/SelectField";
import { CharField } from "../Fields/InputField";
import ManagerForm from "./ManagerForm";
import { DataPlanting } from "../Models/InitDB";


export default function PlantingForm({ initialValue = null }) {
    return (
        <ManagerForm initialValue={initialValue} DBName={DataPlanting}>
            <SelectField
                name='project'
                options={PROJECTS}
                placeholder="Projets"
            />
            <CharField name="localite" placeholder="Localité" required={true} />
            <SelectField
                name='position_bien'
                options={POSITION}
                placeholder="Gauche ou droite"
            />
            <CharField name="nom" placeholder="nom et prénoms" required={false} />
            <SelectField
                name='type_piece'
                options={TYPE_PIECE}
                placeholder="Type de pièce"
                required={false}
            />
            <CharField name="numero_piece" placeholder="numero de piece" required={false} />
            <CharField name="contact" placeholder="" required={false} />
            <CharField name="nature_bien" placeholder="Nature de la culture" required={false} />
            <SelectField
                name='categorie'
                options={CATEGORIE}
                placeholder="proprietaire ou locataire"
                required={false}
            />
            <CharField name="photo_piece_code" placeholder="code photo de la piece de la personne imlpacter" required={false} />
            <CharField name="photo_code" placeholder="Photo du bien impacter" required={false} />
            {/* Bouton de soumission */}
            <Button type="primary" htmlType="submit">
                Soumettre
            </Button>
        </ManagerForm>
    )
}