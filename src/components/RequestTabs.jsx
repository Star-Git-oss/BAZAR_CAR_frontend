import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Calcula, Elige, MyHeader, Selecciona } from "./TabComponent";

export function RequestTabs() {
  const [activeTab, setActiveTab] = React.useState("selecciona");
  const data = [
    {
      index: "1",
      title: "Selecciona",
      label: "Uno de éstos planes es el mejor para ti",
      value: "selecciona",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      index: "2",
      title: "Calcula",
      label: "Analiza el presupuesto para tu Auto",
      value: "calcula",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      index: "3",
      title: "Elige",
      label: "Elige tu Auto",
      value: "elige",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const setActive = (value) => {
    console.log(value);
    setActiveTab(value);
  };
  return (
    <Tabs value={activeTab} style={{marginBottom:"40px"}}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ title, label, value, index }) => {
          return (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              // className={activeTab === value ? "text-gray-900" : ""}
            >
              <MyHeader
                num={index}
                title={title}
                label={label}
                active={activeTab === value ? true : false}
              />
            </Tab>
          );
        })}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="TabPanel">
            {activeTab === "selecciona" ? (
              <Selecciona setActive={setActive} />
            ) : activeTab === "calcula" ? (
              <Calcula setActive={setActive} />
            ) : (
              <Elige setActive={setActive} />
            )}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
