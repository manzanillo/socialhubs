'use strict'
var Cohen = require('./cohen.js')

const tester = {
  firstname: 'Tom',
  lastname: 'Meisterman',
  position: 2,
  experience: 3,
  job: 5,
  temparatur: 2,
  volume: 1,
  labortype: 3
}
const prepTester = {
  position: tester.position,
  experience: tester.experience,
  job: tester.job,
  temparatur: tester.temparatur,
  volume: tester.volume,
  labortype: tester.labortype
}
const rooms = ['A', 'B', 'C', 'D', 'I', '1', '2', '3', '4', '5']
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

function dataGenerate() {
  return [
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
}
module.exports.calculate = async (event, context) => {
  let prepEl1 = {}
  let datArray = []
  const data = await dataGenerate()
  const room = rooms[Math.floor(Math.random() * rooms.length)]

  data.map(e1 => {
    prepEl1 = {
      position: e1.position,
      experience: e1.experience,
      job: e1.job,
      temparatur: e1.temparatur,
      volume: e1.volume,
      labortype: e1.labortype
    }

    let kL = Cohen.kappa(tester, prepEl1, 10, 'squared')
    datArray.push({
      firstname: e1.firstname,
      lastname: e1.lastname,
      value: kL,
      room
    })
    // console.log(kL)
    // console.log(
    //   `${tester.firstname} ${tester.lastname} hat mit ${e1.firstname} ${
    //     e1.lastname
    //   } einen KappaCoef von ${kL}`
    // )
  })
  datArray.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0))

  const reArray = [datArray[datArray.length - 1], datArray[datArray.length - 2]]
  // return { [datArray[datArray.length - 1], datArray[datArray.length - 2]] }
  // console.log(data)
  // console.log('Linear weights: ' + kL) // Should be 0.028 (rounded to .03).
  // console.log('Squared weights: ' + kS) // should be 0.167.
  // console.log('Unweighted: ' + kU) // Should be -0.14. All confirmed with kappa_script.R.
  //   return new Promise((resolve, reject) => {
  //     reArray
  //       ? resolve({
  //           statusCode: 200,
  //           body: JSON.stringify({
  //             data: reArray
  //           })
  //         })
  //       : reject(new Error('pech'))
  //   })
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    },
    body: JSON.stringify({
      data: reArray
    })
  }
}
