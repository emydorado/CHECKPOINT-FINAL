import { dispatch } from '../../store/index';
import { navigate } from '../../store/actions';

export enum AttributesHeader {
	'tittle' = 'tittle',
	'home' = 'home',
    'add' = 'add',
	'modify' = 'modify',
}

class header extends HTMLElement {
	tittle?: string;
	home?: string;
    add?: string;
	modify?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributesHeader, null> = {
			tittle: null,
			add: null,
            modify: null,
			home: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributesHeader, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {

			default:
				this[propName] = newValue;
				break;
		}
	}

	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
    <section class="header">
		<section class="logo">
        <h1>${this.tittle}</h1>
		</section>
        <section class="menu">
        <button class="home">${this.home}</button>
        <button class="add">${this.add}</button>
        <button class="modify">${this.modify}</button>
        </section>
    </section>`;
		}

		const homeLogo = this.shadowRoot?.querySelector('.logo');
		homeLogo?.addEventListener('click', () => {
			dispatch(navigate('HOME'));
		});

        const add = this.shadowRoot?.querySelector('.add');
		add?.addEventListener('click', () => {
            console.log('holi');
			dispatch(navigate('ADD'));
		});

        const modify = this.shadowRoot?.querySelector('.modify');
		modify?.addEventListener('click', () => {
			dispatch(navigate('MODIFY'));
		});
    
        const home = this.shadowRoot?.querySelector('.home');
		home?.addEventListener('click', () => {
			dispatch(navigate('HOME'));
		});

	}
}

export default header;
customElements.define('my-header', header);