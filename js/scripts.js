const dobInput = document.getElementById('dob')
const calcBtn = document.getElementById('calcBtn')
const ageResult = document.getElementById('ageResult')
let dobError = document.getElementById('dob-error')

function ageCalculate() {
    dobError.textContent = ''
    const today = new Date()
    const dob = new Date(dobInput.value)

    let ageYear = today.getFullYear() - dob.getFullYear()
    let ageMonth = today.getMonth() - dob.getMonth()
    let ageDate = today.getDate() - dob.getDate()

    if(dob > today) {
        dobError.textContent = `Age can't be in future`
        return
    }

    ageResult.textContent = `${ageYear} years, ${ageMonth} months, and ${ageDate} days old.`
}

calcBtn.addEventListener('click', ageCalculate)