// src/app/components/objetivos/objetivos.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-objetivos',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './objetivos.component.html',
  styleUrl: './objetivos.css',
})
export class ObjetivosComponent {}