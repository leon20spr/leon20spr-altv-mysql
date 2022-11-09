# altv-mysql / leon20spr

With this resource you can easily control your MySQL database.

## Installation

Download the latest release from GitHub.

## Usage

```ts
import * as typeorm from "typeorm";

import mysql from "../../leon20spr-mysql/mysql-server/server.index.js";

const Test = new typeorm.EntitySchema({
    name: "test",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        text: {
            type: "text"
        }
    }
});

mysql.createConnection("localhost", 3306, "root", "", "test", [
    Test
]);
```