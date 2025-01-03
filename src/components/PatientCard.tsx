export interface PatientCard2Props {
  age: string;
  name: string;
  diagnosis: string;
  onMoreDetails: () => void;
}

export function PatientCard ({ name, age, diagnosis, onMoreDetails }: PatientCard2Props) {
  return (
    <article className="card">
      <header className="card-header has-background-primary">
        <p className="card-header-title has-text-white">
          <span className="icon mr-2">
            <i className="fas fa-user-circle"></i>
          </span>
          Información del paciente
        </p>
      </header>

      <div className="card-content pr-6">
        <p className="title is-4">{name}</p>

        <div className="content">
          <p className="subtitle is-6">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-birthday-cake"></i>
              </span>
              <span>
                <strong>Edad: </strong>{age}
              </span>
            </span>
          </p>
          <p>
            <span className="icon-text">
              <span className="icon has-text-danger">
                <i className="fas fa-heartbeat"></i>
              </span>
              <strong>Diagnóstico: </strong>
              <span>
                {diagnosis}
              </span>
            </span>
          </p>
        </div>
      </div>

      <footer className="card-footer">
        <button className="card-footer-item button is-primary is-light" onClick={onMoreDetails}>
          <span className="icon">
            <i className="fas fa-info-circle"></i>
          </span>
          <span>Más detalles</span>
        </button>
      </footer>
    </article>
  )
}
