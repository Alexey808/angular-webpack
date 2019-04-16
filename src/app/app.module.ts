import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {
    MaterialMainModule,
    MaterialAnimationModule,
    MaterialComponentsModule
} from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

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
        MaterialMainModule,
        MaterialAnimationModule,
        MaterialComponentsModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
