import { useState, useEffect } from 'react';

interface FitbitSession {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
    userId: string;
}

const useFitbitSession = () => {
    const [session, setSession] = useState<FitbitSession | null>(null);
    const [isFitbitAuthenticated, setIsFitbitAuthenticated] = useState(false);

    useEffect(() => {
        const storedSession = localStorage.getItem('fitbitSession');
        if (storedSession) {
            const parsedSession: FitbitSession = JSON.parse(storedSession);
            setSession(parsedSession);
            setIsFitbitAuthenticated(true);
        }
    }, []);

    const saveSession = (newSession: FitbitSession) => {
        localStorage.setItem('fitbitSession', JSON.stringify(newSession));
        setSession(newSession);
        setIsFitbitAuthenticated(true);
    };

    const clearSession = () => {
        localStorage.removeItem('fitbitSession');
        setSession(null);
        setIsFitbitAuthenticated(false);
    };

    return {
        session,
        isFitbitAuthenticated,
        saveSession,
        clearSession,
    };
};

export default useFitbitSession;