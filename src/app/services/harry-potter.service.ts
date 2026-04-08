import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class HarryPotterService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('https://hp-api.onrender.com/api/characters');
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`https://hp-api.onrender.com/api/characters/house/${house}`);
  }

  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`);
  }
}
