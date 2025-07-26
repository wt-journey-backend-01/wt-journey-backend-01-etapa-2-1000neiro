const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const agentesRouter = require("./routes/agenteRoutes");
app.use("/api/agentes", agentesRouter);

const { errorHandler } = require("./utils/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});