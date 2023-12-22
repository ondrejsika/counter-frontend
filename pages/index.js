import React from "react";

const H1 = (props) => (
  <h1
    style={{
      fontSize: "7rem",
      margin: "0",
    }}
  >
    {props.children}
  </h1>
);

const H2 = (props) => (
  <h2
    style={{
      fontSize: "3rem",
      margin: "0.2em",
    }}
  >
    {props.children}
  </h2>
);

export default function Index(props) {
  return (
    <div
      style={{
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
        <H1>👋</H1>
        <H1>{props.counter}</H1>
        <H2>{props.hostnameApi}</H2>
        <H2>{props.HOSTNAME}</H2>
    </div>
  );
}

export async function getServerSideProps() {
  var API_ORIGIN = process.env.API_ORIGIN || "http://127.0.0.1";
  const res = await fetch(API_ORIGIN + `/api/counter`);
  const data = await res.json();
  return {
    props: {
      HOSTNAME: process.env.HOSTNAME || "",
      counter: data.counter,
      hostnameApi: data.hostname,
    },
  };
}
