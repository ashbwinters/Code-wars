// Find the Outlier KYU 6

function findOutlier(integers){
  const odds = []
  const evens = []
    
  function sortInts(num) {
    return (num % 2) == 0 ? evens.push(num) : odds.push(num)
  }
    
  integers.map(num => sortInts(num))
    
  return odds.length == 1 ? odds[0] : evens[0]
}

//   Dubstep KYU 6

function songDecoder(song) {
  return song.replace(/WUB/g, " ").replace(/\s+/g, " ").trim()
}

// List Filtering

function filter_list(l) {
  return l.filter( element => Number.isInteger(element))
}

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a, b) => a - b)
  return sorted[0] + sorted[1]
}