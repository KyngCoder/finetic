import Link from "next/link";
import React, { useEffect } from "react";

type SearchProps = {
  id?: string;
  image:any;
  symbol?:string
};

export const SearchTerm = ({
  searchData,
  term,
  type,
}: {
  searchData: SearchProps | null;
  term: string;
  type: string;
}) => {
  const setSearchTerm = (coin: string) => {
    localStorage.setItem("searchTerm", coin);
  };

  useEffect(() => {
    const setSearchTerm = (coin: string) => {
      localStorage.setItem("searchTerm", coin);
    };
  }, []);

  console.log(searchData,term,type)

  return (
    <>
      {type === "crypto" ? (
        <div
          className={`${
            term.length > 0
              ? "flex items-center bg-white text-black shadow-sm rounded-sm cursor-pointer mt-1 p-1 text-lg"
              : "hidden"
          } `}
        >
          <img src={searchData?.image?.small || " "} alt={searchData?.id} />
          <Link href="/details/Details">
            <p
              className="ml-2"
              onClick={() =>
                setSearchTerm((searchData && searchData?.id) || " ")
              }
            >
              {searchData?.id}
            </p>
          </Link>
        </div>
      ) : (
       <div className={`${
        term.length > 0
          ? "flex items-center bg-white text-black shadow-sm rounded-sm cursor-pointer mt-1 p-1 text-lg"
          : "hidden"
      } `}>
        <img src={searchData?.image || ""} alt={searchData?.image} />

        <Link href="/details/StockDetails">
          <p
            className="ml-2"
            onClick={() => setSearchTerm((searchData && searchData?.symbol) || " ")}
          >
            {searchData?.symbol}
          </p>
        </Link>
       </div>
      )}
    </>
  );
};
