function correct(string){
  const arr = string.split("");
    const res = [];
      for (i = 0; i < arr.length; i++){
        if(arr[i] === '5') {
          res.push('S')
        } else if (arr[i] === '0') {
          res.push('O')
        } else if (arr[i] === '1') {
          res.push('I')
        } else {
          res.push(arr[i])
        }
      }
return res.join("");
}


console.log(correct("L0ND0N")) //> "LONDON"
console.log(correct("DUBL1N")) //> "DUBLIN"
console.log(correct("51NGAP0RE")) //> "SINGAPORE"
console.log(correct("BUDAPE5T")) //> "BUDAPEST"
console.log(correct("PAR15")) //> "PARIS"