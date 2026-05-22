import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  nome = '';
  email = '';
  mensagem = '';
  erroFormulario = '';

  enviarMensagem(): void {
    const nome = this.nome.trim();
    const email = this.email.trim();
    const mensagem = this.mensagem.trim();

    if (!nome || !email || !mensagem) {
      this.erroFormulario = 'Preencha nome, email e mensagem antes de enviar.';
      return;
    }

    this.erroFormulario = '';
    const texto = `Olá, equipe Skin One. Meu nome é ${nome}. Meu email é ${email}. ${mensagem}`;
    window.open(
      `https://wa.me/5521992097277?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener',
    );
  }
}
