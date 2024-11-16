import { useEffect, useState } from "react";

import { onAuthStateChanged } from "../libs/firebase/auth";

export function useUserSession(InitSession: string | null) {
	const [userUid, setUserUid] = useState<string | null>(InitSession);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	// Listen for changes to the user session
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(async (authUser) => {
			if (authUser) {
				setUserUid(authUser.uid);
				setIsAuthenticated(true);
			} else {
				setUserUid(null);
				setIsAuthenticated(false);
			}
		});

		return () => unsubscribe();
	}, []);

	return { userUid, isAuthenticated };
}
