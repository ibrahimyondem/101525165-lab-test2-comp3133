import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Character } from '../../models/character.model';
import { HarryPotterService } from '../../services/harry-potter.service';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.css',
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  loading = true;

  constructor(
    private harryPotterService: HarryPotterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.harryPotterService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  navigateToCharacter(id: string): void {
    this.router.navigate(['/character', id]);
  }

  getHouseClass(house: string): string {
    if (!house) {
      return 'house-empty';
    }

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
        return 'house-empty';
    }
  }
}
