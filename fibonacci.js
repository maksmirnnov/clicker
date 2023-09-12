function fibonacciEvenValueSum(){
    let seq = [1, 1]
    let summ = 0

    while(seq[seq.length-1] + seq[seq.length-2] <= 7_000_000){
        seq.push(seq[seq.length-1] + seq[seq.length-2])
    }

    for(num of seq){
        summ += num %2 === 0 ? num : 0
    }

    return(summ)
}

fibonacciEvenValueSum()
