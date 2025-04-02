import React from "react";
import { useSelector } from "react-redux";

const TicketModal = (props) => {
  const anexosTickets = useSelector((state) => state?.anexosTickets);
  const documentWorkOrderMantto = useSelector(
    (state) => state?.documentWorkOrderMantto
  );
  const { setShowModalTicket } = props && props;
  return (
    <>
      <div className="w-screen h-screen bg-black/70 absolute flex justify-center items-center">
        <div className="flex flex-col bg-gray-400 rounded-md p-6 gap-2">
          <div className="flex justify-between font-bold">
            <div className="w-full flex justify-center">
              <h1>Nuevo Ticket</h1>
            </div>
            <button onClick={() => setShowModalTicket(false)}>X</button>
          </div>
          <div className=" w-full grid grid-cols-[1fr_3fr] text-sm my-2 gap-2">
            <label htmlFor="">Descripción</label>
            <input
              className="rounded-md"
              name="description"
              type="text"
            ></input>
            <label htmlFor="">Solicitante</label>
            <div className="w-full flex gap-1">
              <select
                className="w-full rounded-md"
                name="PersonRequestId"
                type="text"
              >
                <option value=""></option>
                {anexosTickets &&
                  anexosTickets.map((anexoTicket) => (
                    <option value={anexoTicket.id} key={anexoTicket.id}>
                      {anexoTicket.description}
                    </option>
                  ))}
              </select>
            </div>

            <label htmlFor="">Empresa</label>
            <input
              className="rounded-md"
              name="EnterpriseRequestId"
              type="text"
            />

            <label htmlFor="">Estado</label>
            <select className="rounded-md" name="AnexoTypeId" type="text">
              {anexosTickets &&
                anexosTickets.map((anexoTicket) => (
                  <option value={anexoTicket.id} key={anexoTicket.id}>
                    {anexoTicket.description}
                  </option>
                ))}
            </select>

            <label htmlFor="">Archivo</label>
            <div className="w-full flex gap-1">
              <input className="w-[90%] rounded-md" name="file" type="text" />
              <button className="w-[10%] rounded-md bg-white">+</button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button className="font-bold text-sm rounded-md bg-white px-2 py-1 mt-2">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketModal;
