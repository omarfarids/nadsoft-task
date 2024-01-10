/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";

type BasicDatePickerProps = {
  value: any;
  setValue: any;
};

export default function BasicDatePicker({ setValue }: BasicDatePickerProps) {
  return (
    <>
      <span className="text-sm font-light">
        The date range only works from 2020-03-06 to 2021-03-6 as of the API
      </span>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="">
            <DesktopDateTimePicker
              // value={dayjs(value)}
              onChange={(e: any) => {
                setValue(
                  `${e?.$y}${e?.$M + 1 > 9 ? e?.$M + 1 : "0" + (e?.$M + 1)}${
                    e?.$D > 9 ? e?.$D : "0" + e?.$D
                  }`
                );
              }}
              defaultValue={dayjs("2020-03-01")}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
