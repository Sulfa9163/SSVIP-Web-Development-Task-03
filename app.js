function celTOFaren(){
    const celsi = Number(document.getElementById('celsi').value)
    const faren = document.getElementById('result')
    const farenHeit =  (celsi * 9/5) + 32
    result.innerHTML = `FarenHeit is ${farenHeit.toFixed(2)}`
}

