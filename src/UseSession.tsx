import { useState, useEffect } from "react";

export interface SessionResponse {
	isLoggedIn: boolean;
	username?: string;
	role?: string;
}

const useSession = (): SessionResponse => {
	const [session, setSession] = useState<SessionResponse>({
		isLoggedIn: false
	});

	useEffect(() => {
		const checkSession = async (): Promise<void> => {
			try {
				const response = await fetch("/api/admin/session");
				const session: SessionResponse = await response.json();
				setSession(session);
			} catch (error) {
				console.error("Error checking session:", error);
			}
		};
		checkSession();
	}, []);

	return session;
};

export default useSession;