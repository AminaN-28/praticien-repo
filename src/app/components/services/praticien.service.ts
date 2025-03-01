import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, shareReplay, tap, throwError } from 'rxjs';
import { Praticien } from '../models/praticien';
const PRATICIEN_API = 'http://localhost:8080/api/praticiens'

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

     
 
  private subject = new BehaviorSubject<Praticien | null>(null);
  praticien$: Observable<Praticien | null> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPraticien();
  }


  private loadPraticien() {
    return this.http.get<Praticien[]>(`${PRATICIEN_API}/all`).pipe(
      map((response) => response),
      catchError(() => of([])), // Renvoie un tableau vide en cas d'erreur
      tap((praticiens) => this.subject.next(praticiens[0] || null)), // Met à jour le BehaviorSubject avec le premier praticien
      shareReplay()
    ).subscribe();
  }

  
  getAllPraticiens(): Observable<Praticien[]> {
    return this.http.get<Praticien[]>(`${PRATICIEN_API}/all`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des praticiens:', error);
        return throwError(() => error);
      })
    );
  }

 
  getPraticienById(id: string): Observable<Praticien> {
    return this.http.get<Praticien>(`${PRATICIEN_API}/${id}`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération du praticien:', error);
        return throwError(() => error);
      })
    );
  }

  
  addPraticien(praticien: Praticien): Observable<Praticien> {
    return this.http.post<Praticien>(`${PRATICIEN_API}/create`, praticien).pipe(
      tap((newPraticien) => this.subject.next(newPraticien)),
      catchError((error) => {
        console.error('Erreur lors de l’ajout du praticien:', error);
        return throwError(() => error);
      })
    );
  }

  
  // updatePraticien(id: string, praticien: Praticien): Observable<Praticien> {
  //   return this.http.patch<Praticien>(`${PRATICIEN_API}/update/${id}`, praticien).pipe(
  //     tap((updatedPraticien) => this.subject.next(updatedPraticien)),
  //     catchError((error) => {
  //       console.error('Erreur lors de la mise à jour du praticien:', error);
  //       return throwError(() => error);
  //     })
  //   );
  // }

   /** Mettre à jour un praticien */
   updatePraticien(praticien: Praticien): Observable<Praticien> {
    return this.http.put<Praticien>(`${PRATICIEN_API}/${praticien.id}`, praticien);
    // Ou utilisez PATCH si vous ne voulez modifier que certains champs : this.http.patch<Praticien>(...)
  }

  deletePraticien(praticien: Praticien): Observable<Praticien> {
    return this.http.delete<Praticien>(`${PRATICIEN_API}/delete/${praticien.id}`).pipe(
      tap(() => this.subject.next(null)),
      catchError((error) => {
        console.error('Erreur lors de la suppression du praticien:', error);
        return throwError(() => error);
      })
    );
  }
}

