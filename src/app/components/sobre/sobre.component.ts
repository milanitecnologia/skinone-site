// src/app/components/sobre/sobre.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.css',
})
export class SobreComponent {}