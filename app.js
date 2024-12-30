const axios = require("axios");

// function main() {
//   fetch("https://dummyjson.com/todos?limit=3&skip=10").then(async (res) => {
//     // without await  json will have promise pending got logged
//     const json = await res.json();
//     console.log(json);
//     console.log(json.todos.length);
//   });
// }
// main();

// async function main1() {
//   const response = await axios.get(
//     "https://dummyjson.com/todos?limit=3&skip=10"
//   );
//   //   get the final data in response.data
//   console.log(response.data.todos);
//   //   console.log(response.todos.length);
// }
// main1();

//POST

function main21() {
  fetch("https://httpdump.app/dumps/9ebd9e49-b33a-4980-817f-beae236977cc", {
    method: "POST",
    body: JSON.stringify({
      title: " hi there Have a football scrimmage with some friends",
      userId: 90,
    }),
  }).then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}
// main21();

// async function main1() {
//   const response = await axios.post(
//     "https://httpdump.app/dumps/9ebd9e49-b33a-4980-817f-beae236977cc",
//     JSON.stringify({
//       title: " hi there Have a football scrimmage with some friends",
//       userId: 90,
//     })
//   );

//   console.log(response.data);
//   //   console.log(response.todos.length);
// }
// main1();

// headers

function main22() {
  fetch("https://httpdump.app/dumps/9ebd9e49-b33a-4980-817f-beae236977cc", {
    method: "POST",
    body: JSON.stringify({
      title: "hi there Have a football scrimmage with some friends",
      userId: 9,
    }),
    headers: { Authorization: "Bearer 3434" },
  }).then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}
main22();

async function main43() {
  const response = await axios.post(
    "https://httpdump.app/dumps/9ebd9e49-b33a-4980-817f-beae236977cc",
    JSON.stringify(
      {
        title: "hi there Have a football scrimmage with some friends",
        userId: 8,
      },
      {
        headers: {
          Authorization: "Bearer 7gdf88",
        },
      }
    )
  );

  console.log(response.data);
  //   console.log(response.todos.length);
}
// main43();
