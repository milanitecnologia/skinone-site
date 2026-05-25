// src/app/components/funcionalidades/funcionalidades.component.ts
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-funcionalidades',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './funcionalidades.component.html',
})
export class FuncionalidadesComponent {
  funcionalidades = [
    { chave: 'funcionalidade.reconhecimento_facial', icone: 'face-scan-square-svgrepo-com.svg' },
    { chave: 'funcionalidade.alertas_tempo_real', icone: 'alert-svgrepo-com.svg' },
    { chave: 'funcionalidade.documentacao_fotos', icone: 'folder-with-files-svgrepo-com.svg' },
    { chave: 'funcionalidade.tutorial', icone: 'square-academic-cap-2-svgrepo-com.svg' },
    { chave: 'funcionalidade.escala_braden', icone: 'diagnostic-svgrepo-com.svg' },
    { chave: 'funcionalidade.controle_execucao', icone: 'chat-alert-2-svgrepo-com.svg' },
    { chave: 'funcionalidade.estadiamento_ia', icone: 'stethoscope-svgrepo-com.svg' },
    { chave: 'funcionalidade.indicadores', icone: 'doc-text-svgrepo-com.svg' },
    { chave: 'funcionalidade.interface_interativa', icone: 'tablet-alt-1-svgrepo-com.svg' },
    { chave: 'funcionalidade.conduta_diaria', icone: 'clock-svgrepo-com.svg' },
    { chave: 'funcionalidade.evolucao_lesao', icone: 'graphic-svgrepo-com.svg' },
    { chave: 'funcionalidade.cronologia_lesao', icone: 'backlog-svgrepo-com.svg' },
    { chave: 'funcionalidade.gestao_decubito', icone: 'loading-arrows-svgrepo-com.svg' },
    { chave: 'funcionalidade.gestao_curativo', icone: 'bandage-svgrepo-com.svg' },
    { chave: 'funcionalidade.gestao_prevencao', icone: 'direction-svgrepo-com.svg' },
  ];
}