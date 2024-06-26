const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };
  
  const getGameInfo = (userId) => {
    if (!userId) {
      userId = Math.random().toString(16).slice(2, 8);
    }
  
    return {
      userId,
      width: getRandomInt(10, 20),
      height: getRandomInt(4, 10),
      maxMoves: getRandomInt(8, 20),
      target: [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)],
    };
  };