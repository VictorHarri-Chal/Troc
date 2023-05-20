import React, { useState } from "react";
import {
  FormContainer,
  Fieldset,
  Legend,
  Label,
  Input,
  Button,
  AddIngredientButton,
  RemoveIngredientButton,
} from "./style";

const IngredientFormComp = () => {
  const [pseudo, setPseudo] = useState("");
  const [nomProduit, setNomProduit] = useState("");
  const [photoProduit, setPhotoProduit] = useState(null);
  const [ingredients, setIngredients] = useState([
    { id: 1, label: "", origine: "" },
  ]);
  const [dateFabrication, setDateFabrication] = useState("");
  const [methodeConservation, setMethodeConservation] = useState("");
  const [dateConsommationLimite, setDateConsommationLimite] = useState("");
  const [nombreUnites, setNombreUnites] = useState(0);

  const handleIngredientChange = (id, field, value) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        return {
          ...ingredient,
          [field]: value,
        };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    const newIngredientId = ingredients.length + 1;
    setIngredients([
      ...ingredients,
      { id: newIngredientId, label: "", origine: "" },
    ]);
  };

  const handleRemoveIngredient = () => {
    if (ingredients.length > 1) {
      const updatedIngredients = [...ingredients];
      updatedIngredients.pop();
      setIngredients(updatedIngredients);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faire quelque chose avec les données du formulaire
    console.log({
      pseudo,
      nomProduit,
      photoProduit,
      ingredients,
      dateFabrication,
      methodeConservation,
      dateConsommationLimite,
      nombreUnites,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Pseudo: ##PSEUDO DE L'UTILISATEUR##</Label>
      <br />
      <Label>
        Nom du produit:
        <Input
          type="text"
          value={nomProduit}
          onChange={(e) => setNomProduit(e.target.value)}
        />
      </Label>

      <Label>
        Photo du produit:
        <Input
          type="file"
          onChange={(e) => setPhotoProduit(e.target.files[0])}
        />
      </Label>

      <Fieldset>
        <Legend>Ingrédients</Legend>
        {ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <Label>
              Label ingrédient {ingredient.id}:
              <Input
                type="text"
                value={ingredient.label}
                onChange={(e) =>
                  handleIngredientChange(ingredient.id, "label", e.target.value)
                }
              />
            </Label>

            <Label>
              Origine ingrédient {ingredient.id}:
              <Input
                type="text"
                value={ingredient.origine}
                onChange={(e) =>
                  handleIngredientChange(
                    ingredient.id,
                    "origine",
                    e.target.value
                  )
                }
              />
            </Label>
          </div>
        ))}
        <AddIngredientButton type="button" onClick={handleAddIngredient}>
          Ajouter
        </AddIngredientButton>
        <RemoveIngredientButton type="button" onClick={handleRemoveIngredient}>
          Supprimer
        </RemoveIngredientButton>
      </Fieldset>

      <Label>
        Date de fabrication:
        <Input
          type="date"
          value={dateFabrication}
          onChange={(e) => setDateFabrication(e.target.value)}
        />
      </Label>

      <Label>
        Méthode de conservation:
        <Input
          type="text"
          value={methodeConservation}
          onChange={(e) => setMethodeConservation(e.target.value)}
        />
      </Label>

      <Label>
        Date de consommation limite:
        <Input
          type="date"
          value={dateConsommationLimite}
          onChange={(e) => setDateConsommationLimite(e.target.value)}
        />
      </Label>

      <Label>
        Nombre d'unités:
        <Input
          type="number"
          value={nombreUnites}
          onChange={(e) => setNombreUnites(parseInt(e.target.value))}
        />
      </Label>

      <Button type="submit">Soumettre</Button>
    </FormContainer>
  );
};

export default IngredientFormComp;
