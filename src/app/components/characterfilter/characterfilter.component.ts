import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Character } from '../../models/character.model';
import { HarryPotterService } from '../../services/harry-potter.service';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.css',
})
export class CharacterfilterComponent {
  characters: Character[] = [];
  readonly houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  constructor(
    private harryPotterService: HarryPotterService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  onHouseChange(house: string): void {
    this.harryPotterService.getCharactersByHouse(house).subscribe((data) => {
      this.characters = data;
      this.cdr.detectChanges();
    });
  }

  getHouseClass(house: string): string {
    switch (house.toLowerCase()) {
      case 'gryffindor':
        return 'house-gryffindor';
      case 'slytherin':
        return 'house-slytherin';
      case 'hufflepuff':
        return 'house-hufflepuff';
      case 'ravenclaw':
        return 'house-ravenclaw';
      default:
        return '';
    }
  }

  navigateToCharacter(id: string): void {
    this.router.navigate(['/character', id]);
  }
}
