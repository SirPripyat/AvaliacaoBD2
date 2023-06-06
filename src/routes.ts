import { Router } from "express";
import CustomerController from "./customers/customer.controller";

const routes = Router();

routes
  .post("/create", CustomerController.createAll)
  .get("/findById/:id", CustomerController.findOne)
  .get("/findAll", CustomerController.findAll)
  .get("/find", CustomerController.groupByGender)
  .get("/find/state", CustomerController.groupByState)
  .get("/find/email", CustomerController.findByEmail)
  .get("/find/name", CustomerController.findByName)
  .put("/update/:id", CustomerController.updateOne)
  .delete("/delete/:id", CustomerController.deleteOne)
  .delete("/deleteAll", CustomerController.deleteAll);

export default routes;
