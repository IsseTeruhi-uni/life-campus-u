import axios from 'axios';
import querystring from 'querystring';

const fitbitClientId = process.env.NEXT_PUBLIC_FITBIT_CLIENT_ID;
const fitbitClientSecret = process.env.NEXT_PUBLIC_FITBIT_CLIENT_SECRET;
const redirectUri = process.env.NEXT_PUBLIC_FITBIT_REDIRECT_URI;

export const getFitbitAuthUrl = (): string => {
    const authUrl = 'https://www.fitbit.com/oauth2/authorize';
    const params = {
        client_id: fitbitClientId,
        response_type: 'code',
        scope: 'activity sleep heartrate',
        redirect_uri: redirectUri,
    };

    return `${authUrl}?${querystring.stringify(params)}`;
};

export const getFitbitToken = async (code: string): Promise<any> => {
    const tokenUrl = 'https://api.fitbit.com/oauth2/token';
    const authHeader = Buffer.from(`${fitbitClientId}:${fitbitClientSecret}`).toString('base64');
    const params = {
        client_id: fitbitClientId,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code,
    };

    try {
        const response = await axios.post(tokenUrl, querystring.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authHeader}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching Fitbit token:', error);
        throw error;
    }
};