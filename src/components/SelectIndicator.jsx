import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function SelectIndicator({ selectList, setValue }) {
  return (
    <Select
      placeholder=""
      indicator={<i className="fa fa-chevron-down scale-50"></i>}
      sx={{
        width: "100%",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {selectList.map((item) => (
        <Option value={item} onClick={() => setValue(item)} style={{fontSize:"12px"}}>{item}</Option>
      ))}
    </Select>
  );
}
