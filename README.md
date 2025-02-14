# Learn-JavaScript

How to cycle through an Array:

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