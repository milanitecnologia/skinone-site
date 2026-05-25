// src/app/components/cases/cases.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cases.component.html',
  styleUrl: './cases.css',
})
export class CasesComponent {}