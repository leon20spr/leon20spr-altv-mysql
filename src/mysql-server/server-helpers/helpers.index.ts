import MySQLServerHelpersHandlerDateTimeIndex from "./helpers-handlers/handler.datetime";
import MySQLServerHelpersHandlerConsoleIndex from "./helpers-handlers/handler.console";

class MySQLServerHelpersIndex {
    public datetime: MySQLServerHelpersHandlerDateTimeIndex;
    public console: MySQLServerHelpersHandlerConsoleIndex;

    public constructor() {
        this.datetime = new MySQLServerHelpersHandlerDateTimeIndex();
        this.console = new MySQLServerHelpersHandlerConsoleIndex();
    }
}

export default MySQLServerHelpersIndex;