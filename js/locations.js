LOCATIONS = [
  {
    id: 1,
    name: "Almaty",
    videoId: "p5ytb4W5ywU",
    radio: {
      url:  "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },
  {
    id: 2,
    name: "Nur-Sultan",
    videoId: "4mJyd1Eju6s",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 0,
  },
  {
    id: 3,
    name: "Shymkent",
    // https://www.youtube.com/watch?v=DVa7ek45HcI
    videoId: "DVa7ek45HcI",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },
  // https://www.youtube.com/watch?v=bORUZdBuP4U
  {
    id: 4,
    name: "Uralsk",
    videoId: "bORUZdBuP4U",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },
  // https://www.youtube.com/watch?v=IJUdI7QrUaA
  // Atyrau
  {
    id: 4,
    name: "Atyrau",
    videoId: "IJUdI7QrUaA",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },

  // https://www.youtube.com/watch?v=-7Poq8OS8X4
  {
    id: 6,
    name: "Kyzylorda",
    videoId: "-7Poq8OS8X4",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },
];

function chooseRandomLocation() {
  const availableLocations = LOCATIONS.filter(({ id }) =>
    state.currentLocation ? state.currentLocation.id !== id : true
  );

  return availableLocations[
    Math.floor(Math.random() * availableLocations.length)
  ];
}

function changeLocation(locationId) {
  if (state.currentLocation && locationId == state.currentLocation.id) return;

  changeLoadingState(true);

  const location = LOCATIONS.find((location) => location.id == locationId);

  state.currentLocation = location;

  changeLocationText(location.name);
  changeVideoSource(location.videoId);
  changeRadio(location.radio);
  toggleActiveClassOnLocation(location.id);
  playVideo(location);
}
