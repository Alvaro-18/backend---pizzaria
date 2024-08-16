import prismaClient from "../../prisma";

class ListOrdersService {
  async execute() {
    const ordes = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false
      },
      orderBy: {
        created_at: "desc"
      }
    });

    return ordes;
  }
}

export { ListOrdersService };
