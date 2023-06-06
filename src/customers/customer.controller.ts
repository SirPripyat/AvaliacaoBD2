import { Request, Response } from "express";
import { CustomerService } from "./customer.service";
import { ErrorMessage, SucessMessage } from "./customer.enum";

class CustomerController {
  public async createAll(req: Request, res: Response) {
    const createdCustomer = await new CustomerService().createAll();

    return createdCustomer
      ? res.status(200).json(SucessMessage.CREATE_ALL)
      : res.status(400).json(ErrorMessage.CREATE_ALL);
  }

  public async findOne(req: Request, res: Response) {
    const findedCustomer = await new CustomerService().findOne(req.params.id);

    return findedCustomer
      ? res.status(200).json(findedCustomer)
      : res.status(400).json(ErrorMessage.FIND_ONE);
  }

  public async findAll(req: Request, res: Response) {
    const findedAllCustomers = await new CustomerService().findAll();

    return findedAllCustomers
      ? res.status(200).json(findedAllCustomers)
      : res.status(400).json(ErrorMessage.FIND_ALL);
  }

  public async groupByGender(req: Request, res: Response) {
    const groupedCustomers = await new CustomerService().groupByGender(
      req.query.gender
    );

    return groupedCustomers
      ? res.status(200).json(groupedCustomers)
      : res.status(400).json(ErrorMessage.GROUP_BY_GENDER);
  }

  public async groupByState(req: Request, res: Response) {
    const customersWithMajority = await new CustomerService().groupByState(
      req.query.state
    );

    return customersWithMajority
      ? res.status(200).json(customersWithMajority)
      : res.status(400).json();
  }

  public async findByEmail(req: Request, res: Response) {
    const { gender, state, emailHost } = req.query;

    const query: any = {};

    if (gender) {
      query.gender = gender;
    }

    if (state) {
      query.state = state;
    }

    if (emailHost) {
      query.email = { $regex: `${emailHost}$`, $options: "i" };
    }

    const findedCustomer = await new CustomerService().findByEmail(query);

    return findedCustomer
      ? res.status(200).json(findedCustomer)
      : res.status(400).json(ErrorMessage.FIND_BY_EMAIl);
  }

  public async findByName(req: Request, res: Response) {
    const findedCustomers = await new CustomerService().findByName(
      req.query.name
    );

    return findedCustomers
      ? res.status(200).json(findedCustomers)
      : res.status(400).json(ErrorMessage.FIND_BY_NAME_RANGE);
  }

  public async updateOne(req: Request, res: Response) {
    const updatedCustomer = await new CustomerService().updateOne(
      req.params.id,
      req.body
    );

    return updatedCustomer
      ? res.status(200).json(updatedCustomer)
      : res.status(400).json(ErrorMessage.UPDATE_ONE);
  }

  public async deleteOne(req: Request, res: Response) {
    const deletedCustomer = await new CustomerService().deleteOne(
      req.params.id
    );

    return deletedCustomer
      ? res.status(200).json(SucessMessage.DELETE_ONE)
      : res.status(400).json(ErrorMessage.DELETE_ONE);
  }

  public async deleteAll(req: Request, res: Response) {
    const deletedAllCustomers = await new CustomerService().deleteAll();

    return deletedAllCustomers
      ? res.status(200).json(SucessMessage.DELETE_ALL)
      : res.status(400).json(ErrorMessage.DELETE_ALL);
  }
}

export default new CustomerController();
