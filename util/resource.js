export const section = [
  {
    sectionName: "B",
    benchCount: 9,
    seatCounr: 3,
  },
  {
    sectionName: "C",
    benchCount: 9,
    seatCounr: 3,
  },
  {
    sectionName: "D",
    benchCount: 8,
    seatCounr: 3,
  },
  {
    sectionName: "E",
    benchCount: 9,
    seatCounr: 3,
  },
  {
    sectionName: "F",
    benchCount: 9,
    seatCounr: 4,
  },
  {
    sectionName: "G",
    benchCount: 9,
    seatCounr: 3,
  },
];


function selectRandomPairs(array) {
    const numPairs = 3;
    const selectedPairs = [];
  
    for (let i = 0; i < numPairs; i++) {
      const randomIndex = Math.floor(Math.random() * (array.length - 1));
      const pair = [array[randomIndex], array[randomIndex + 1]];
  
      selectedPairs.push(pair);
    }
  
    return selectedPairs;
  }
  
  
  // Call the function to select random pairs
  const randomPairs = selectRandomPairs(section);
  
  // Log the selected random pairs
  console.log(randomPairs);
  
