import React, { useState } from "react";
import { Ticket, FilterTickets, Pagination } from "./index.js";
import { useSelector } from "react-redux";

const GroupTickets = (props) => {
  const {
    tickets,
    count,
    order,
    setOrder,
    setTextsearch,
    titleAnexo,
    page,
    size,
    setPage,
  } = props && props;

  return (
    <>
      <div className=" my-2 py-2 w-full flex flex-col gap-1 justify-start items-center rounded-lg border-2">
        <h1
          className={
            titleAnexo?.order === 0
              ? "text-sm font-semibold border-t-[3px] border-[#AFDFEB]"
              : titleAnexo?.order === 1
              ? "text-sm font-semibold border-t-[3px] border-[#FFFF66]"
              : titleAnexo?.order === 2
              ? "text-sm font-semibold border-t-[3px] border-[#BADA8F]"
              : titleAnexo?.order === 3
              ? "text-sm font-semibold border-t-[3px] border-[#D9D9D9]"
              : "text-sm font-semibold border-t-[3px] border-[#FF5757]"
          }
        >
          {titleAnexo?.description}
        </h1>
        <FilterTickets
          order={order}
          setOrder={setOrder}
          setTextsearch={setTextsearch}
        />
        {count === "loader" ? (
          <span>Server not found</span>
        ) : count === 0 ? (
          <span>there are no matches</span>
        ) : (
          <>
            {tickets?.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </>
        )}
        <Pagination page={page} size={size} setPage={setPage} count={count} />
      </div>
    </>
  );
};

export default GroupTickets;
