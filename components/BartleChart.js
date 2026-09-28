import { bartleTypes } from "@/data/bartle";

// Menampilkan skor Bartle sebuah game dalam bentuk grafik batang horizontal.
// Props "scores" berisi objek seperti { achiever: 80, explorer: 35, ... }.
export default function BartleChart({ scores }) {
  return (
    <div className="bartle-chart">
      {bartleTypes.map((type) => {
        const value = scores[type.key];

        return (
          <div key={type.key} className="bartle-row">
            <span className="bartle-label">{type.name}</span>

            {/* Lebar batang diatur lewat style sesuai nilai skornya */}
            <div className="bartle-track">
              <div
                className="bartle-fill"
                style={{ width: `${value}%`, background: type.color }}
              />
            </div>

            <span className="bartle-value">{value}%</span>
          </div>
        );
      })}
    </div>
  );
}
