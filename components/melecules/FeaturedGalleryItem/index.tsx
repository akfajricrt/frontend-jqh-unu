interface FeaturedGalleryProps {
  thumbnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}

export default function FeaturedGalleryItems(props: FeaturedGalleryProps) {
  const { thumbnail } = props;

  return (
    <div className="featured-game-card position-relative">
      <a href="">
        <div className="blur-sharp">
          <img className="img-gallery" src={`/img/${thumbnail}.png`} alt="" />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <svg
                width="41"
                height="16"
                viewBox="0 0 41 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="20.5" cy="8" rx="20.5" ry="8" fill="white" />
                <circle cx="21" cy="8" r="5" stroke="black" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
