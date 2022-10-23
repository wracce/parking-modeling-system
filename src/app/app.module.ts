import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';



import { NavbarComponent } from './view/navbar/navbar.component';
import { DesignerComponent } from './view/designer/designer.component';
import { AuthComponent } from './view/auth/auth.component';
import { AboutComponent } from './view/about/about.component';
import { NfComponent } from './view/nf/nf.component';
import { HomeComponent } from './view/home/home.component';
import { ParkDesignerComponent } from './view/designer/park-designer/park-designer.component';
import { DesignerService } from './view/designer/designer.service';
import { ParkObjectsComponent } from './view/designer/park-objects/park-objects.component';
import {MatTreeModule} from '@angular/material/tree';
import { ParkSetupComponent } from './view/designer/park-setup/park-setup.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DesignerComponent,
    AuthComponent,
    AboutComponent,
    NfComponent,
    HomeComponent,
    ParkDesignerComponent,
    ParkObjectsComponent,
    ParkSetupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    DragDropModule,
    MatTreeModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule
    

  ],
  providers: [DesignerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
