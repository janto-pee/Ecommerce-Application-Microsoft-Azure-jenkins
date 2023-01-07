import Head from "next/head";
import React from "react";
import AllEventsHeader from "../../components/AllEventsHeader/AllEventsHeader";
import AllEventsContent from "../../components/AllEventsContent/AllEventsContent";
import { allEvents, getEvent } from "../../utils/fetch";

const Events = ({ id, event }) => {
  return (
    <div className="w-full bg-cyan-50 min-h-screen">
      <Head>
        <title>All Events</title>
      </Head>
      <AllEventsHeader event={event} />
      <AllEventsContent id={id} event={event} />
    </div>
  );
};

export default Events;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log(eventId);

  const event = await getEvent(eventId);

  return {
    props: {
      event: event,
      id: eventId,
    },
  };
}

export async function getStaticPaths() {
  const data = await allEvents();

  const path = data.map((item) => ({ params: { eventId: item.id } }));

  return {
    paths: path,
    fallback: false,
  };
}
