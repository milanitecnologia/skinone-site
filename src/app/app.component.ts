import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { ComponentesSectionComponent } from './components/componentes-section/componentes-section.component';
import { FuncionalidadesComponent } from './components/funcionalidades/funcionalidades.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { CasesComponent } from './components/cases/cases.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SobreComponent,
    ObjetivosComponent,
    ComponentesSectionComponent,
    FuncionalidadesComponent,
    DepoimentosComponent,
    CasesComponent,
    HowItWorksComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-sobre></app-sobre>
    <app-objetivos></app-objetivos>
    <app-componentes-section></app-componentes-section>
    <app-funcionalidades></app-funcionalidades>
    <app-depoimentos></app-depoimentos>
    <app-cases></app-cases>
    <app-how-it-works></app-how-it-works>
    <app-footer></app-footer>
  `
})
export class AppComponent {}