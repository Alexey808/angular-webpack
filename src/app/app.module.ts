import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './angular-material.module';

import { TestComponent } from './main/test.component';

// import "@angular/material/prebuilt-themes/indigo-pink.css";
// import '../assets/styles';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
