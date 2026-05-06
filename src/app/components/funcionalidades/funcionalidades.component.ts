import { Component } from '@angular/core';
import { Funcionalidade } from '../../models/funcionalidade';

@Component({
  selector: 'app-funcionalidades',
  standalone: true,
  imports: [],
  templateUrl: './funcionalidades.component.html',
})
export class FuncionalidadesComponent {
  funcionalidades: Funcionalidade[] = [
    { nome: 'Reconhecimento Facial', icone: 'face-scan-square-svgrepo-com.svg' },
    { nome: 'Alertas em Tempo Real', icone: 'alert-svgrepo-com.svg' },
    { nome: 'Documentação por Fotos', icone: 'folder-with-files-svgrepo-com.svg' },
    { nome: 'Tutorial', icone: 'square-academic-cap-2-svgrepo-com.svg' },
    { nome: 'Escala Braden', icone: 'diagnostic-svgrepo-com.svg' },
    { nome: 'Controle de Execução', icone: 'chat-alert-2-svgrepo-com.svg' },
    { nome: 'Estadiamento por IA', icone: 'stethoscope-svgrepo-com.svg' },
    { nome: 'Indicadores', icone: 'doc-text-svgrepo-com.svg' },
    { nome: 'Interface Interativa', icone: 'tablet-alt-1-svgrepo-com.svg' },
    { nome: 'Conduta Diária', icone: 'clock-svgrepo-com.svg' },
    { nome: 'Evolução da Lesão', icone: 'graphic-svgrepo-com.svg' },
    { nome: 'Cronologia da Lesão', icone: 'backlog-svgrepo-com.svg' },
    { nome: 'Gestão de Decúbito', icone: 'loading-arrows-svgrepo-com.svg' },
    { nome: 'Gestão de Curativo', icone: 'bandage-svgrepo-com.svg' },
    { nome: 'Gestão de Prevenção', icone: 'direction-svgrepo-com.svg' },
  ];
}