import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'characters', pathMatch: 'full' },
	{
		path: 'characters',
		loadComponent: () =>
			import('./components/characterlist/characterlist.component').then(
				(m) => m.CharacterlistComponent
			),
	},
	{
		path: 'filter',
		loadComponent: () =>
			import('./components/characterfilter/characterfilter.component').then(
				(m) => m.CharacterfilterComponent
			),
	},
	{
		path: 'character/:id',
		loadComponent: () =>
			import('./components/characterdetails/characterdetails.component').then(
				(m) => m.CharacterdetailsComponent
			),
	},
];
