export interface Praticien {
    id?: string;         // Identifiant unique (optionnel, généré par la BD)
    firstname: string;   // Prénom du praticien
    lastname: string;    // Nom du praticien
    email: string;       // Email du praticien
    phone: string;       // Numéro de téléphone
    adresses: string[];     // Adresse du praticien
    specialities: string[]; // Liste des spécialités
  }
  