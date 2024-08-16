import { Request, Response } from "express";
import { AddItensService } from "../../services/order/AddItensService";

class AddItensController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;

    const addItensService = new AddItensService();

    const order = await addItensService.execute({
      order_id,
      product_id,
      amount
    });

    return res.json(order);
  }
}

export { AddItensController };
