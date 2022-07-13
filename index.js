// soal 1
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// soal 2
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// soal 3
function printDigitValue(value) {
    let number = ""
    for (i = 0; i < value.length; i++) {
        if (value[i] >= 0 && value[i] <= 9) {
            number += value[i];
        }
    }
    console.log(number);
    for (i = 0; i < number.length; i++) {
        let printLine = number[i];
        for (j = i; j < number.length - 1; j++) {
            printLine += "0";
        }
        console.log(printLine);
    }
}

// soal 4
function swapNumber(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

// soal 5
function tulisBilangan(n) {
    if (n > 100) {
        return "Silahkan masukkan biangan 1-100"
    }
    const digit = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
    const imbuhan = ["", "puluh", "ratus"];
    let result = "";
    let i = 0;
    while (n > 0) {
        let digitNow = n % 10;
        if (digitNow > 0) {
            if (n === 1) {
                if (i < 1) {
                    result = digit[n];
                } else {
                    if (result === "") {
                        result = "se" + imbuhan[i];
                    } else if (result === "satu ") {
                        result = "sebelas"
                    } else result += "belas";
                }
            } else result = digit[digitNow] + imbuhan[i] + " " + result;
        }
        n = Math.floor(n / 10);
        i++;
    }
    return result;
}

// soal 6
const arrayEnam = [1, 4, 7, 9, 12];
function getBetween(array, low, high) {
    let result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] >= low && array[i] <= high) {
            result.push(array[i]);
        }
    }
    return result;
}

// soal 7
function countBetween(array, low, high) {
    const number = getBetween(array, low, high);
    return number.length;
}

// soal 8
function eduWork(n) {
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("EduWork");
        } else if (i % 3 === 0) {
            console.log("Edu");
        } else if (i % 5 === 0) {
            console.log("Work");
        } else {
            console.log(i);
        }
    }
}

// soal 9
const arraySembilan = [4, 2, 6, 88, 3, 11]
function getLowHigh(array) {
    let low = array[0];
    let high = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < low) {
            low = array[i];
        } else if (array[i] > high) {
            high = array[i];
        }
    }
    return "low: " + low + " high: " + high;
}

// soal 10
function kabisat(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return year + " adalah tahun kabisat";
    } else {
        return year + " bukan tahun kabisat";
    }
}


// console.log(factorial(5));
// console.log(reverseString("hello"));
// printDigitValue("9.86-A5.321");
// console.log(swapNumber(1, 2));
// console.log(tulisBilangan(14));
// console.log(getBetween(arrayEnam, 3, 11));
// console.log(countBetween(arrayEnam, 3, 11));
// eduWork(15)
// console.log(getLowHigh(arraySembilan))
// console.log(kabisat(2021));