export const minutesToMilliseconds = (minute: string) => {
    let [minutes, seconds] = minute.split(":")
    return (+minutes*(60000)) + (+seconds*1000)
}