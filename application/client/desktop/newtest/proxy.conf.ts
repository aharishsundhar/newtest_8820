const BACKEND_URL = process.env.BACKEND_URL || 'localhost';
const BACKEND_PORT = process.env.BACKEND_PORT || '8000';

const PROXY_CONFIG = {
    '/api/*': {
        target: `http://${BACKEND_URL}:${BACKEND_PORT}`,
        secure: true,
        pathRewrite: {
            '^/api/desktop': '/desktop',
            '^/api/mobile': '/mobile'
        },
        changeOrigin: true,
        logLevel: 'debug'
    }
};


module.exports = PROXY_CONFIG;