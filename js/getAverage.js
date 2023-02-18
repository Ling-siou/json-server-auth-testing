export const getAverage = (arrData, key) => {
    // 1. 檢查是不是 arr, 不執行
    if ( !Array.isArray(arrData) ){
        return false
    }
    // 2. 累加數據
    const all = arrData.reduce((a, b) => {
        return a + parseInt(b[key])
    }, 0)
    // 3. 回傳平均
    return Math.round(all/arrData.length * 10)/10
}