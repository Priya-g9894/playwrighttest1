import * as dotenv from 'dotenv';
export const getENV = () => {
    dotenv.config({
        path:`config/.env.dev`
        //path:`config/.env.${process.env.ENV}`
    })
}
