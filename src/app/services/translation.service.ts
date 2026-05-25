// src/app/services/translation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<Language>('pt');
  currentLang$ = this.currentLangSubject.asObservable();

  private translations: Record<Language, Record<string, string>> = {
    pt: {
      // Navbar
      'nav.sobre': 'Sobre o SKINONE',
      'nav.objetivos': 'Objetivos',
      'nav.componentes': 'Componentes',
      'nav.funcionalidades': 'Funcionalidades',
      'nav.depoimentos': 'Depoimentos',
      'nav.cases': 'Cases',
      'nav.como-funciona': 'Como Funciona',
      'nav.fale-conosco': 'Fale conosco',
      'lang.selector.pt': 'PT-BR',
      'lang.selector.en': 'EN',

      // Hero
      'hero.badge': 'Segurança do paciente',
      'hero.titulo': 'Controle inteligente para prevenir lesões de pele no hospital',
      'hero.descricao': 'O SKINONE integra avaliação, registro fotográfico, alertas e acompanhamento clínico em um fluxo único para reduzir riscos e dar visibilidade à equipe assistencial.',
      'hero.cta1': 'Conheça a Plataforma',
      'hero.cta2': 'Como funciona',
      'hero.risco.classificado': 'Risco classificado',
      'hero.risco.texto': 'Avaliação padronizada para orientar cuidado preventivo.',
      'hero.evolucao.documentada': 'Evolução documentada',
      'hero.evolucao.texto': 'Fotos e registros centralizados desde a internação.',
      'hero.alertas.tempo': 'Alertas em tempo real',
      'hero.alertas.texto': 'Acompanhamento ativo para a equipe de enfermagem.',
      'hero.braden.titulo': 'BRADEN',
      'hero.braden.texto': 'Classificação de risco',
      'hero.visao.titulo': '360°',
      'hero.visao.texto': 'Visão do cuidado à pele',
      'hero.integracao.titulo': 'HIS',
      'hero.integracao.texto': 'Integração ao hospital',

      // Sobre
      'sobre.badge': 'Sobre o SKINONE',
      'sobre.titulo': 'Do risco à evolução: todo o cuidado com a pele em um só lugar.',
      'sobre.descricao': 'O SKINONE organiza a prevenção, o acompanhamento e o tratamento de lesões de pele durante toda a internação do paciente.',
      'sobre.citacao': 'A equipe enxerga o risco, registra a evolução e acompanha pendências com mais clareza, sem depender de informações espalhadas.',
      'sobre.classifica.risco.titulo': 'Classifica o risco',
      'sobre.classifica.risco.texto': 'Avaliação baseada na Escala BRADEN para orientar ações preventivas.',
      'sobre.classifica.lesao.titulo': 'Classifica a lesão',
      'sobre.classifica.lesao.texto': 'Organiza o registro clínico para acompanhar a evolução do caso.',
      'sobre.padroniza.titulo': 'Padroniza condutas',
      'sobre.padroniza.texto': 'Apoia o acompanhamento conforme protocolos de segurança do paciente.',
      'sobre.monitora.titulo': 'Monitora continuamente',
      'sobre.monitora.texto': 'Alertas, relatórios e indicadores mantêm a equipe atualizada.',
      'sobre.entrada.titulo': 'Entrada',
      'sobre.entrada.texto': 'Paciente é registrado e avaliado no início do cuidado.',
      'sobre.prevencao.titulo': 'Prevenção',
      'sobre.prevencao.texto': 'Ações preventivas são orientadas e documentadas.',
      'sobre.acompanhamento.titulo': 'Acompanhamento',
      'sobre.acompanhamento.texto': 'Alertas e registros mantêm a equipe atualizada.',
      'sobre.alta.titulo': 'Alta',
      'sobre.alta.texto': 'Histórico consolidado para consulta, relatórios e indicadores.',

      // Objetivos
      'objetivos.badge': 'Objetivos do SKINONE',
      'objetivos.titulo': 'Mais controle, menos retrabalho e decisões melhor documentadas.',
      'objetivos.descricao': 'A plataforma ajuda o hospital a padronizar o cuidado, registrar evidências e acompanhar ações críticas com mais agilidade.',
      'objetivos.central.titulo': 'Objetivo central',
      'objetivos.central.texto': 'Dar visibilidade ao cuidado com a pele, do primeiro registro à evolução do paciente.',
      'objetivos.registro.titulo': 'Registro estruturado',
      'objetivos.gestao.titulo': 'Gestão do cuidado',
      'objetivos.documentar.titulo': 'Documentar o processo',
      'objetivos.documentar.texto': 'Registrar condutas e evidências para dar mais segurança à instituição.',
      'objetivos.fotos.titulo': 'Acompanhar por fotos',
      'objetivos.fotos.texto': 'Facilitar a leitura da evolução das lesões ao longo do tratamento.',
      'objetivos.retrabalho.titulo': 'Reduzir retrabalho',
      'objetivos.retrabalho.texto': 'Integrar informações ao fluxo hospitalar e evitar registros duplicados.',
      'objetivos.alertar.titulo': 'Alertar a equipe',
      'objetivos.alertar.texto': 'Sinalizar cuidados necessários para apoiar a rotina assistencial.',

      // Componentes
      'componentes.titulo': 'Componentes do',
      'componentes.subtitulo': 'Um ecossistema completo para monitoramento e prevenção de lesões de pele.',
      'componentes.video.titulo': 'Conteúdo em Vídeo',
      'componentes.video.descricao': 'Acesso a vídeos educativos sobre o manuseio de prevenção e tratamento da úlcera de pressão.',
      'componentes.ia.titulo': 'Inteligência Artificial',
      'componentes.ia.descricao': 'Médicos e enfermeiras contam com as mais avançadas técnicas de IA para controlar a incidência de lesão de pele em ambientes hospitalares.',
      'componentes.admin.titulo': 'Dashboard Administrativo',
      'componentes.admin.descricao': 'A equipe responsável tem acesso a um painel administrativo para acompanhar todos os casos, indicadores e relatórios gerenciais.',
      'componentes.tv.titulo': 'Painel TV',
      'componentes.tv.descricao': 'Visualização em tempo real dos dados e alertas do setor diretamente nas TVs institucionais, facilitando o acompanhamento coletivo.',

      // Funcionalidades
      'funcionalidades.badge': 'Funcionalidades',
      'funcionalidades.titulo': 'Recursos que organizam o cuidado de ponta a ponta',
      // Nomes das funcionalidades (usados no array)
      'funcionalidade.reconhecimento_facial': 'Reconhecimento Facial',
      'funcionalidade.alertas_tempo_real': 'Alertas em Tempo Real',
      'funcionalidade.documentacao_fotos': 'Documentação por Fotos',
      'funcionalidade.tutorial': 'Tutorial',
      'funcionalidade.escala_braden': 'Escala Braden',
      'funcionalidade.controle_execucao': 'Controle de Execução',
      'funcionalidade.estadiamento_ia': 'Estadiamento por IA',
      'funcionalidade.indicadores': 'Indicadores',
      'funcionalidade.interface_interativa': 'Interface Interativa',
      'funcionalidade.conduta_diaria': 'Conduta Diária',
      'funcionalidade.evolucao_lesao': 'Evolução da Lesão',
      'funcionalidade.cronologia_lesao': 'Cronologia da Lesão',
      'funcionalidade.gestao_decubito': 'Gestão de Decúbito',
      'funcionalidade.gestao_curativo': 'Gestão de Curativo',
      'funcionalidade.gestao_prevencao': 'Gestão de Prevenção',

      // Depoimentos
      'depoimentos.badge': 'Depoimento',
      'depoimentos.texto': '"É um produto muito prático e inovador no mercado hospitalar, desenvolvido exclusivamente para otimizar o acompanhamento dos cuidados da pele, na prevenção e evolução de todos os tipos de lesão, mantendo as particularidades da instituição, com estatísticas e gráficos em tempo real, além de gerar relatórios dos indicadores da ANVISA."',
      'depoimentos.autor': 'Elza Coutinho',
      'depoimentos.cargo': 'Enfermeira Intensivista',
      'depoimentos.caption': 'Cuidado monitorado',
      'depoimentos.caption_texto': 'Tecnologia aplicada à rotina assistencial.',

      // Cases
      'cases.badge': 'Cases',
      'cases.titulo': 'Instituições que confiam no SKINONE',
      'cases.subtitulo': 'Hospitais e grupos de saúde utilizam o SKINONE para dar mais visibilidade, rastreabilidade e controle ao cuidado com a pele.',
      'cases.hospital_andarai': 'Hospital do Andaraí',
      'cases.tipo_andarai': 'Instituição hospitalar',
      'cases.hospital_hcfmusp': 'Hospital das Clínicas FMUSP',
      'cases.tipo_hcfmusp': 'Complexo hospitalar',
      'cases.hospital_sf': 'Hospital São Francisco',
      'cases.tipo_sf': 'Instituição hospitalar',
      'cases.grupo_valsa': 'Grupo Valsa',
      'cases.tipo_valsa': 'Grupo de saúde',
      'cases.instituto_dante': 'Instituto Dante Pazzanese de Cardiologia',
      'cases.tipo_dante': 'Instituto de cardiologia',
      'cases.rodape': 'Presença em ambientes hospitalares que exigem rastreabilidade, padronização de condutas e acompanhamento contínuo.',

      // How It Works
      'howitworks.badge': 'Como funciona',
      'howitworks.titulo': 'Um fluxo contínuo para acompanhar o cuidado com a pele',
      'howitworks.passo1.titulo': 'Instalação no ambiente do hospital',
      'howitworks.passo1.descricao': 'O SKINONE roda em servidor local instalado no hospital ou em ambiente de cloud.',
      'howitworks.passo1.label': 'Infraestrutura',
      'howitworks.passo2.titulo': 'Avaliação e registro inicial',
      'howitworks.passo2.descricao': 'Na internação, a enfermagem usa a aplicação para avaliar, classificar o risco (BRADEN) e documentar com fotos.',
      'howitworks.passo2.label': 'Internação',
      'howitworks.passo3.titulo': 'Alertas para ações assistenciais',
      'howitworks.passo3.descricao': 'O acompanhamento das ações a serem realizadas é feito através de alertas nos tablets e Painel Informativo (CCTV).',
      'howitworks.passo3.label': 'Acompanhamento',
      'howitworks.passo4.titulo': 'Execução, notificação e registro no HIS',
      'howitworks.passo4.descricao': 'Ao executar uma nova ação, registra-se os materiais e fotos, o médico é notificado e tudo é integrado ao HIS automaticamente.',
      'howitworks.passo4.label': 'Integração',

      // Footer
      'footer.badge': 'Fale conosco',
      'footer.titulo': 'Vamos conversar sobre o cuidado com a pele no seu hospital',
      'footer.descricao': 'Entre em contato para conhecer a plataforma, tirar dúvidas ou agendar uma conversa com a equipe SKINONE.',
      'footer.whatsapp': 'Whatsapp',
      'footer.email_contato': 'E-mail',
      'footer.endereco': 'Endereço',
      'footer.form_titulo': 'Mensagem rápida',
      'footer.form_subtitulo': 'Conte um pouco sobre sua instituição',
      'footer.form_nome': 'Nome',
      'footer.form_email': 'Email',
      'footer.form_mensagem': 'Mensagem',
      'footer.form_aviso': 'O envio abre o WhatsApp com sua mensagem preenchida.',
      'footer.form_enviar': 'Enviar mensagem',
      'footer.erro_formulario': 'Preencha nome, email e mensagem antes de enviar.'
    },
    en: {
      'nav.sobre': 'About SKINONE',
      'nav.objetivos': 'Objectives',
      'nav.componentes': 'Components',
      'nav.funcionalidades': 'Features',
      'nav.depoimentos': 'Testimonials',
      'nav.cases': 'Cases',
      'nav.como-funciona': 'How It Works',
      'nav.fale-conosco': 'Contact us',
      'lang.selector.pt': 'PT-BR',
      'lang.selector.en': 'EN',

      'hero.badge': 'Patient Safety',
      'hero.titulo': 'Intelligent control to prevent skin lesions in the hospital',
      'hero.descricao': 'SKINONE integrates assessment, photographic recording, alerts and clinical follow-up in a single flow to reduce risks and give visibility to the care team.',
      'hero.cta1': 'Explore the Platform',
      'hero.cta2': 'How it works',
      'hero.risco.classificado': 'Classified risk',
      'hero.risco.texto': 'Standardized assessment to guide preventive care.',
      'hero.evolucao.documentada': 'Documented evolution',
      'hero.evolucao.texto': 'Photos and centralized records from admission.',
      'hero.alertas.tempo': 'Real-time alerts',
      'hero.alertas.texto': 'Active monitoring for the nursing team.',
      'hero.braden.titulo': 'BRADEN',
      'hero.braden.texto': 'Risk classification',
      'hero.visao.titulo': '360°',
      'hero.visao.texto': 'Comprehensive skin care view',
      'hero.integracao.titulo': 'HIS',
      'hero.integracao.texto': 'Hospital integration',

      'sobre.badge': 'About SKINONE',
      'sobre.titulo': 'From risk to outcome: all skin care in one place.',
      'sobre.descricao': 'SKINONE organizes prevention, follow-up and treatment of skin lesions throughout the patient\'s hospitalization.',
      'sobre.citacao': 'The team sees the risk, records the evolution and tracks pending tasks with more clarity, without relying on scattered information.',
      'sobre.classifica.risco.titulo': 'Classifies risk',
      'sobre.classifica.risco.texto': 'Assessment based on the BRADEN scale to guide preventive actions.',
      'sobre.classifica.lesao.titulo': 'Classifies the lesion',
      'sobre.classifica.lesao.texto': 'Organizes clinical records to track case evolution.',
      'sobre.padroniza.titulo': 'Standardizes conducts',
      'sobre.padroniza.texto': 'Supports follow-up according to patient safety protocols.',
      'sobre.monitora.titulo': 'Continuous monitoring',
      'sobre.monitora.texto': 'Alerts, reports and indicators keep the team updated.',
      'sobre.entrada.titulo': 'Admission',
      'sobre.entrada.texto': 'Patient is registered and assessed at the beginning of care.',
      'sobre.prevencao.titulo': 'Prevention',
      'sobre.prevencao.texto': 'Preventive actions are guided and documented.',
      'sobre.acompanhamento.titulo': 'Follow-up',
      'sobre.acompanhamento.texto': 'Alerts and records keep the team updated.',
      'sobre.alta.titulo': 'Discharge',
      'sobre.alta.texto': 'Consolidated history for consultation, reports and indicators.',

      'objetivos.badge': 'SKINONE Objectives',
      'objetivos.titulo': 'More control, less rework and better documented decisions.',
      'objetivos.descricao': 'The platform helps the hospital standardize care, record evidence and track critical actions more quickly.',
      'objetivos.central.titulo': 'Central objective',
      'objetivos.central.texto': 'Give visibility to skin care, from the first record to the patient\'s evolution.',
      'objetivos.registro.titulo': 'Structured record',
      'objetivos.gestao.titulo': 'Care management',
      'objetivos.documentar.titulo': 'Document the process',
      'objetivos.documentar.texto': 'Record conducts and evidence to give more security to the institution.',
      'objetivos.fotos.titulo': 'Track with photos',
      'objetivos.fotos.texto': 'Facilitate reading the evolution of lesions over treatment.',
      'objetivos.retrabalho.titulo': 'Reduce rework',
      'objetivos.retrabalho.texto': 'Integrate information into the hospital flow and avoid duplicate records.',
      'objetivos.alertar.titulo': 'Alert the team',
      'objetivos.alertar.texto': 'Signal necessary care to support the care routine.',

      'componentes.titulo': 'Components of',
      'componentes.subtitulo': 'A complete ecosystem for monitoring and preventing skin lesions.',
      'componentes.video.titulo': 'Video Content',
      'componentes.video.descricao': 'Access to educational videos on handling pressure ulcer prevention and treatment.',
      'componentes.ia.titulo': 'Artificial Intelligence',
      'componentes.ia.descricao': 'Doctors and nurses count on the most advanced AI techniques to control the incidence of skin lesions in hospital environments.',
      'componentes.admin.titulo': 'Administrative Dashboard',
      'componentes.admin.descricao': 'The responsible team has access to an administrative panel to follow all cases, indicators and management reports.',
      'componentes.tv.titulo': 'TV Panel',
      'componentes.tv.descricao': 'Real-time visualization of sector data and alerts directly on institutional TVs, facilitating collective monitoring.',

      'funcionalidades.badge': 'Features',
      'funcionalidades.titulo': 'Resources that organize end-to-end care',
      'funcionalidade.reconhecimento_facial': 'Facial Recognition',
      'funcionalidade.alertas_tempo_real': 'Real-time Alerts',
      'funcionalidade.documentacao_fotos': 'Photo Documentation',
      'funcionalidade.tutorial': 'Tutorial',
      'funcionalidade.escala_braden': 'Braden Scale',
      'funcionalidade.controle_execucao': 'Execution Control',
      'funcionalidade.estadiamento_ia': 'AI Staging',
      'funcionalidade.indicadores': 'Indicators',
      'funcionalidade.interface_interativa': 'Interactive Interface',
      'funcionalidade.conduta_diaria': 'Daily Conduct',
      'funcionalidade.evolucao_lesao': 'Lesion Evolution',
      'funcionalidade.cronologia_lesao': 'Lesion Chronology',
      'funcionalidade.gestao_decubito': 'Decubitus Management',
      'funcionalidade.gestao_curativo': 'Dressing Management',
      'funcionalidade.gestao_prevencao': 'Prevention Management',

      'depoimentos.badge': 'Testimonial',
      'depoimentos.texto': '"It is a very practical and innovative product in the hospital market, developed exclusively to optimize the monitoring of skin care, prevention and evolution of all types of lesions, maintaining the institution\'s particularities, with real-time statistics and graphs, in addition to generating ANVISA indicator reports."',
      'depoimentos.autor': 'Elza Coutinho',
      'depoimentos.cargo': 'Intensive Care Nurse',
      'depoimentos.caption': 'Monitored care',
      'depoimentos.caption_texto': 'Technology applied to the care routine.',

      'cases.badge': 'Cases',
      'cases.titulo': 'Institutions that trust SKINONE',
      'cases.subtitulo': 'Hospitals and health groups use SKINONE to give more visibility, traceability and control to skin care.',
      'cases.hospital_andarai': 'Hospital do Andaraí',
      'cases.tipo_andarai': 'Hospital institution',
      'cases.hospital_hcfmusp': 'Hospital das Clínicas FMUSP',
      'cases.tipo_hcfmusp': 'Hospital complex',
      'cases.hospital_sf': 'Hospital São Francisco',
      'cases.tipo_sf': 'Hospital institution',
      'cases.grupo_valsa': 'Grupo Valsa',
      'cases.tipo_valsa': 'Health group',
      'cases.instituto_dante': 'Instituto Dante Pazzanese de Cardiologia',
      'cases.tipo_dante': 'Cardiology institute',
      'cases.rodape': 'Presence in hospital environments that demand traceability, standardization of conducts and continuous monitoring.',

      'howitworks.badge': 'How It Works',
      'howitworks.titulo': 'A continuous flow to track skin care',
      'howitworks.passo1.titulo': 'Installation in the hospital environment',
      'howitworks.passo1.descricao': 'SKINONE runs on a local server installed in the hospital or in a cloud environment.',
      'howitworks.passo1.label': 'Infrastructure',
      'howitworks.passo2.titulo': 'Assessment and initial registration',
      'howitworks.passo2.descricao': 'At admission, nursing uses the application to assess, classify risk (BRADEN) and document with photos.',
      'howitworks.passo2.label': 'Admission',
      'howitworks.passo3.titulo': 'Alerts for care actions',
      'howitworks.passo3.descricao': 'Follow-up of actions to be performed is done through alerts on tablets and the Information Panel (CCTV).',
      'howitworks.passo3.label': 'Follow-up',
      'howitworks.passo4.titulo': 'Execution, notification and HIS registration',
      'howitworks.passo4.descricao': 'When executing a new action, materials and photos are recorded, the doctor is notified and everything is automatically integrated into the HIS.',
      'howitworks.passo4.label': 'Integration',

      'footer.badge': 'Contact us',
      'footer.titulo': 'Let\'s talk about skin care in your hospital',
      'footer.descricao': 'Get in touch to learn about the platform, ask questions or schedule a conversation with the SKINONE team.',
      'footer.whatsapp': 'Whatsapp',
      'footer.email_contato': 'E-mail',
      'footer.endereco': 'Address',
      'footer.form_titulo': 'Quick message',
      'footer.form_subtitulo': 'Tell us a little about your institution',
      'footer.form_nome': 'Name',
      'footer.form_email': 'Email',
      'footer.form_mensagem': 'Message',
      'footer.form_aviso': 'Sending opens WhatsApp with your pre-filled message.',
      'footer.form_enviar': 'Send message',
      'footer.erro_formulario': 'Fill in name, email and message before sending.'
    }
  };

  constructor() {
    const savedLang = localStorage.getItem('skinone_lang') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      this.setLanguage(savedLang);
    }
  }

  getCurrentLang(): Language {
    return this.currentLangSubject.value;
  }

  setLanguage(lang: Language): void {
    this.currentLangSubject.next(lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('skinone_lang', lang);
  }

  translate(key: string): string {
    const lang = this.getCurrentLang();
    return this.translations[lang][key] || key;
  }
}