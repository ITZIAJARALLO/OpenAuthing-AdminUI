import { defineConfig } from "umi";

export default defineConfig({
    define: {
        SHOW_OIDC_LOGGING: false,

        ODIC_AUTHORITY: 'http://localhost:5129',
        ODIC_CLIENT_ID: 'linkmore-ka-am-admin',
        ODIC_CLIENT_SECRET: '',

        USER_PROFILE_URL: 'http://localhost:5129/#/settings/profile',

        ADMIN_API_BASE_URL: 'http://localhost:5130',
    }
})