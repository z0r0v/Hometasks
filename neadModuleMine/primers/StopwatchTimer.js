let myVariable;

function StopwatchTimer(mode, value) {
  let myVariable2;
  console.log(`mode: ${mode}; myVariable before initialization: ${myVariable}`);
  myVariable = value;
  console.log(`mode: ${mode}; myVariable after initialization: ${myVariable}`);
  
  console.log(`mode: ${mode}; myVariable2 before initialization: ${myVariable2}`);
  myVariable2 = value;
  console.log(`mode: ${mode}; myVariable2 after initialization: ${myVariable2}`);
}

export { StopwatchTimer };
