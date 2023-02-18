export const getTimeStr = (time, dateDash = '/') => {
    const timeData = new Date(time);
    const month = timeTowDigits(timeData.getMonth(), 'month')
    const date = timeTowDigits(timeData.getDate(), 'date')
    const hours = timeTowDigits(timeData.getHours(), 'hours')
    const minutes = timeTowDigits(timeData.getMinutes(), 'minutes')
    return {
        date: `${timeData.getFullYear()}${dateDash}${month}${dateDash}${date}`,
        time: `${hours}:${minutes}`
    }
}

const timeTowDigits = (num, type) => {
    return (type === 'week' || type === 'month') 
    ? addZeroOnStar(num + 1)
    : addZeroOnStar(num)
}

const addZeroOnStar = (num) => (num.toString().length === 1) ? `0${num}` : `${num}`