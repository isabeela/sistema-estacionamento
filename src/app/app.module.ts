import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HistoricoComponent } from './historico/historico.component';
import { VeiculoService } from './veiculo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'entrada', component: EntradaComponent },
      { path: 'saida', component: SaidaComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'historico', component: HistoricoComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    LoginComponent,
    EntradaComponent,
    SaidaComponent,
    ClienteComponent,
    HistoricoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [VeiculoService],
})
export class AppModule {}
