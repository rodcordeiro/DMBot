import dotenv from 'dotenv';
dotenv.config();

export const app = {
  TOKEN: process.env.TOKEN,
  APP_ID: process.env.APP_ID,
};
