LOCATIONS = [
  {
    id: 1,
    name: "Almaty",
    videoId: "p5ytb4W5ywU",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 0,
  },
  {
    id: 2,
    name: "Nur-Sultan",
    // https://www.youtube.com/watch?v=Ay96SofAAjQ
    videoId: "Ay96SofAAjQ",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 0,
  },
  {
    id: 3,
    name: "Shymkent",
    videoId: "DVa7ek45HcI",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },
  {
    id: 5,
    name: "Atyrau",
    videoId: "IJUdI7QrUaA",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 10,
  },
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
  {
    id: 4,
    name: "Oral",
    videoId: "bORUZdBuP4U",
    radio: {
      url: "https://qazradio.fm/kz/live/",
      name: "QAZ",
    },
    startTime: 15,
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
  toggleActiveClassOnLocation(location.id);
  playVideo(location);
}
