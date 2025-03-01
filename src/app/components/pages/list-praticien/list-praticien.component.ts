import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../sharedModule/shared-module';
import { PraticienService } from '../../services/praticien.service';
import { Praticien } from '../../models/praticien';
import { MatDialog } from '@angular/material/dialog'; // Import de MatDialog
import { UpdatePraticienComponent } from '../update-praticien/update-praticien.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-praticien',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './list-praticien.component.html',
  styleUrls: ['./list-praticien.component.scss']
})
export class ListPraticienComponent implements OnInit {
  praticiens: Praticien[] = []; // Liste des praticiens
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'phone', 'specialities','adresses', 'actions'];

  constructor(
    private praticienService: PraticienService,
    private location : Location,
    private dialog: MatDialog // Injection de MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPraticiens(); // Charger la liste des praticiens au démarrage
  }

  /** 🔄 Charger la liste des praticiens */
  loadPraticiens(): void {
    this.praticienService.getAllPraticiens().subscribe({
      next: (data) => {
        console.log(data)
        this.praticiens = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des praticiens:', err);
      }
    });
  }

  /** ✏️ Modifier un praticien */
  editPraticien(praticien: Praticien): void {
    console.log('Modifier:', praticien);
  
    const dialogRef = this.dialog.open(UpdatePraticienComponent, {
      width: '500px',
      data: { praticien }
    });

    dialogRef.afterClosed().subscribe((result: Praticien | undefined) => {
      if (result) {
        console.log('Praticien modifié:', result);
        this.praticienService.updatePraticien(result).subscribe({
          next: () => {
            console.log('Praticien mis à jour avec succès');
            this.loadPraticiens(); 
          },
          error: (err) => {
            console.error('Erreur lors de la mise à jour du praticien:', err);
          }})
      }
    });
  }

  /** 🗑️ Supprimer un praticien */
  deletePraticien(praticien: Praticien): void {
    if (confirm('Voulez-vous vraiment supprimer ce praticien ?')) {
     
      this.praticienService.deletePraticien(praticien).subscribe({
        next: () => {
          console.log('Praticien supprimé');
          this.loadPraticiens(); 
        },
        error: (err) => {
          console.error('Erreur lors de la suppression:', err);
        }
      });
    }
  }

  goBack(){
    this.location.back()
  }
}
