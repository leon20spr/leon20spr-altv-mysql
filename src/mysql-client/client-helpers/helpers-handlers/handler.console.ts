import * as alt from "alt-client";

import mysql from "../../client.index";

class MySQLClientHelpersHandlerConsoleIndex {
    /**
     * To format errors 
     * @param {string} location 
     * @param {string} text 
     */
    public error(location: string, text: string): void {
        try {
            alt.log(`~lr~[ERROR] ~w~[${location}] ~w~${text}`);
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To format logs
     * @param {string} location 
     * @param {string} text 
     */
    public log(location: string, text: string): void {
        try {
            alt.log(`~lg~[LOG] ~w~[${location}] ~w~${text}`);
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To format warnings
     * @param {string} location 
     * @param {string} text 
     */
    public warning(location: string, text: string): void {
        try {
            alt.log(`~ly~[WARNING] ~w~[${location}] ~w~${text}`);
        } catch (error: any) {
            throw error;
        }
    }
}

export default MySQLClientHelpersHandlerConsoleIndex;