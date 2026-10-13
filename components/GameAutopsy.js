// Bagian "bedah game" untuk satu game.
// Isinya: alur bermain (core loop), mekanik utama, analisis MDA, dan kekurangan.
export default function GameAutopsy({ autopsy }) {
  return (
    <div className="autopsy">
      <p>{autopsy.summary}</p>

      <h4 className="autopsy-heading">Alur bermain (core loop)</h4>
      <ol className="loop-list">
        {autopsy.loop.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="autopsy-note">{autopsy.loopNote}</p>

      <h4 className="autopsy-heading">Mekanik utama</h4>
      <div className="mechanic-list">
        {autopsy.mechanics.map((mechanic) => (
          <article key={mechanic.name} className="mechanic-card">
            <h5>{mechanic.name}</h5>
            <p className="mechanic-label">Cara kerja</p>
            <p>{mechanic.how}</p>
            <p className="mechanic-label">Kenapa bikin seru</p>
            <p>{mechanic.impact}</p>
          </article>
        ))}
      </div>

      <h4 className="autopsy-heading">Dari mekanik ke rasa seru (MDA)</h4>
      <div className="mda-table" role="table">
        <div className="mda-row mda-head" role="row">
          <span role="columnheader">Mekanik</span>
          <span role="columnheader">Dinamika saat dimainkan</span>
          <span role="columnheader">Rasa yang muncul</span>
        </div>
        {autopsy.mda.map((row) => (
          <div key={row.mechanic} className="mda-row" role="row">
            <span role="cell" data-label="Mekanik">
              {row.mechanic}
            </span>
            <span role="cell" data-label="Dinamika">
              {row.dynamic}
            </span>
            <span role="cell" data-label="Rasa" className="mda-aesthetic">
              {row.aesthetic}
            </span>
          </div>
        ))}
      </div>

      <h4 className="autopsy-heading">Yang masih kurang</h4>
      <ul className="flaw-list">
        {autopsy.flaws.map((flaw) => (
          <li key={flaw.title}>
            <strong>{flaw.title}.</strong> {flaw.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
