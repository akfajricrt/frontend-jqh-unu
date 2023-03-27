import FeaturedGalleryItems from "../../melecules/FeaturedGalleryItem";

export default function FeaturedGallery() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Gallery
          <br />
          Gallery This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeaturedGalleryItems thumbnail="Thumbnail-1" />
          <FeaturedGalleryItems thumbnail="Thumbnail-2" />
          <FeaturedGalleryItems thumbnail="Thumbnail-3" />
          <FeaturedGalleryItems thumbnail="Thumbnail-4" />
          <FeaturedGalleryItems thumbnail="Thumbnail-5" />
        </div>
      </div>
    </section>
  );
}
