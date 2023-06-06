import { readFile } from "fs/promises";
import CustomerSchema from "./customer.schema";
import { CustomerInterface } from "./customer.interface";

export class CustomerService {
  private async readData() {
    const getCustomersData = await JSON.parse(
      await readFile("./src/files/retailStore.json", "utf-8")
    );

    return getCustomersData ? getCustomersData : null;
  }

  private handleBirthDate(birthDate: String) {
    const transformInArray = birthDate.split("/");

    const getDay = transformInArray[0];
    const getMonth = transformInArray[1];
    const getYear = transformInArray[2];

    let handleDate: String = "";

    handleDate = handleDate.concat(getYear, "-", getMonth, "-", getDay);

    const handledBirthDate = new Date(`${handleDate} GMT`);

    return handledBirthDate;
  }

  public async createAll() {
    const getCustomersData = await this.readData();

    if (!getCustomersData) {
      return null;
    }

    const createdCustomers: any = [];

    for (const customer of getCustomersData) {
      const getBirthDate = await this.handleBirthDate(customer.dataNascimento);

      const handleCustomer: CustomerInterface = {
        name: customer.nomeCliente,
        birthDate: getBirthDate,
        gender: customer.genero,
        email: customer.email,
        address: customer.endereco,
        state: customer.estado,
        city: customer.cidade,
      };

      createdCustomers.push(handleCustomer);
    }

    const insertedCustomres = await CustomerSchema.insertMany(createdCustomers);

    return insertedCustomres;
  }

  public async findOne(id: any) {
    const findedCustomer = await CustomerSchema.findById(id);

    return findedCustomer ? findedCustomer : null;
  }

  public async findAll() {
    const findedAllCustomers = await CustomerSchema.find();

    return findedAllCustomers ? findedAllCustomers : null;
  }

  public async groupByGender(gender: any) {
    const groupedCustomers = await CustomerSchema.find({ gender: gender });

    return groupedCustomers ? groupedCustomers : null;
  }

  public async groupByState(state: any) {
    const groupedCustomers = await CustomerSchema.find({ state: state });

    return groupedCustomers ? groupedCustomers : null;
  }

  public async findByEmail(query: any) {
    const findedCustomer = await CustomerSchema.find(query);

    return findedCustomer ? findedCustomer : null;
  }

  public async findByName(name: any) {
    const findedCustomers = await CustomerSchema.find({
      name: { $regex: name, $options: "i" },
    });

    return findedCustomers ? findedCustomers : null;
  }

  public async updateOne(id: any, customer: CustomerInterface) {
    const updatedCustomer = await CustomerSchema.findOneAndUpdate(
      { _id: id },
      {
        name: customer.name,
        birthDate: customer.birthDate,
        gender: customer.gender,
        email: customer.email,
        address: customer.address,
        state: customer.state,
        city: customer.city,
      },
      { new: true }
    );

    return updatedCustomer;
  }

  public async deleteOne(id: any) {
    const deletedCustomer = await CustomerSchema.findOneAndDelete({ _id: id });

    return deletedCustomer ? deletedCustomer : null;
  }

  public async deleteAll() {
    const allCustomers = await this.findAll();

    const deletedAllCustomer = await CustomerSchema.deleteMany({
      allCustomers,
    });

    return deletedAllCustomer ? deletedAllCustomer : null;
  }
}
