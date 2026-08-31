import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from
  "./middlewares/errorHandler";
import pessoaRoutes from "./routes/pessoaRoutes";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API no ar" });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/pessoas", pessoaRoutes);
app.use(errorHandler);
app.listen(3000);
