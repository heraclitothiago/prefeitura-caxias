const editables = document.querySelectorAll('span')
editables.forEach(el => el.setAttribute("contenteditable", true))

const createCheckbox = (fatherEl) => {
    const textEl = fatherEl.innerText

    const forbiden = fatherEl.dataSet
    if (textEl == '') {
        return
    }
    fatherEl.innerText = ''

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    const label = document.createElement('label')
    label.innerText = textEl
    label.htmlFor = textEl.toLowerCase().replace(/\s/gim, '-')

    fatherEl.appendChild(checkbox)
    fatherEl.appendChild(label)

}

document.querySelectorAll('td').forEach(el => {
    // console.log(el.dataset.js == 'stop');
    // createCheckbox(el)
})

const today = new Date()
const dataHoje = document.getElementById('data-hoje')
dataHoje.innerText = today.toLocaleDateString() + '.'
const dataEntrada = document.getElementById('data-entrada')
dataEntrada.innerHTML = today.getFullYear()