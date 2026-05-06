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

  enviarMensagem(): void {
    const texto = `Olá, equipe SKIN ONE. Meu nome é ${this.nome}. Meu email é ${this.email}. ${this.mensagem}`;
    window.open(`https://wa.me/5521999682304?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  }
}