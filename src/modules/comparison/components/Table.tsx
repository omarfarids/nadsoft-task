/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type TableDataProps = {
  title: { label: string; key: string }[];
  data: any[];
};

const Table = ({ title, data }: TableDataProps) => {
  return (
    <div className="border border-[#091E4224] rounded-lg shadow-md ">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead className="bg-lightGray">
            <tr>
              {title?.map((item: any) => {
                return <th>{item?.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any) => {
              return (
                <tr>
                  {title.map((x: any) => {
                    return <td>{item?.[x?.key] || 0}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
