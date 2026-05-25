// src/app/components/depoimentos/depoimentos.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.css',
})
export class DepoimentosComponent {}