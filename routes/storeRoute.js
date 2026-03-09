<<<<<<< HEAD
import express from "express";
import { showProducts } from "../controllers/storeController.js";
const storeRouter = express.Router();

storeRouter.get("/",showProducts);

=======
import express from "express";
import { showProducts } from "../controllers/storeController.js";
const storeRouter = express.Router();

storeRouter.get("/",showProducts);

>>>>>>> dc3db8719a2fef1dbcd15cab215eb9aec4a6a66f
export {storeRouter}