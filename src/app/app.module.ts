import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table'  
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule ,Routes, CanActivate} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableQueryComponent } from './table-query/table-query.component';
import { DialogQueryComponent } from './dialog-query/dialog-query.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ExecutionPlanComponent } from './execution-plan/execution-plan.component';
import { RaportDialogComponent } from './raport-dialog/raport-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    TableQueryComponent,
    DialogQueryComponent,
    ExecutionPlanComponent,
    RaportDialogComponent
  ],
  imports: [
    MatPaginatorModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
