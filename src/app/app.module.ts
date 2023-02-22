import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// PrimeNg Modules
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {TableModule} from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {FieldsetModule} from 'primeng/fieldset';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
