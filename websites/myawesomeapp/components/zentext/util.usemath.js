function between(x, {min,max}) {
  return Boolean(x >= min && x <= max);
}

export function zenable({ startingPos, pos }) {
  if(!startingPos)  {return console.error('No Starting position was passed to zenable')};
  if(!pos)          {return console.error('No position was passed to zenable')};
  
  if (between(pos, {min: 1000, max: 1200})) {
    return '0';
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
