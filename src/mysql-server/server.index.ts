import * as typeorm from "typeorm";

import MySQLServerHelpersIndex from "./server-helpers/helpers.index";

class MySQLServerIndex {
    private _helpers: MySQLServerHelpersIndex;
    private _activeConnection: typeorm.DataSource;

    public constructor() {
        this._helpers = new MySQLServerHelpersIndex();
        this._activeConnection = undefined;
    }

    public async createConnection(host: string, port: number, username: string, password: string, database: string, entities: any): Promise<void> {
        try {
            if (this._activeConnection === undefined) {
                await typeorm.createConnection({
                    type: "mysql",
                    host: host,
                    port: port,
                    username: username,
                    password: password,
                    database: database,
                    entities: entities
                }).then(async(result) => {
                    this._activeConnection = result;

                    await this._activeConnection.synchronize().then(() => {
                        this._helpers.console.log("mysql/index", "The connection to the database could be established successfully!");
                    }).catch((error: Error) => {
                        throw error;
                    });
                }).catch((error: Error) => {
                    throw error;
                });
            } else {
                this._helpers.console.error("mysql/index", "The connection to the database is already running!");
            }
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return a specific document
     * @param {string} repositoryName 
     * @param {any} criteria 
     * @returns One specific query result
     */
    public async find(repositoryName: string, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.find({ where: criteria }).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return all documents
     * @param repositoryName 
     * @returns All query results
     */
    public async findAll(repositoryName: string): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.find().then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To insert a document
     * @param {string} repositoryName 
     * @param {any} criteria 
     * @returns Insert document
     */
    public async insert(repositoryName: string, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.insert(criteria).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To update a document
     * @param {string} repositoryName 
     * @param {Array} id 
     * @param {any} criteria 
     * @returns Update a document
     */
    public async update(repositoryName: string, id: Array<typeorm.ObjectID>, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.update(id, criteria).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To delete a document
     * @param {string} repositoryName 
     * @param {any} criteria 
     * @returns Deleting a document 
     */
    public async delete(repositoryName: string, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.delete(criteria).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }
}

const mysql = new MySQLServerIndex(); 

export default mysql;