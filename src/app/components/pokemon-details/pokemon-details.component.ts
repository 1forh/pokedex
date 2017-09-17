import { Component, OnChanges, Input } from '@angular/core';

@Component({
	selector: 'app-pokemon-details',
	templateUrl: './pokemon-details.component.html',
	styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnChanges {
	@Input()
	pokemon: any;

	radarChartData: any;
	radarChartLabels: any[];

	constructor() {
		this.radarChartLabels = [];
		this.radarChartData = [
			{ data: [], label: 'Base stats' }
		];
	}

	ngOnChanges(changes) {
		if (changes && changes.pokemon && changes.pokemon.currentValue) {
			let stats = changes.pokemon.currentValue.stats;
			for (let stat of stats) {
				this.radarChartLabels.push(stat.stat.name.toUpperCase().replace(/-/, ' '));
				this.radarChartData[0].data.push(stat.base_stat);
			}
		}
 	}

}
