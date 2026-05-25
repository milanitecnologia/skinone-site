// src/app/components/how-it-works/how-it-works.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorksComponent {}