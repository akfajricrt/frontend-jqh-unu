import Link from "next/link";
import Menu from "./menu";
import ToogleMenu from "./togleMenu";

export default function Navbar() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <img src="/img/logo.png" alt="" width="60" />
            </a>
            <ToogleMenu />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <Menu title="Beranda" active />
                <li className="nav-item dropdown my-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profil
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <li>
                      <Link href="/sejarah">
                        <a className="dropdown-item">Sejarah</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tentang">
                        <a className="dropdown-item">tentang</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <Menu title="Pencapaian" />
                <Menu title="Kategori" />

                <li className="nav-item my-auto">
                  <Link href="/blog">
                    <a
                      className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                      role="button"
                    >
                      Blog & Artikel
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
