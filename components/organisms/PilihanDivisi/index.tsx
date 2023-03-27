import DivisiItem from "../../melecules/DivisiItem";

export default function PilihanDivisi() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Terdapat Divisi
          <br />
          Didalamnya
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <DivisiItem
            icon="kaligrafi"
            title="Kaligrafi"
            desc="meningkatkan kualitas dalam bertilawah"
          />
          <DivisiItem
            icon="tilawah"
            title="Tilawah"
            desc="meningkatkan kualitas dalam bertilawah"
          />
          <DivisiItem
            icon="tahfidz"
            title="Tahfidz"
            desc="Hafalan yang bersanad"
          />
          <DivisiItem
            icon="hadroh"
            title="Hadroh"
            desc="Bersholawat dalam kesenian musik masa kini"
          />
        </div>
      </div>
    </section>
  );
}
