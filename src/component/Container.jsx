import React, { useEffect, useState } from "react";
import Card from "./Card";
import LongCard from "./LongCard";

const initalActivity = [
  {
    id: 1,
    title: "Work",
  },
  {
    id: 2,
    title: "Play",
  },
  {
    id: 3,
    title: "Social",
  },
  {
    id: 4,
    title: "cara",
  },
  {
    id: 5,
    title: "de",
  },
  {
    id: 6,
    title: "pipe",
  },
];

const Container = () => {
  const [type, setType] = useState(initalActivity);

  const getData = async () => {
    const url = "./data.json";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getData().then(data => {
      setType(data);
    });
  }, []);

  return (
    <div className="container">
      <LongCard />
      {type.map(actividad => {
        return (
          <Card
            estilo={" " + actividad.title.toLowerCase()}
            background="card"
            key={actividad.title}
            tipo={actividad.title}
            current={Math.floor(Math.random() * 20)}
            previous={Math.floor(Math.random() * 20)}
          />
        );
      })}

      {/* <Card background="card work"  />
      <Card background="card play " />
      <Card background="card study " />
      <Card background="card exercise " />
      <Card background="card social " />
      <Card background="card self-care " /> */}
    </div>
  );
};

export default Container;
