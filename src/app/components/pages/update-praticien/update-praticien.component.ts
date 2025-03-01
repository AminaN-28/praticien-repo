import { Component, Inject, OnInit } from '@angular/core';
import { Praticien } from '../../models/praticien';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../sharedModule/shared-module';

@Component({
  selector: 'app-update-praticien',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-praticien.component.html',
  styleUrl: './update-praticien.component.scss'
})
export class UpdatePraticienComponent implements OnInit{
  praticienForm !: FormGroup; // Formulaire pour modifier un praticien

  constructor(
    private fb: FormBuilder, // Pour créer des formulaires réactifs
    private dialogRef: MatDialogRef<UpdatePraticienComponent>, // Pour fermer la boîte de dialogue
    @Inject(MAT_DIALOG_DATA) public data: { praticien: Praticien } // Données passées au modal
  ) {
    // Créer le formulaire réactif
    this.praticienForm = this.fb.group({
      lastname : [data.praticien.lastname, Validators.required],
      firstname : [data.praticien.firstname, Validators.required],
      email : [data.praticien.email, [Validators.required, Validators.email]],
      phone : [data.praticien.phone, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      adresses : [data.praticien.adresses, [Validators.required]],
      specialities : [data.praticien.specialities, [Validators.required]]
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // Sauvegarder les modifications et fermer la boîte de dialogue
  save() {
    if (this.praticienForm.valid) {
      const updatedPraticien: Praticien = this.praticienForm.value;
      this.dialogRef.close(updatedPraticien); // Fermer la boîte de dialogue et retourner les données modifiées
    } else {
      console.error('Formulaire invalide');
    }
  }

  // Annuler les modifications et fermer la boîte de dialogue sans changement
  cancel(): void {
    this.dialogRef.close();
  }
}
