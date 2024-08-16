import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItensService {
  async execute({ product_id, order_id, amount }: ItemRequest) {

    const itens = await prismaClient.item.create({
      data: {
        order_id: order_id,
        productId: product_id,
        amount: amount
      }
    });

    return itens;
  }
}

export { AddItensService };
