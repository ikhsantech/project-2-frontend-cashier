import Link from "next/link";
Link;

const header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/category">Category</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Cafe In The Sky</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/category">Category</Link>
          </li>
          <li tabIndex={0}>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/pelanggan">Pelanggan</Link>
          </li>
          <li>
            <Link href="/meja">Meja</Link>
          </li>
          <li>
            <Link href="/stok">Stok</Link>
          </li>
          <li>
            <Link href="/jenis">Jenis</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
