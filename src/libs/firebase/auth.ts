import {
	GoogleAuthProvider,
	type User,
	onAuthStateChanged as _onAuthStateChanged,
	signInWithPopup,
} from "firebase/auth";

import { firebaseAuth } from "./FirebaseConfig";

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
	return _onAuthStateChanged(firebaseAuth, callback);
}

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(firebaseAuth, provider);

		if (!result || !result.user) {
			throw new Error("Google sign in failed");
		}

		const token = (await result.user.getIdTokenResult()).token;
		localStorage.setItem("authToken", token);

		return result.user.uid;
	} catch (error) {
		console.error("Error signing in with Google", error);
	}
}

export async function signOutWithGoogle() {
	try {
		await firebaseAuth.signOut();
		localStorage.removeItem("authToken");
	} catch (error) {
		console.error("Error signing out with Google", error);
	}
}
