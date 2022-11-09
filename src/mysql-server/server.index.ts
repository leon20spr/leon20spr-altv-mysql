import * as typeorm from "typeorm";

import MySQLServerHelpersIndex from "./server-helpers/helpers.index";

class MySQLServerIndex {
    private _helpers: MySQLServerHelpersIndex;
    private _activeConnection: typeorm.DataSource;

    public constructor() {
        this._helpers = new MySQLServerHelpersIndex();
        this._activeConnection = undefined;
    }

    public async createConnection(entityArray: any): Promise<void> {
        try {
            
        } catch (error: any) {
            throw error;
        }
    }
}