import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";

const FilterTickets = (props) => {
  const { setTextsearch, order, setOrder } = props && props;

  const [show, setShow] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [rotate, setRotate] = useState(false);

  const handleSearch = (e) => {
    setValueSearch(e.target.value);
    setTextsearch(e.target.value);
  };
  const handlekey = (e) => {
    if (e.keyCode === 27) {
      setShow(false);
      setValueSearch("");
      setTextsearch("");
    }
  };
  const handlerOrder = () => {
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
    setRotate(!rotate);
  };
  return (
    <>
      <div className="flex pt-1 justify-between items-center mx-1 sm:mx-6 w-full sm:w-auto flex-col md:flex-row gap-2">
        <div className="flex md:justify-start justify-center items-center w-full sm:w-auto mr-2 md:flex-col">
          <div className="grid-cols-2 grid ">
            <IoSearchOutline
              className="size-6 text-[#A4B0BE]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
              onClick={() => setShow(!show)}
            />
            <IoFilterOutline
              className={
                rotate
                  ? "rotate-180 size-6 text-[#A4B0BE] mr-3 hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
                  : "size-6 text-[#A4B0BE] mr-3 hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
              }
              onClick={handlerOrder}
            />
          </div>
          <input
            type="text"
            name=""
            id="inputSearch"
            value={valueSearch}
            onChange={handleSearch}
            className={
              show
                ? " bg-white border border-[#ECCC68] text-base rounded-md h-6"
                : "hidden"
            }
            onKeyDown={handlekey}
          />
        </div>
      </div>
    </>
  );
};

export default FilterTickets;
