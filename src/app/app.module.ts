import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { InviteComponent } from './project/invite/invite.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    ProjectModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
