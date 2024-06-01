import  './screens/home'
import  './screens/addProduct'
import  './screens/modifyProduct'
import { addObserver, appState } from './store/index';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		switch (appState.screen) {
			case 'HOME':
				const home = this.ownerDocument.createElement('app-home');
				this.shadowRoot?.appendChild(home);
				break;

			case 'ADD':
				const add = this.ownerDocument.createElement('app-add');
				this.shadowRoot?.appendChild(add);
				break;

			case 'MODIFY':
				const modify = this.ownerDocument.createElement('app-modify');
				this.shadowRoot?.appendChild(modify);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);