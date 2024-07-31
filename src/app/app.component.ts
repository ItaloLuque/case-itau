import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { PasswordRequest } from './model/passwordRequest';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService] // Adicione o serviço como provedor
})
export class AppComponent {
  title = 'case-itau-front';
  password: string = '';
  validationMessage: string = '';

  constructor(private service: ApiService) {}

  validatePassword() {
    const request: PasswordRequest = { password: this.password };
    this.service.validatePassword(request).subscribe(
      data => {
        this.validationMessage = data ? 'Senha válida!' : 'Senha inválida!';
      },
      error => {
        console.error(error);
        this.validationMessage = 'Ocorreu um erro durante a validação da senha!';
      }
    );
  }
}
