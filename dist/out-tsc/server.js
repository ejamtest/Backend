"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/server.ts
const app_1 = require("./app");
// tslint:disable-next-line:typedef
const PORT = 9000;
app_1.default.get("/", (req, res) => {
    res.send("Welcome to my API");
});
app_1.default.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
//# sourceMappingURL=server.js.map