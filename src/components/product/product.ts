import firebase from "../../utils/firebase";


export enum AttributesCard {
	'name' = 'name',
	'image' = 'image',
	'artist' = 'artist',
}

class Card extends HTMLElement {
	name?: string;
	image?: string;
	artist?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributesCard, null> = {
			name: null,
			image: null,
			artist: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributesCard, oldValue: string | any, newValue: string | any) {
		switch (propName) {

			default:
				this[propName] = newValue;
				break;
		}
	}

	connectedCallback() {
		this.render();	}

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <img src=${this.image}></p>
            <p>${this.name}</p>
            <p>${this.artist}</p>
            `;
			
		}
	}
}

customElements.define('my-card', Card);
export default Card;