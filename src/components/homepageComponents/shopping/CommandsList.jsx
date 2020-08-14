import React from "react";
import Command from "./Command";
import { groupItemsById } from "utils";

const CommandsList = ({ commands }) => {
  const commandsGroupedById = groupItemsById(commands);
  return (
    <ul className="results__list">
      {commandsGroupedById.map((command, i) => {
        if (command.quantitySum > 0) {
          return (
            <Command
              product={command.product}
              createdAt={command.createdAt}
              deliveryState={command.delivery_state}
              address={command.address}
              price={command.price}
              description={command.description}
              quantity={command.quantity}
              commandGroupId={command.commandGroupId}
              author={command.client}
              key={i}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default CommandsList;
