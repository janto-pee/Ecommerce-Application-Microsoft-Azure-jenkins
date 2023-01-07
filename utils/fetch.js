export async function fetchApi() {
  const res = await fetch(
    "https://events-8a14a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  return data;

  // const events = [];
  // for (const key in data) {
  //   events.push({
  //     id: key,
  //     ...data[key],
  //   });
  // }
  // return events;
}

export async function isFeatured() {
  const data = await fetchApi();
  return data.filter((item) => item.isFeatured);
}

export async function allEvents() {
  const data = await fetchApi();
  return data;
}

export async function getEvent(id) {
  const data = await fetchApi();
  return data.find((item) => item.id === id);
}

export async function getSlug(month, year) {
  const data = await fetchApi();
  const filteredEvents = data.filter((item) => {
    let itemDate = new Date(item.date);
    return itemDate.getFullYear() == year && itemDate.getMonth() == month - 1;
  });
  return filteredEvents;
}
