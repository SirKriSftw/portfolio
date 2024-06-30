import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandLineComponent } from './components/command-line/command-line.component';
import { FormsModule } from '@angular/forms';
import { HelpCmdComponent } from './components/help-cmd/help-cmd.component';
import { CommandsCmdComponent } from './components/commands-cmd/commands-cmd.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandLineComponent,
    HelpCmdComponent,
    CommandsCmdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
