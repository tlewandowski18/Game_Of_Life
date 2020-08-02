export default function algorithm(props) {
    const newObj = props.current_gen
    const changeList = []
    Object.keys(newObj).forEach(key => {
        let count = 0
        newObj[key].neighbors.forEach(neighbor => {
            if (newObj[neighbor].isAlive) {
                count++
            }
        })
        if (newObj[key].isAlive && count === 2) {
            return
        } else if (newObj[key].isAlive && count === 3) {
            return
        } else if (!newObj[key].isAlive && count === 3) {
            changeList.push(key)
        } else if (newObj[key].isAlive && count < 2) {
            changeList.push(key)
        } else if (newObj[key].isAlive && count > 3) {
            changeList.push(key)
        }
        else {
            return
        }
    })
    changeList.forEach(key => {
        newObj[key].isAlive = !newObj[key].isAlive
    })
    const newObjString = JSON.stringify(newObj) 
    const oldObjString = JSON.stringify(props.current_gen)
    if (newObjString === oldObjString) {
        return
    }
    props.flipGens()
}