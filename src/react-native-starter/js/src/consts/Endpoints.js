import env from '../../env';
const baseUrl = env.baseUrl;
let baseUrlPaxel;

if (env.status === 'development') {
	baseUrlPaxel = env.baseUrlPaxelStaging;
} else if (env.status === 'production') {
	baseUrlPaxel = env.baseUrlPaxelProduction;
}

export default {
	GET_TOKEN: { baseUrl: baseUrl, path: 'get-token', method: 'POST' },
	REGISTER: { baseUrl: baseUrl, path: 'register', method: 'POST' },
	LOGIN: { baseUrl: baseUrl, path: 'get-token', method: 'POST' },
	LOGIN_SOCIAL_MEDIA: { baseUrl: baseUrl, path: 'get-token-sosmed', method: 'POST' },
	LOGOUT: { baseUrl: baseUrl, path: 'logout', method: 'POST' },
	GET_PROFILE: { baseUrl: baseUrl, path: 'profiles', method: 'GET' },
	UPDATE_PROFILE: { baseUrl: baseUrl, path: 'profiles', method: 'PUT' },
	CHANGE_PASSWORD: { baseUrl: baseUrl, path: 'change-password', method: 'PUT' },
	CHANGE_EMAIL: { baseUrl: baseUrl, path: 'change-email', method: 'PUT' },
	UPDATE_PROFILE_PICTURE: { baseUrl: baseUrl, path: 'profile-picture', method: 'PUT' },
	RESET_PASSWORD: { baseUrl: baseUrl, path: 'reset-password', method: 'POST' },
};
