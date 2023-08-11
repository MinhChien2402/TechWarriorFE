const form = document.getElementById('form-add-player')
form.addEventListener('submit', (e) => handleSubmit(e))

const handleSubmit = (e) => {
    e.preventDefault()
    let clubId = form.querySelector('#club option:checked').value
    let playerId = form.querySelector('#player option:checked').value
    let countryId = form.querySelector('#country option:checked').value
}