process.stdin.on('data', function (data)  {
    let num = Number(data.toString().trim()); // convert data input into a number do not change anything here. Do not remove this line.
    var value = 1;
    
    for (let i = 1; value <= num; i = i++) {
        console.log(value);
        value = value + i;
    }
  
    process.exit();  // stops the process do not remove
  });// do not remove
  