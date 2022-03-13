import env from '../../env';
const baseUrl = env.baseUrl;
let baseUrlPanorama;

if (env.status === 'development') {
	baseUrlPanorama = env.baseUrlPanoramaStaging;
} else if (env.status === 'production') {
	baseUrlPanorama = env.baseUrlPanoramaProduction;
}

export default {
	LOGIN: { baseUrl: baseUrl, path: '/v1/auth/login', method: 'POST' },
	FORGOTPASS: { baseUrl: baseUrl, path: '/v1/auth/forgotpass', method: 'POST' },
	CHANGEPASS: { baseUrl: baseUrl, path: '/v1/auth/change-pass', method: 'POST' },
	REGISTER: { baseUrl: baseUrl, path: '/v1/auth/register', method: 'POST' },
	SUGIT: { baseUrl: baseUrl, path: '/v1/sug-itin' },
	USERS: { baseUrl: baseUrl, path: '/v1/users' },
};
