// src/app/components/hero/hero.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.css',
})
export class HeroComponent {}