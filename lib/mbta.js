'use strict';

let mbta = {
  redLine : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
	greenLine : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
	orangeLine : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
};

//console.log("index of start station" + mbta['greenLine'].indexOf('Government Center'));

const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
	let numberOfStops = 0;
	if (startLine === endLine) {
    numberOfStops = Math.abs(mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation));
   	return numberOfStops;
   }
   else {
     let numberOfStopsToPark = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'));
     let numberOfStopsFromPark = Math.abs(mbta[endLine].indexOf('Park Street') - mbta[endLine].indexOf(endStation));
     numberOfStops = numberOfStopsFromPark + numberOfStopsToPark;

    return numberOfStops;

   }

	};

console.log(stopsBetweenStations('greenLine', 'Copley','redLine','Central'));


// const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
//
// 	if (startLine == endLine) {
//
//       if (startLine == redline) {
//         let indexStartStation = redline.indexOf(startStation);
//         let indexEndStation = redline.indexOf(endStation);
//         let howManyStops = indexEndStation - indexStartStation;
//         let positiveResult = Math.abs(howManyStops);
//         console.log(positiveResult);
//
//       }
//       else if (startLine == greenline) {
//         let indexStartStation = greenline.indexOf(startStation);
//         let indexEndStation = greenline.indexOf(endStation);
//         let howManyStops = indexEndStation - indexStartStation;
//         let positiveResult = Math.abs(howManyStops);
//         console.log(positiveResult);
//
//       }
//       else if (startLine == orangeline) {
//         let indexStartStation = orangeline.indexOf(startStation);
//         let indexEndStation = orangeline.indexOf(endStation);
//         let howManyStops = indexEndStation - indexStartStation;
//         let positiveResult = Math.abs(howManyStops);
//         console.log(positiveResult);
//       }
//       }
//
//    else if (startLine !== endLine) {
//    console.log("You changed lines");
//    			if (startLine == redline && endLine == greenline) {
//         	console.log("You changed from redline to greenline");
//         	let indexStartStation = redline.indexOf(startStation);
//           let indexChangeStation = redline.indexOf('Park Street');
//           let howManyStopsToChangeStation = indexChangeStation - indexStartStation;
//           let howManyStopsToChangeStationPositive = Math.abs(howManyStopsToChangeStation);
//           console.log("You need: " + howManyStopsToChangeStation + " station/stations to get to Park Street.");
//           let indexEndStation = greenline.indexOf(endStation);
//           let howManyStopsFromChangeStation = indexChangeStation - indexEndStation;
//           let howManyStopsFromChangeStationPositive = Math.abs(howManyStopsFromChangeStation);
//           console.log("And you need: " + howManyStopsFromChangeStationPositive + " station/stations to get to your final Destination.");
//           let howManyStops = howManyStopsToChangeStationPositive + howManyStopsFromChangeStationPositive;
//           console.log("In total you will have to stop: " + howManyStops + "times. Have a good trip.");
//         }
//         else if (startLine == redline && endLine == orangeline) {
//         console.log('you changed from red to organge');
//         }
//    }
//
// };
//
//
// stopsBetweenStations(redline, 'South Station', greenline, 'Kenmore');
module.exports = {
  stopsBetweenStations,
  stretch: false,
};
