const firstname = [
  'Thomas',
  'Franz',
  'Sarah',
  'Lisa',
  'Rene',
  'Max',
  'Stefan',
  'Luisa',
  'Johanna',
  'Laura',
  'Anatoli',
  'Diana',
  'Frank',
  'Sebastian',
  'Ursula',
  'Michael',
  'Helga',
  'Andreas',
  'Sabine',
  'Werner',
  'Erika',
  'Horst',
  'Getrud',
  'Manfred',
  'Gehard',
  'Heinz',
  'Wolfgang'
]
const lastname = [
  'Müller',
  'Maier',
  'Hofmann',
  'Baumann',
  'Schmid',
  'Höger',
  'Weber',
  'Kretel',
  'Walt',
  'Kalysch',
  'Seegerer',
  'Schmidt',
  'Hambuger',
  'Höfer',
  'Fischer',
  'Wagner',
  'Schultze',
  'Krause',
  'Huber',
  'Fuchs',
  'Lang',
  'Möller',
  'Weiß',
  'Jung'
]
const position = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6]
const experience = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  3,
  3,
  4,
  6,
  4,
  7,
  8,
  9,
  10
]
const job = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]
const temparatur = [1, 2, 3, 4]
const volume = [1, 2, 3, 4]
const labortype = [1, 2, 3, 4]

var data = [
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  },
  {
    firstname: firstname[Math.floor(Math.random() * firstname.length)],
    lastname: lastname[Math.floor(Math.random() * lastname.length)],
    position: position[Math.floor(Math.random() * position.length)],
    experience: experience[Math.floor(Math.random() * experience.length)],
    job: job[Math.floor(Math.random() * job.length)],
    temparatur: temparatur[Math.floor(Math.random() * temparatur.length)],
    volume: volume[Math.floor(Math.random() * volume.length)],
    labortype: labortype[Math.floor(Math.random() * labortype.length)]
  }
]

exports.data = data
