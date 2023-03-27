import Link from "next/link";

interface BlogItemsProps {
  title: string;
  date: string;
  thumbnail: "Thumbnail-1" | "Thumbnail-2" | "Thumbnail-3" | "Thumbnail-4";
}

export default function BlogItem(props: BlogItemsProps) {
  const { title, date, thumbnail } = props;
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-0 mt-4">
      <Link href="/detail">
        <a>
          <img src={`/img/${thumbnail}.png`} className="img-fluid" alt="" />
        </a>
      </Link>

      <div className="d-block">
        <h3 className="text-md text-custom text-start mb-10 mt-3">{title}</h3>
        <p className="text-sm color-palette-2 text-start mb-0">{date}</p>
      </div>
    </div>
  );
}
