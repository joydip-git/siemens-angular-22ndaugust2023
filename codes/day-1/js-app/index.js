//window.alert('hello')
function changeTextData() {
    //window.alert('hello')

    //fetching data from UI
    var inputElement = document.getElementById('txtText')
    var newText = inputElement.value

    //passing data to UI
    var h2Element = document.getElementById('headerWelcome')
    h2Element.innerHTML = '<i>' + newText + '</i>'
}