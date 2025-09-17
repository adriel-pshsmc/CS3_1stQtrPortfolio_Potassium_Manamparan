process.stdin.on('data', input => {

    const NUM = Number(input.toString().trim());  
  
      for (i = 0; i < 4; i++) {
          switch(i) {
              case 0:
                  if (NUM % 2 != 1 && NUM > 1 && NUM < 6)
                      console.log("Not Weird");
                      break;
              case 1:
                  if (NUM % 2 != 1 && NUM > 5 && NUM < 21)
                      console.log("Weird");
                      break;
              case 2:
                  if (NUM % 2 != 1 && NUM > 20)
                      console.log("Not Weird");
                      break;
              case 3:
                  if (NUM % 2 == 1)
                      console.log("Weird");
                      break;
          }
      }
    process.exit(); // ends the code
  
  });