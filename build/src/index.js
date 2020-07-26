"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const express_graphql_1 = require("express-graphql");
require("module-alias/register");
const config_1 = require("./config");
const db_1 = require("./db");
const schema_1 = require("./graphql/schema");
const app = express();
const expressPlayground = require('graphql-playground-middleware-express')
    .default;
db_1.connectDb();
app.use(cors());
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.default,
    graphiql: true,
}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
app.listen(config_1.default.serverPort, () => {
    console.log(`now listening for requests on port ${config_1.default.serverPort}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map