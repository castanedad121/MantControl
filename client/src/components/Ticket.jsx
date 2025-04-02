import React, { useState } from "react";

const Ticket = (props) => {
  const { ticket } = props && props;

  return (
    <>
      <div className="w-full px-1 m-2  flex justify-center items-center   ">
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
          className=" h-28  relative"
        />

        <div className="w-max m-2 p-2 flex flex-col justify-between items-center text-xs gap-2 absolute">
          <div className="w-min flex justify-start gap-1 text-left ">
            <h1 className="font-bold">Descripción: </h1>
            <p className="">{ticket.description}</p>
          </div>
          <div className="flex items-start gap-1 ">
            <h1 className=" font-bold">Solicitante: </h1>
            <p className="flex flex-col justify-center items-center">
              {ticket.PersonRequest.name} {ticket.PersonRequest.lastName}
              <span className="font-bold">
                {ticket.EnterpriseRequest.businesName}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold w-1/2">Creado</h1>
              <h2 className="">{ticket.createdAt.substr(0, 10)}</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold">Actualizado</h1>
              <h2 className="">
                {ticket.createdAt === ticket.updatedAt
                  ? "- -"
                  : ticket.updatedAt.substr(0, 10)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
