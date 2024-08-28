import React, { useState } from "react";
import { Ticket } from "./index.js";

const GroupTickets = (props) => {
  const { tickets } = props && props;

  return (
    <>
      <div className="mt-6 py-6 w-full h-max flex flex-col gap-5 justify-start items-center rounded-lg border-2">
        <h1>{tickets[0].AnexoType.description}</h1>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
};

export default GroupTickets;
