const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

async function fetchRead() {
  let data = "";
  let status = 0;

  try {
    const response = await fetch(url);
    const json = await response.json();

    data = json;
    status = 1;
  } catch (error) {
    data = error;
    status = 2;
  }

  return { data, status };
}

export { fetchRead };
