import { headerData } from "../utils/header";
import { addObserver } from "../store/index";
import { AttributesHeader } from "../components/header/header";
import { record } from "../types/record";
import firebase from "../utils/firebase";
import { AttributesCard } from "../components/product/product";
import Card from "../components/product/product";

const formData: Omit<record, 'id'> = {
	name: '',
	image: '',
	artist: '',
};

export class Add extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

connectedCallback() {
		this.render();
	}

    changeName(e: any) {
		formData.name = e.target.value;
	}

    changeImage(e: any) {
		formData.image = e.target.value;
	}

    changeArtist(e: any) {
		formData.artist = e.target.value;
	}

    submitForm(){
        console.log(formData);
        
        firebase.addRecord(formData);

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
			});

            const titleHome = this.ownerDocument.createElement('h1');
			titleHome.textContent = 'ADD PRODUCT';
			this.shadowRoot?.appendChild(titleHome);

			const enterAlbumName = this.ownerDocument.createElement('input');
			enterAlbumName.placeholder = 'Enter Album Name';
			enterAlbumName.classList.add('image');
			enterAlbumName.addEventListener('change', this.changeName);
			this.shadowRoot.appendChild(enterAlbumName);

            const enterImage = this.ownerDocument.createElement('input');
			enterImage.placeholder = 'Enter Cover';
			enterImage.classList.add('image');
			enterImage.addEventListener('change', this.changeImage);
			this.shadowRoot.appendChild(enterImage);

            const enterArtist = this.ownerDocument.createElement('input');
			enterArtist.placeholder = 'Enter Artist Name';
			enterArtist.classList.add('image');
			enterArtist.addEventListener('change', this.changeArtist);
			this.shadowRoot.appendChild(enterArtist);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Share';
			save.classList.add('save');
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);
        }}
}
customElements.define('app-add', Add);