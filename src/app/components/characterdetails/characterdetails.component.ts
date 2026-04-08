import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../models/character.model';
import { HarryPotterService } from '../../services/harry-potter.service';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css',
})
export class CharacterdetailsComponent implements OnInit {
  selectedCharacter: Character | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private harryPotterService: HarryPotterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.harryPotterService.getCharacterById(id).subscribe((data) => {
        this.selectedCharacter = data[0] ?? null;
        this.cdr.detectChanges();
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/characters']);
  }
}
