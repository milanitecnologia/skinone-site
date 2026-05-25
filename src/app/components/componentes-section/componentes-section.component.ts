// src/app/components/componentes-section/componentes-section.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componentes-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './componentes-section.component.html',
  styleUrl: './componentes-section.css',
})
export class ComponentesSectionComponent {}