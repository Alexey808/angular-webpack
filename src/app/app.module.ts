import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent
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
