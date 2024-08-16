import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdensController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrdersService();

    const ordes = await listOrdersService.execute();

    return res.json(ordes);
  }
}

export { ListOrdensController };
