import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../sharedModule/shared-module';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PraticienService } from '../../services/praticien.service';

@Component({
  selector: 'app-create-praticien-form',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FormsModule, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-praticien-form.component.html',
  styleUrls: ['./create-praticien-form.component.scss']
})
export class CreatePraticienFormComponent implements OnInit {
  praticienForm!: FormGroup;
  specialities: string[] = [];

  constructor(private fb: FormBuilder, private router:Router, private praticienService: PraticienService) {
    this.praticienForm = this.fb.group({
      
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        adresses: this.fb.array([
          this.fb.control('', Validators.required), // Address Bureau
          this.fb.control('', Validators.required), // Adresse Officielle
          this.fb.control('', Validators.required)  // Adresse Domicile
        ]),
        specialities: [[]]
     
    });

  }

  ngOnInit() {
    
  }

  get adresses(): FormArray {
    return this.praticienForm.get('adresses') as FormArray;
  }

  addAddress() {
    this.adresses.push(this.fb.control('', Validators.required));
  }

  removeAddress(index: number) {
    this.adresses.removeAt(index);
  }


  createAddress(type: string, address: string = ''): FormGroup {
    return this.fb.group({
      type: [type, Validators.required],  // Type of address (office, official, home)
      address: [address, Validators.required]  // Default value for address
    });
  }
  

  readonly templateKeywords = signal(['Tapez une spécialité']);
  announcer = inject(LiveAnnouncer);

  removeTemplateKeyword(keyword: string) {
    this.templateKeywords.update((keywords: string[]) => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }
      keywords.splice(index, 1);
      this.announcer.announce(`removed ${keyword} from template form`);
      return [...keywords];
    });
  }

  addTemplateKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.templateKeywords.update((keywords: any) => [...keywords, value]);
      this.specialities.push(value); // Add to local specialites array
      this.praticienForm.patchValue({ specialities: [...this.specialities] });
      this.announcer.announce(`added ${value} to template form`);
    }
    event.chipInput!.clear();
  }

  onSubmit(): void {


    if (this.praticienForm.valid) {
      const specialities = this.praticienForm.value.specialities;
      const addressses = this.praticienForm.value.adresses;

      console.log('Praticien addresse enregistré:', addressses);
      console.log('Praticien specialites enregistré:', specialities);
        const praticienData = {
              ...this.praticienForm.value,
              adresses: this.adresses.value, 
              specialities: this.specialities 
            };
            console.log(praticienData)
            this.praticienService.addPraticien(praticienData).subscribe({
              next: (response: any) => {
                console.log('Réponse du serveur:', response);
                this.goToList();
                // alert('Praticien enregistré avec succès !');
              },
              error: (error: any) => {
                console.error('Erreur lors de l\'enregistrement:', error);
                alert('Échec de l\'enregistrement du praticien.');
              }});

          // console.log('Praticien enregistré:', praticienData);
    }

  }

  goToList(){
    this.router.navigateByUrl('list-praticiens')
  }

}


