declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      /** Bot Token */
      readonly TOKEN: string;

      /** Application or client ID */
      readonly APP_ID: string;
    }
  }
}
