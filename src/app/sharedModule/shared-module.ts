import { AsyncPipe, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MatNativeDateModule,
  MatPseudoCheckboxModule,
} from '@angular/material/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonToggleModule,
      AsyncPipe,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatBadgeModule,
      MatTableModule,
      MatPseudoCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatChipsModule,
      MatButtonModule,
      MatDialogModule,
      ReactiveFormsModule,
      HttpClientModule ,// 📌 Export pour être disponible partout
      MatDialogModule
    ],
    exports: [
      CommonModule,
      RouterOutlet,
      RouterModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonToggleModule,
      AsyncPipe,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatBadgeModule,
      MatTableModule,
      MatPseudoCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatChipsModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      HttpClientModule,
      MatDialogModule
    ],
  })
export class SharedModule {
}
