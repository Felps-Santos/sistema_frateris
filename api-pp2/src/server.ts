import "dotenv/config";
import express  from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorhandler";
import  taskRoutes from "./routes/taskRoutes"
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.json({status: "API no ar"});
})


app.use("/tasks", taskRoutes);
app.use(errorHandler);
app.listen(3000);

