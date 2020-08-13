const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

// Funções
function getSubject(subjectNumber) {
  const positon = +subjectNumber - 1
  return subjects[positon]
}

function converteHoursToMinutes(time) {
  const [ hour, minutes] =  time.split(":")
  return Number((hour * 60) + minutes)
}

function pageRedirect(queryString) {
  window.onload = () => {
    setInterval(() => {
      location.href = "/study" + queryString
    }, 2000);
  }
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  converteHoursToMinutes
}