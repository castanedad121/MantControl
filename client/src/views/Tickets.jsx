/* eslint-disable react-hooks/exhaustive-deps */
import { BiAddToQueue } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideBar,
  NavBar,
  GroupTickets,
  TicketModal,
} from "../components/index";
import {
  getTickets1,
  getTickets2,
  getTickets3,
  getTickets4,
  getTickets5,
  getAnexos,
  getDocumentWorkOrderMantto,
} from "../redux/actions";

const Tickets = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.token);
  const tickets1 = useSelector((state) => state?.tickets1);
  const countTickets1 = useSelector((state) => state?.countTickets1);
  const tickets2 = useSelector((state) => state?.tickets2);
  const countTickets2 = useSelector((state) => state?.countTickets2);
  const tickets3 = useSelector((state) => state?.tickets3);
  const countTickets3 = useSelector((state) => state?.countTickets3);
  const tickets4 = useSelector((state) => state?.tickets4);
  const countTickets4 = useSelector((state) => state?.countTickets4);
  const tickets5 = useSelector((state) => state?.tickets5);
  const countTickets5 = useSelector((state) => state?.countTickets5);
  const anexosTickets = useSelector((state) => state?.anexosTickets);

  const [textsearcht1, setTextsearcht1] = useState("");
  const [attributet1, setAttributet1] = useState("createdAt");
  const [attribute2t1, setAttribute2t1] = useState("createdAt");
  const [ordert1, setOrdert1] = useState("asc");
  const [paget1, setPaget1] = useState(0);
  const [sizet1, setSizet1] = useState(4);
  const [createDateEndt1, setCreateDateEndt1] = useState("");
  const [createDateStartt1, setCreateDateStartt1] = useState("");
  const [anexoTypet1, setAnexoTypet1] = useState(0);
  const [enterpriseRequestt1, setEnterpriseRequestt1] = useState("");
  const [personRequestt1, setPersonRequestt1] = useState("");
  const [docWorkOrdert1, setDocWorkOrdert1] = useState("");
  const [userCreationt1, setUserCreationt1] = useState("");
  const [userUpgradet1, setUserUpgradet1] = useState("");

  const [textsearcht2, setTextsearcht2] = useState("");
  const [attributet2, setAttributet2] = useState("createdAt");
  const [attribute2t2, setAttribute2t2] = useState("createdAt");
  const [ordert2, setOrdert2] = useState("asc");
  const [paget2, setPaget2] = useState(0);
  const [sizet2, setSizet2] = useState(4);
  const [createDateEndt2, setCreateDateEndt2] = useState("");
  const [createDateStartt2, setCreateDateStartt2] = useState("");
  const [anexoTypet2, setAnexoTypet2] = useState(1);
  const [enterpriseRequestt2, setEnterpriseRequestt2] = useState("");
  const [personRequestt2, setPersonRequestt2] = useState("");
  const [docWorkOrdert2, setDocWorkOrdert2] = useState("");
  const [userCreationt2, setUserCreationt2] = useState("");
  const [userUpgradet2, setUserUpgradet2] = useState("");

  const [textsearcht3, setTextsearcht3] = useState("");
  const [attributet3, setAttributet3] = useState("createdAt");
  const [attribute3t3, setAttribute3t3] = useState("createdAt");
  const [ordert3, setOrdert3] = useState("asc");
  const [paget3, setPaget3] = useState(0);
  const [sizet3, setSizet3] = useState(4);
  const [createDateEndt3, setCreateDateEndt3] = useState("");
  const [createDateStartt3, setCreateDateStartt3] = useState("");
  const [anexoTypet3, setAnexoTypet3] = useState(2);
  const [enterpriseRequestt3, setEnterpriseRequestt3] = useState("");
  const [personRequestt3, setPersonRequestt3] = useState("");
  const [docWorkOrdert3, setDocWorkOrdert3] = useState("");
  const [userCreationt3, setUserCreationt3] = useState("");
  const [userUpgradet3, setUserUpgradet3] = useState("");

  const [textsearcht4, setTextsearcht4] = useState("");
  const [attributet4, setAttributet4] = useState("createdAt");
  const [attribute4t4, setAttribute4t4] = useState("createdAt");
  const [ordert4, setOrdert4] = useState("asc");
  const [paget4, setPaget4] = useState(0);
  const [sizet4, setSizet4] = useState(4);
  const [createDateEndt4, setCreateDateEndt4] = useState("");
  const [createDateStartt4, setCreateDateStartt4] = useState("");
  const [anexoTypet4, setAnexoTypet4] = useState(3);
  const [enterpriseRequestt4, setEnterpriseRequestt4] = useState("");
  const [personRequestt4, setPersonRequestt4] = useState("");
  const [docWorkOrdert4, setDocWorkOrdert4] = useState("");
  const [userCreationt4, setUserCreationt4] = useState("");
  const [userUpgradet4, setUserUpgradet4] = useState("");

  const [textsearcht5, setTextsearcht5] = useState("");
  const [attributet5, setAttributet5] = useState("createdAt");
  const [attribute5t5, setAttribute5t5] = useState("createdAt");
  const [ordert5, setOrdert5] = useState("asc");
  const [paget5, setPaget5] = useState(0);
  const [sizet5, setSizet5] = useState(4);
  const [createDateEndt5, setCreateDateEndt5] = useState("");
  const [createDateStartt5, setCreateDateStartt5] = useState("");
  const [anexoTypet5, setAnexoTypet5] = useState(4);
  const [enterpriseRequestt5, setEnterpriseRequestt5] = useState("");
  const [personRequestt5, setPersonRequestt5] = useState("");
  const [docWorkOrdert5, setDocWorkOrdert5] = useState("");
  const [userCreationt5, setUserCreationt5] = useState("");
  const [userUpgradet5, setUserUpgradet5] = useState("");

  const [typeAnexos, setTypeAnexos] = useState(1);
  const [showModalTicket, setShowModalTicket] = useState(false);

  useEffect(() => {
    dispatch(
      getDocumentWorkOrderMantto(
        "",
        "createdAt",
        "createdAt",
        "asc",
        0,
        -1,
        "",
        "",
        "",
        "",
        "",
        token
      )
    );
    dispatch(getAnexos("", typeAnexos, "type", "order", "asc", 0, -1, token));
    dispatch(
      getTickets1(
        textsearcht1,
        attributet1,
        attribute2t1,
        ordert1,
        paget1,
        sizet1,
        createDateEndt1,
        createDateStartt1,
        anexoTypet1,
        enterpriseRequestt1,
        personRequestt1,
        docWorkOrdert1,
        userCreationt1,
        userUpgradet1,
        token
      )
    );
    dispatch(
      getTickets2(
        textsearcht2,
        attributet2,
        attribute2t2,
        ordert2,
        paget2,
        sizet2,
        createDateEndt2,
        createDateStartt2,
        anexoTypet2,
        enterpriseRequestt2,
        personRequestt2,
        docWorkOrdert2,
        userCreationt2,
        userUpgradet2,
        token
      )
    );
    dispatch(
      getTickets3(
        textsearcht3,
        attributet3,
        attribute3t3,
        ordert3,
        paget3,
        sizet3,
        createDateEndt3,
        createDateStartt3,
        anexoTypet3,
        enterpriseRequestt3,
        personRequestt3,
        docWorkOrdert3,
        userCreationt3,
        userUpgradet3,
        token
      )
    );
    dispatch(
      getTickets4(
        textsearcht4,
        attributet4,
        attribute4t4,
        ordert4,
        paget4,
        sizet4,
        createDateEndt4,
        createDateStartt4,
        anexoTypet4,
        enterpriseRequestt4,
        personRequestt4,
        docWorkOrdert4,
        userCreationt4,
        userUpgradet4,
        token
      )
    );
    dispatch(
      getTickets5(
        textsearcht5,
        attributet5,
        attribute5t5,
        ordert5,
        paget5,
        sizet5,
        createDateEndt5,
        createDateStartt5,
        anexoTypet5,
        enterpriseRequestt5,
        personRequestt5,
        docWorkOrdert5,
        userCreationt5,
        userUpgradet5,
        token
      )
    );
  }, [
    textsearcht1,
    attributet1,
    attribute2t1,
    ordert1,
    paget1,
    sizet1,
    createDateEndt1,
    createDateStartt1,
    anexoTypet1,
    enterpriseRequestt1,
    personRequestt1,
    docWorkOrdert1,
    userCreationt1,
    userUpgradet1,
    textsearcht2,
    attributet2,
    attribute2t2,
    ordert2,
    paget2,
    sizet2,
    createDateEndt2,
    createDateStartt2,
    anexoTypet2,
    enterpriseRequestt2,
    personRequestt2,
    docWorkOrdert2,
    userCreationt2,
    userUpgradet2,
    textsearcht3,
    attributet3,
    attribute3t3,
    ordert3,
    paget3,
    sizet3,
    createDateEndt3,
    createDateStartt3,
    anexoTypet3,
    enterpriseRequestt3,
    personRequestt3,
    docWorkOrdert3,
    userCreationt3,
    userUpgradet3,
    textsearcht4,
    attributet4,
    attribute4t4,
    ordert4,
    paget4,
    sizet4,
    createDateEndt4,
    createDateStartt4,
    anexoTypet4,
    enterpriseRequestt4,
    personRequestt4,
    docWorkOrdert4,
    userCreationt4,
    userUpgradet4,
    textsearcht5,
    attributet5,
    attribute5t5,
    ordert5,
    paget5,
    sizet5,
    createDateEndt5,
    createDateStartt5,
    anexoTypet5,
    enterpriseRequestt5,
    personRequestt5,
    docWorkOrdert5,
    userCreationt5,
    userUpgradet5,
    token,
  ]);
  return (
    <>
      <div className="flex relative">
        <SideBar />
        <div className="grow flex flex-col ">
          <NavBar title={"Tickets"} />
          <div className="flex justify-center content-around gap-4 mx-4">
            {tickets1 && (
              <GroupTickets
                tickets={tickets1 && tickets1}
                count={countTickets1 && countTickets1}
                setTextsearch={setTextsearcht1}
                order={ordert1}
                setOrder={setOrdert1}
                titleAnexo={
                  anexosTickets &&
                  anexosTickets?.find((anexo) => anexo.order === 0)
                }
                page={paget1}
                size={sizet1}
                setPage={setPaget1}
              />
            )}
            {tickets2 && (
              <GroupTickets
                tickets={tickets2 && tickets2}
                count={countTickets2 && countTickets2}
                setTextsearch={setTextsearcht2}
                order={ordert2}
                setOrder={setOrdert2}
                titleAnexo={
                  anexosTickets &&
                  anexosTickets?.find((anexo) => anexo.order === 1)
                }
                page={paget2}
                size={sizet2}
                setPage={setPaget2}
              />
            )}

            {tickets3 && (
              <GroupTickets
                tickets={tickets3 && tickets3}
                count={countTickets3 && countTickets3}
                setTextsearch={setTextsearcht3}
                order={ordert3}
                setOrder={setOrdert3}
                titleAnexo={
                  anexosTickets &&
                  anexosTickets?.find((anexo) => anexo.order === 2)
                }
                page={paget3}
                size={sizet3}
                setPage={setPaget3}
              />
            )}

            {tickets4 && (
              <GroupTickets
                tickets={tickets4 && tickets4}
                count={countTickets4 && countTickets4}
                setTextsearch={setTextsearcht4}
                order={ordert4}
                setOrder={setOrdert4}
                titleAnexo={
                  anexosTickets &&
                  anexosTickets?.find((anexo) => anexo.order === 3)
                }
                page={paget4}
                size={sizet4}
                setPage={setPaget4}
              />
            )}

            {tickets5 && (
              <GroupTickets
                tickets={tickets5 && tickets5}
                count={countTickets5 && countTickets5}
                setTextsearch={setTextsearcht5}
                order={ordert5}
                setOrder={setOrdert5}
                titleAnexo={
                  anexosTickets &&
                  anexosTickets?.find((anexo) => anexo.order === 4)
                }
                page={paget5}
                size={sizet5}
                setPage={setPaget5}
              />
            )}
            <button
              className="fixed w-14 h-14  bottom-6 right-6 rounded-full flex items-center hover:bg-[#A4B0BE] hover:scale-125"
              onClick={() => setShowModalTicket(!showModalTicket)}
            >
              <div className="drop-shadow-xl w-[50px] h-[50px] bg-[#A4B0BE] rounded-full border-white border-2 flex justify-center m-auto  hover:active:scale-75">
                <BiAddToQueue className="m-auto  size-8  text-white drop-shadow-xl" />
              </div>
            </button>
          </div>
        </div>
        {showModalTicket && (
          <TicketModal setShowModalTicket={setShowModalTicket} />
        )}
      </div>
    </>
  );
};

export default Tickets;
