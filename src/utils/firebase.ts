import { initializeApp } from 'firebase/app';
import { record } from '../types/record';
import { getFirestore, updateDoc, onSnapshot } from 'firebase/firestore';
import { collection, addDoc, getDocs, doc, setDoc, getDoc, where, query } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAS_sGDbQYUNZAoF-ZqZcpjWtLQtBmDvsw',
	authDomain: 'proyecto-dca-1b72d.firebaseapp.com',
	projectId: 'proyecto-dca-1b72d',
	storageBucket: 'proyecto-dca-1b72d.appspot.com',
	messagingSenderId: '272880735350',
	appId: '1:272880735350:web:f0dbcec16d1c028a4afb57',
	measurementId: 'G-L13XCXHTB8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addRecord = async (record: Omit<record, 'id'>) => {
	try {
		const where = collection(db, 'records');
		await addDoc(where, record);
		console.log('se añadió con éxito');
	} catch (error) {
		console.error(error);
	}
};

const getRecord = async () => {
	const querySnapshot = await getDocs(collection(db, 'records'));
	const transformed: Array<record> = [];
	querySnapshot.forEach((doc) => {
		const data: Omit<record, 'id'> = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});

	return transformed;
};

export default {
	getRecord,
	addRecord,
};