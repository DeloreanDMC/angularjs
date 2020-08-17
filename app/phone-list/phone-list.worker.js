let phones;

function reduce(action) {
  switch (action.type) {
    case "INIT":
      phones = action.payload;
      break;
    case "SORT":
      let dir = 1;
      let sortKey = action.payload;
      if (action.payload[0] === "-") {
        dir = -1;
        sortKey = sortKey.slice(1);
      }

      phones = phones.sort(
        (a, b) =>
          (+(a[sortKey] > b[sortKey]) - +(a[sortKey] < b[sortKey])) * dir
      );
      postMessage(phones);
      break;
    case "FILTER":
      const substring = action.payload;
      const newPhones = phones.filter(
        (phone) => {
          return phone.name.includes(substring);
        }
        // Object.values(phone).some((el) => el.toString().includes(substring))
      );
      postMessage(newPhones);
      break;
  }
}

//postMessage(newArr);

addEventListener("message", function ({ data }) {
  reduce(data);
});
