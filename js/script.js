const get = () => {
    const text = document.querySelector("#gets").value;
    if(text == '') {
        alert("Please Enter Number")
    } else {
        alert('Length : ' + `${text.length}`)
    }
}