import MySQLClientHelpersIndex from "./client-helpers/helpers.index";

class MySQLClientIndex {
    private _helpers: MySQLClientHelpersIndex;

    public constructor() {
        this._helpers = new MySQLClientHelpersIndex();
    }

    public startApplication() {
        try {
            this._helpers.console.log("mysql/index", "The application could be started successfully!");
        } catch (error: any) {
            throw error;
        }
    }
}

const client = new MySQLClientIndex();

export default client;

client.startApplication();