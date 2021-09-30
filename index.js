function hashTwoSum(array, sum) {
    let solutions = []
    let tracker = {}
    for(let i = 0; i < array.length; i++) {

        let diff = sum - array[i]

        if(tracker[diff]) {
            solutions.push([diff, array[i]])
        } else {
            tracker[array[i]] = true
        }
    }

    return solutions
}


function bruteForceTwoSum(array, sum) {
    let solutions = []
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] == sum) {
                solutions.push([array[i], array[j]])
            }
        }
    }

    return solutions
}

function binarySearchTwoSum(array, sum) {
    let sorted = array.sort()
    let solutions = []

    for(let i = 0; i < sorted.length; i++) {
        let diff = sum - sorted[i]
        if(binarySearch(sorted.slice(i +1), diff)) {
            solutions.push([sorted[i], binarySearch(sorted.slice(i +1), diff)])
        }
    }
    return solutions
}

function binarySearch(array, num) {
    let mid = parseInt(array.length / 2)
    if(num > array[mid]) {
        return binarySearch(array.slice(mid + 1), num)
    } else if (num < array[mid]) {
        return binarySearch(array.slice(0, mid), num)
    } else if (num == array[mid]) {
        return num
    }
}

function binaryMatch(array, num) {
    console.log('hello')
    if(array.length == 1 && array[0] != num) {
        return false
    }
    let mid = parseInt(array.length / 2)
    if(num > array[mid]) {
        return binaryMatch(array.slice(mid + 1), num)
    } else if (num < array[mid]) {
        return binaryMatch(array.slice(0, mid), num)
    } else if (num == array[mid]) {
        return true
    }
}