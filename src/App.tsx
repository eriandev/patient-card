import { useState } from 'react'

import { PatientCard } from './components/PatientCard'
import './App.css'

export function App() {
  const [age, setAge] = useState('45')
  const [name, setName] = useState('John Doe')
  const [diagnosis, setDiagnosis] = useState('Hipertensión')
  const [moreDetailsText, setMoreDetailsText] = useState('Más detalles')

  const handleMoreDetails = () => {
    alert(moreDetailsText)
  }

  return (
    <div className="container">
      <section className="section">
        <h1 className="title is-1 has-text-primary has-text-centered mb-6">
          <span className="columns is-centered">
            <span>Patient Card Demo</span>
          </span>
        </h1>

        <section className="columns is-centered mb-6">
          <PatientCard
            age={age}
            diagnosis={diagnosis}
            name={name || 'John Doe'}
            onMoreDetails={handleMoreDetails}
          />
        </section>

        <section className="columns is-centered">
          <div className="column is-half">
            <div className="control mb-4">
              <p>Nombre:</p>
              <input className="input" type="text" placeholder="John Doe" onChange={({ target }) => setName(target.value)} />
            </div>
            <div className="control mb-4">
              <p>Edad:</p>
              <input className="input" type="text" placeholder="45" onChange={({ target }) => setAge(target.value)} />
            </div>
            <div className="control mb-4">
              <p>Diagnóstico:</p>
              <input className="input" type="text" placeholder="Hipertensión" onChange={({ target }) => setDiagnosis(target.value)} />
            </div>
            <div className="control mb-4">
              <p>Texto de más detalles:</p>
              <input className="input" type="text" placeholder="Más detalles" onChange={({ target }) => setMoreDetailsText(target.value)} />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
