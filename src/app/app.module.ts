import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModuleTsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
