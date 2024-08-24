function checagemDoTriang(ladoA, ladoB, ladoC) {
    if (ladoA >= ladoB + ladoC || ladoB >= ladoA + ladoC || ladoC >= ladoA + ladoB) return 'none';
    else
      switch (true) {
        case ladoA === ladoB && ladoB === ladoC:
          return 'equilateral';
        case ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC:
          return 'scalene';
        default:
          return 'isosceles';
    }
}
console.log(checagemDoTriang(3,3,4));