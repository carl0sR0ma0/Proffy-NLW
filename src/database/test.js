const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "Carlos Romão",
    avatar: "https://avatars3.githubusercontent.com/u/44208900?s=460&u=ca733790d0f00277ecec02f1c0e0df5f763cb228&v=4",
    whatsapp: "16997009775",
    bio: "Mestre em Matemática, fera em Cálculos",
  }

  classValue = {
    subject: 7,
    cost: "35",
    // O proffy_id virá pelo banco de dados
  }

  classScheduleValues = [
    // O class_id virá pelo banco de dados, após cadastrarmos a class
    {
      weekday: 4,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 6,
      time_from: 520,
      time_to: 1020,
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues })
  // Consultar dados inseridos

  // Todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  // Consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectedClassesAndProffys)

  // O horário que a pessoa trabalha, por exemplo é das 8h - 18h
  // se a pessoa trabalha do time_from (8h) precisa ser menro ou igual ao horário solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "6"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
  `)
  // console.log(selectClassesSchedules)
})