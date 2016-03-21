'use strict';

// Code here.

// Create an array for each line
const subwayLines = {
  Red: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife',
  ],
  Green: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore',
  ],
  Orange: [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills',
  ],
};

const stopNumber = (stop, line) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === stop) {
      return i;
    }
  }

  return 0;
};

const stopsOnOneLine = (line, start, end) => {
  let stops =
    stopNumber(start, subwayLines[line]) -
    stopNumber(end, subwayLines[line]);

  return stops < 0 ? -stops : stops;
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let stops = 0;
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation);
  } else {
    stops = stopsOnOneLine(startLine, startStation, 'Park Street') +
      stopsOnOneLine(endLine, endStation, 'Park Street');
  }

  return stops;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
