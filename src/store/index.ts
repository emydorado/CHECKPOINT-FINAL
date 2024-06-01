import { reducer } from './reducer';
import { navigate } from './actions';
import { Screens } from '../types/navigation';

export let emptyState = {
	screen: 'HOME',
};

export let appState = emptyState;

let observers: any[] = [];

const notifyObservers = () => observers.forEach((o: any) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};