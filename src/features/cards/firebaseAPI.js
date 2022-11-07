const url = "https://hours-896df-default-rtdb.firebaseio.com/";

function getData(data) {
  const temp = [];
  for (const key in data) {
    temp.push(data[key]);
  }
  return temp;
}

async function findCardFromId(id, username) {
  const response = await fetch(`${url}/goals/${username}.json`);
  const data = await response.json();
  let tofind = "";
  for (const key in data) {
    if (data[key].id === id) {
      tofind = key;
    }
  }

  return { firebaseName: tofind, card: data[tofind] };
}

export { getData, findCardFromId };
