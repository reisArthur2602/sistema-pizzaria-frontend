import { Button } from "@/components/ui/button";
import React from "react";

import CardCurrentOrder from "../shared/components/order/card-current-order";
import { GetOrderCompleted } from "../shared/services/order/get-order-completed";

const Dashboard = async () => {
  const currentOrders = await GetOrderCompleted();
  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Últimos Pedidos</h1>
          <p className="text-sm text-zinc-400">
            Visualize todos os pedidos para a data atual
          </p>
        </div>
        <Button variant={"ghost"}>Novo Pedido</Button>
      </section>

      <section className="grid grid-cols-5 gap-6">
        {currentOrders.map((order) => (
          <CardCurrentOrder order={order} key={order.id} />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
