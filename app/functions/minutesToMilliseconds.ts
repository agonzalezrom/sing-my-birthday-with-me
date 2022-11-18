
export const minutesToMilliseconds = (timestamps: Array<string>, line: number) => {
    const timers = []
    timestamps.forEach((time: string)=>{
        let [minutes, seconds] = time.split(":")
        timers.push((+minutes*(60000)) + (+seconds*1000))
    })
    if(line === 0)
        return timers[0]

    return timers[line] - timers[line-1]
}