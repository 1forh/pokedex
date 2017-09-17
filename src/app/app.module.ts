import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdInputModule, MdCardModule, MdListModule, MdTabsModule, MdChipsModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PokeballLoaderComponent } from './components/pokeball-loader/pokeball-loader.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

@NgModule({
	declarations: [
		AppComponent,
		PokeballLoaderComponent,
		PokemonListComponent,
		PokemonDetailsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		HttpModule,
		FormsModule,
		MdButtonModule,
		MdInputModule,
		MdCardModule,
		MdListModule,
		MdTabsModule,
		MdChipsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
