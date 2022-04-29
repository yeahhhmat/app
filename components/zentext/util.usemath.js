function reverseNumberIfNegative(num) {
  if(num < 0) {
    return parseInt(num.toString().substring(1))
  }
  if(isNaN(num)) {
    return 100
  }
  return num;
}

function between(x, {min,max}) {
  return Boolean(x >= min && x <= max);
}

function percent(percentOf,num) {
  return (percentOf / 100) * num
}

function rangeToPercent(number, {min, max}){
  return ((number - min) / (max - min));
}

function percentToRange(percent, {min, max}) {
  return((max - min) * percent + min);
}

/**
 * - `startingPos`
 *    coverts to a pixel value & is
 *    starting position on screen
* -  `pos`
 *    coverts to a pixel value & is
 *    current position on screen
 * - `availableHeight`
 *    converts to pixel value, 
 *    is the range of how far to span in a single cycle
 * - `beginPeak` 
 *    is a percentage value & should be someWinhere between 1-100, 
 *    but less than `endPeak`
 * - `endPeak` 
 *    is a percentage value & should be someWinhere between 1-100, 
 *    but greater than `beginPeak`
 * @param {{startingPos:Number;pos:Number;availableHeight:Number;beginPeak:Number,endPeak:Number}} config 
 */
export function ewGrossMath({
  startingPos,
  pos,
  availableHeight,
  beginPeak,
  endPeak
}) {
  if(!startingPos) { return console.error('No Starting position was passed to eWinGrossMath')};
  if(!pos) { return console.error('No position was passed to eWinGrossMath')};
  /*  
      if we set 2000 as the `scrollable`
      we should be able to see the opacity grow and reach full 'opacity'
      someWinhere near the 800 range - or let's say 40%
      'opacity' should peak 100% from 40%-60% (maybe more that doesn't sound long enough..)      
  */
  var aHei = (availableHeight && availableHeight) || 2000; /** availableHeight */
  var bPea = (beginPeak && beginPeak) || 40; /** beginPeak */
  var ePea = (endPeak && endPeak) || 60; /** endPeak */
  

  var range = {
    bWin: startingPos,            /* beginWindow - 1000 for example sake */
    eWin: startingPos + aHei,       /* endWindow - 3000 */
    bRan: (bPea / 100) * aHei,        /* beginRange - e.g 40% */
    eRan: (ePea / 100) * aHei,        /* endRange - e.g 60% */
  }

  var response = {
    pos,
    withinBegin: null,
    withinEnd: null,
  };
  /** within full range */
  if(Boolean(pos >= range.bWin && pos < range.eWin)) {

    /** within begin range */
    if(Boolean(pos >= range.bWin && pos < (range.bRan + range.bWin))) {
      response = {
        range: range,
        ...response, 
        withinBegin: pos, 
        percentage: (pos - range.bWin) * 100 / range.bRan
      }
    }
    
    /** within end range */
    if(Boolean(pos >= (range.eRan + range.bWin) && pos < range.eWin)) {

      console.log(
        // range.bWin // 1000
        // range.eRan + range.bWin, // 2200
        // range.eRan // 1200
        // range.eWin // 3000
        // (pos - range.eWin) 0 - 800
        range.bRan,
        reverseNumberIfNegative((range.eRan + range.bWin) - range.eWin) // 800
      )
      response = {
        ...response, 
        withinEnd: pos, 
        'range.eWin':range.eWin,
        'range.eRan':range.eRan,
        percentage: (pos - range.eWin) * 100 / reverseNumberIfNegative((range.eRan + range.bWin) - range.eWin)
      }
    }

    // if(Boolean(pos > range.eRan && pos < (range.eRan + range.bWin))) {
    //   response = {
    //     ...response,
    //     percentage: 100
    //   }
    // }

    // how to get from 0 - 100 by 800 
    // what is 70% of 800 
    return reverseNumberIfNegative(Math.floor(response.percentage));
  }
}

export function zenable({ startingPos, pos }) {
  if(!startingPos)  {return console.error('No Starting position was passed to zenable')};
  if(!pos)          {return console.error('No position was passed to zenable')};
  
  if (between(pos, {min: 1000, max: 1200})) {
    return '.0';
  }
  // climb
  else if (between(pos, {min: 1200, max: 1800})){
    var totalDistanceToRange = (1800 - 1200);
    var currentPosWithinRange = (1800 - pos);
    var differenceInPercentageBetweenTotalDistanceAndCurrentPos = (
      currentPosWithinRange / totalDistanceToRange * 100
    ).toFixed(0);
    
    var ascend = (100 - differenceInPercentageBetweenTotalDistanceAndCurrentPos)


    return ascend < 10 ? ('.0' + ascend) : ('.' + ascend);
  }
  // middle
  else if (between(pos, {min: 1800, max: 2200})){
    return '1';
  }
  // descend
  else if (between(pos, {min: 2200, max: 2800})){
    var totalDistanceToRange = (2800 - 2200);
    var currentPosWithinRange = (2800 - pos);
    var differenceInPercentageBetweenTotalDistanceAndCurrentPos = (
      currentPosWithinRange / totalDistanceToRange * 100
    ).toFixed(0);
    
    // var ascend = (100 - differenceInPercentageBetweenTotalDistanceAndCurrentPos)


    return (
      differenceInPercentageBetweenTotalDistanceAndCurrentPos < 10
      ? ('.0' + differenceInPercentageBetweenTotalDistanceAndCurrentPos)
      : ('.' + differenceInPercentageBetweenTotalDistanceAndCurrentPos)
    ) ;
  }
}


/**
 *    1200 - 0
 *    1800 - 600 - start      - num
 *POS 1400 - 400 - increase - new number
 
 400 / 600 * 100 = 66.66%
 */