//  Nested Loops

    for (let i = 1; i <= 10; i++){
        console.log(`i is equal to ${i}`)
        for (let j = 1; j < 4; j++){
            console.log(`   j is: ${j}`)
        }
        for (let k = 1; k <=2; k++) {
            console.log(`      k is: ${k}`)
        }
    }   

    // Using nested loops for arrays:

    const seating = [
        ['Kristen', 'Erik', 'Namita'],
        ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
        ['Yuma', 'Sakura', 'Jack', 'Ericka']
    ]

    for (let s = 0; s <seating.length; s++){
        console.log(seating[s])
    }

    // Same as above but now using a nested loop:

    const seatingChart = [
        ['Kristen', 'Erik', 'Namita'],
        ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
        ['Yuma', 'Sakura', 'Jack', 'Ericka']
    ]

    for (let c = 0; c < seatingChart.length; c++) {
        const row = seating[c]
        console.log(`Row ${c +1}`)
        for (let d = 0; d < row.length; d++){
            console.log(row[d])
        }
    }

    