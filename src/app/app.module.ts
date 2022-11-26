import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/materials/materials.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
//import { authInterceptorProviders } from './shared/services/jwt.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmationPopUpComponent } from './shared/components/confirmation-pop-up/confirmation-pop-up.component';
import { CustomPopUpComponent } from './shared/components/custom-pop-up/custom-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPopUpComponent,
    ConfirmationPopUpComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    MatDialogModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    //authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
