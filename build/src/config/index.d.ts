declare type Config = {
    serverUrl: string;
    serverPort: number;
    serverDatabase: string;
    jwtSecret: string;
};
declare const config: Config;
export default config;
