import express, { NextFunction, Request, Response } from "express";
import path from "node:path";
import { homeRouter, categoriesRouter, productsRouter } from "./routes/index.ts";
import CustomError from "./errors/customError.ts";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(import.meta.dirname, "public");

app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening`);
});

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.use((req, res, next) => {
    const error = new CustomError(404, "Page Not Found");

    next(error);
});

app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
    const message = error.message || "Server Error";
    const errorCode = error.status || 500;

    res.status(errorCode);
    // res.render...ErrorPage
});
