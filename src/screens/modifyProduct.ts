import { headerData } from "../utils/header";
import { addObserver } from "../store/index";
import { AttributesHeader } from "../components/header/header";

export class Modify extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

connectedCallback() {
		this.render();
	}

    render() {
		if (this.shadowRoot) {
			headerData.forEach((header: any) => {
				const myHeader = document.createElement('my-header');
				myHeader.setAttribute(AttributesHeader.tittle, header.tittlee);
                myHeader.setAttribute(AttributesHeader.home, header.home);
                myHeader.setAttribute(AttributesHeader.add, header.add);
				myHeader.setAttribute(AttributesHeader.modify, header.modify);
				this.shadowRoot?.appendChild(myHeader);
			})

            const titleHome = this.ownerDocument.createElement('h1');
			titleHome.textContent = 'MODIFY PRODUCT';
			this.shadowRoot?.appendChild(titleHome);

        }
	}
}
customElements.define('app-modify', Modify);