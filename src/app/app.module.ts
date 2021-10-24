import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EntradaComponent } from './entrada/entrada.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'entrada', component: EntradaComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    EntradaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
