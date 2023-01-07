import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import EventsSearchHeader from "../../components/EventsSearchHeader/EventsSearchHeader";
import Cards from "../../components/Cards/Cards";
import { getSlug } from "../../utils/fetch";
import Error from "../../components/Error/Error";

export default function EventsSearch({ hasError, events, month, year }) {
  if (hasError) {
    return <Error errorMessage={"Not Found"} />;
  }
  return (
    <div>
      <Head>
        <title>Event Search</title>
      </Head>
      <Navbar />
      <Cards events={events}>
        <EventsSearchHeader month={month} year={year} />
      </Cards>
    </div>
  );
}

export async function getServerSideProps(context) {
  const eventSlug = context.params.eventSlug;
  let mon = eventSlug[0];
  let yr = eventSlug[1];

  let month = +mon;
  let year = +yr;

  if (isNaN(month) || isNaN(year) || month > 13 || year > 2030) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  const events = await getSlug(month, year);

  if (events.length < 1) {
    return {
      props: {
        hasError: true,
      },
      //   notFound: true,
    };
  }
  return {
    props: {
      events: events,
      month: month,
      year: year,
    },
  };
}
