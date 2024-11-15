"use client";
import { useEffect } from 'react';
import { useRouter } from "next/navigation";  // App Router用
import { useSearchParams } from "next/navigation"; // App Router用
import { getFitbitToken } from '@/libs/fitbit/auth';
import useFitbitSession from '@/hooks/use-fitbit-session';

const Callback = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { saveSession } = useFitbitSession();

    useEffect(() => {
        const fetchToken = async (code: string) => {
            try {
                const tokenData = await getFitbitToken(code);
                // Use the hook to set the Fitbit session
                saveSession({
                    accessToken: tokenData.access_token,
                    refreshToken: tokenData.refresh_token,
                    expiresIn: tokenData.expires_in,
                    tokenType: tokenData.token_type,
                    userId: tokenData.user_id,
                });
                // ホームページにリダイレクト
                router.push('/');
            } catch (error) {
                console.error('Error fetching Fitbit token:', error);
            }
        };

        // URL から認証コードを取得
        const code = searchParams.get('code');
        if (code) {
            fetchToken(code);
        }
    }, [router, searchParams, saveSession]);

    return <div>認証中...</div>;
};

export default Callback;
