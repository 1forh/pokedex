import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdInputModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		HttpModule,
		FormsModule,
		MdButtonModule,
		MdInputModule,
		MdCardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
