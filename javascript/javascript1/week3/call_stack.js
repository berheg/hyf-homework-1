const watchFirstEpisode = function() {
    // Call stack #4 - watchFirstEpisode: string 1-4
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
    // Call stack #3 - watchBreakingBad: string 9
    watchFirstEpisode();
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    // Call stack #2 - watchBreakingBad: string 6-11
    goForARun();
    // Call stack #5 - goForARun: string 13-15
    helpStudentsWithHomework();
    // Call stack #6 - helpStudentsWithHomework: string 17-19
    console.log('done for today')
  }
  
  // End of the program, call stack is clear
  finishMondayEvening(watchBreakingBad);
  // Call stack #1 - finishMondayEvening: string 21