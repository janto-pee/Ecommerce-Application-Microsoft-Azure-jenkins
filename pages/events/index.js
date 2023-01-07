import React from "react";
import Cards from "../../components/Cards/Cards";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Filter from "../../components/Filter/Filter";
import { allEvents } from "../../utils/fetch";

const AllEvents = ({ events }) => {
  return (
    <div>
      <Head>
        <title>All Events Page</title>
      </Head>
      <Navbar />
      <Cards events={events}>
        <Filter />
      </Cards>
    </div>
  );
};

export default AllEvents;

export async function getStaticProps() {
  const events = await allEvents();

  return {
    props: {
      events: events,
    },
  };
}
