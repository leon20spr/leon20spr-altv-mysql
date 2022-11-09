class MySQLServerHelpersHandlerDateTimeIndex {
    private _dateConstructor: Date;

    private _date: number;
    private _month: number;
    private _year: number;

    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    public constructor() {
        this._dateConstructor = new Date();

        this._date = this._getFormat(this._dateConstructor.getDate());
        this._month = this._getFormat(this._dateConstructor.getMonth() + 1);
        this._year = this._getFormat(this._dateConstructor.getFullYear());

        this._hours = this._getFormat(this._dateConstructor.getHours());
        this._minutes = this._getFormat(this._dateConstructor.getMinutes());
        this._seconds = this._getFormat(this._dateConstructor.getSeconds());
    }

    /**
     * To get new format
     * @param {number} number 
     * @returns Format: 00
     */
    private _getFormat(number: any): number {
        try {
            if (number < 10) {
                number = "0" + number;

                return number;
            } else {
                return number;
            }
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return date
     * @returns Format: 00.00.0000
     */
    public getDate(): string {
        try {
            return this._date + "." + this._month + "." + this._year;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return time
     * @returns Format: 00:00:00
     */
    public getTime(): string {
        try {
            return this._hours + ":" + this._minutes + ":" + this._seconds;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return date and time
     * @returns Format: 00.00.0000 00:00:00
     */
     public getDateTime(): string {
        try {
            return this._date + "." + this._month + "." + this._year;
        } catch (error: any) {
            throw error;
        }
    }
}

export default MySQLServerHelpersHandlerDateTimeIndex;