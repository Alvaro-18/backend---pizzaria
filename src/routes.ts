import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductsByCategoryController } from "./controllers/product/ListProductsByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItensController } from "./controllers/order/AddItensController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdensController } from "./controllers/order/ListOrdensController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post("/category",isAuthenticated, new CreateCategoryController().handle);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.get("/category/products", isAuthenticated, new ListProductsByCategoryController().handle);

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItensController().handle);
router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrdensController().handle);
router.get("/order/detail", isAuthenticated, new DetailOrderController().handle);
router.put("/order/finish", isAuthenticated, new FinishOrderController().handle);

export { router };
