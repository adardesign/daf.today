import React, { useState, useEffect } from 'react'
import Hebcal from 'hebcal'

const getGurrentDaf = () => {
  const HDateInstance = new Hebcal.HDate()
  const currentDaf = HDateInstance.dafyomi()
  let currentDafHebrew = HDateInstance.dafyomi('h')
  console.log(currentDaf)
  console.log(currentDafHebrew)
  const map = {
    Berachot: 'Berachos',
    Shabbat: 'Shabbos',
    Eruvin: 'Eruvin',
    Ps: 'Eruvin',
  }
  let [mesechta, daf] = currentDaf.split(' ')
  currentDafHebrew = currentDafHebrew.replace("'", '')
  mesechta = map[mesechta.trim()] || mesechta
  return { mesechta, daf, currentDafHebrew }
}

const Daf = () => {
  const [currentDaf, setCurrentDaf] = useState('')
  useEffect(() => {
    setCurrentDaf(getGurrentDaf())
    // Update the document title using the browser API
  }, [])

  return (
    <>
      {currentDaf && (
        <>
          <h1>Todays Daf</h1>
          <h2>
            {currentDaf.mesechta} {currentDaf.daf} -{' '}
            {currentDaf.currentDafHebrew}
          </h2>
          <img
            src={`https://www.dafyomi.org/edafnew/${currentDaf.mesechta}/${currentDaf.daf}a.jpg`}
          />
          <img
            src={`https://www.dafyomi.org/edafnew/${currentDaf.mesechta}/${currentDaf.daf}b.jpg`}
          />
        </>
      )}
    </>
  )
}

export default Daf
