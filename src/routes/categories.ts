import { Router } from "express";

export const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
    console.log("categories router");
});

// Должен ли Update Category иметь отдельный роут?

categoriesRouter.get("/new", (req, res) => {
    console.log("Create category");
});

categoriesRouter.get("/:category/edit", (req, res) => {
    console.log("Editing particular category");
});

categoriesRouter.get("/:category", (req, res) => {
    console.log("distinct category");
});
