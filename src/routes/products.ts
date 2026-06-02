import { Router } from "express";

export const productsRouter = Router();

productsRouter.get("/", (req, res) => {
    console.log("products router");
});

productsRouter.get("/new", (req, res) => {
    console.log("Create product");
});

productsRouter.get("/:product/edit", (req, res) => {
    console.log("Editing particular product");
});

productsRouter.get("/:product", (req, res) => {
    console.log("Distinct product");
});
