import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Componente {
  id: string;
  icon: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

@Component({
  selector: 'app-componentes-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentes-section.component.html',
  styleUrl: './componentes-section.css',
})
export class ComponentesSectionComponent {
  componentes: Componente[] = [
    {
      id: 'app',
      icon: 'dashboard',
      title: 'APP + Dashboard',
      description:
        'Um sistema completo de gestão e controle de cuidados da pele, disponível para equipes de saúde em tempo real.',
      side: 'left',
    },
    {
      id: 'video',
      icon: 'play_circle',
      title: 'Conteúdo em Vídeo',
      description:
        'Acesso a vídeos educativos sobre o manuseio de prevenção e tratamento da úlcera de pressão.',
      side: 'left',
    },
    {
      id: 'ia',
      icon: 'psychology',
      title: 'Inteligência Artificial',
      description:
        'Médicos e enfermeiras contam com as mais avançadas técnicas de IA para controlar a incidência de lesão de pele em ambientes hospitalares.',
      side: 'left',
    },
    {
      id: 'admin',
      icon: 'bar_chart',
      title: 'Dashboard Administrativo',
      description:
        'A equipe responsável tem acesso a um painel administrativo para acompanhar todos os casos, indicadores e relatórios gerenciais.',
      side: 'right',
    },
    {
      id: 'tv',
      icon: 'tv',
      title: 'Painel TV',
      description:
        'Visualização em tempo real dos dados e alertas do setor diretamente nas TVs institucionais, facilitando o acompanhamento coletivo.',
      side: 'right',
    },
  ];

  leftItems = this.componentes.filter((c) => c.side === 'left');
  rightItems = this.componentes.filter((c) => c.side === 'right');
}