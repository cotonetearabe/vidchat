import {Image} from 'next/image';
import { collection, doc, CollectionReference, DocumentReference, getDoc, setDoc, addDoc, onSnapshot } from 'firebase/firestore';

/*
TODO:
    - The window but assume the user has no account, ...
    - Partial-prerender to be blazzingly fast
    - Maybe have some fun with the funny avatar api
*/

const vidWindow = () => {
    return {
        <>
            <p>Hello</p>
        </>
    }
}

