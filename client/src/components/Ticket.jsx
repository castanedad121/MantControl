import React, { useState } from "react";

const Ticket = (props) => {
  const { ticket } = props && props;

  return (
    <>
      <div className="w-56 h-28 flex justify-center items-center">
        {
          <img
            src={
              ticket.AnexoType.order === 0
                ? "https://res.cloudinary.com/desaac6ma/image/upload/v1724294123/ERP%20Hcorz/Ticket1_fr2bce.png"
                : ticket.AnexoType.order === 1
                ? "https://res.cloudinary.com/desaac6ma/image/upload/v1724294123/ERP%20Hcorz/Ticket2_shuwxn.png"
                : ticket.AnexoType.order === 2
                ? "https://res.cloudinary.com/desaac6ma/image/upload/v1724294123/ERP%20Hcorz/Ticket3_egdaru.png"
                : ticket.AnexoType.order === 3
                ? "https://res.cloudinary.com/desaac6ma/image/upload/v1724294123/ERP%20Hcorz/Ticket5_s4hbkk.png"
                : ticket.AnexoType.order === 4 &&
                  "https://res.cloudinary.com/desaac6ma/image/upload/v1724294123/ERP%20Hcorz/Ticket4_zmugzw.png"
            }
            alt=""
            className="w-full relative"
          />
        }
        <div className="w-56 h-28 flex flex-col justify-center items-center absolute">
          <h1 className="">{ticket.description}</h1>
          <span className="">
            {ticket.PersonRequest.name} {ticket.PersonRequest.lastName}
          </span>
        </div>
      </div>
    </>
  );
};

export default Ticket;
