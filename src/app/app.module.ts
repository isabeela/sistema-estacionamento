import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    TesteComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
