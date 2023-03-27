interface DivisiItemProps {
  icon: "kaligrafi" | "tilawah" | "tahfidz" | "hadroh";
  title: string;
  desc: string;
}
export default function DivisiItem(props: DivisiItemProps) {
  const { icon, title, desc } = props;
  return (
    <div className="col-lg-3">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          className="mb-30"
          width={80}
          height={80}
          alt="icon Divisi"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">{desc}</p>
      </div>
    </div>
  );
}
