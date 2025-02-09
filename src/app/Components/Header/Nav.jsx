import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link href="/">Home</Link>
      </li>
      <li className="">
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>
      <li className="">
        <Link href="/pricing" onClick={() => setMobileToggle(false)}>
          Pricing
        </Link>
      </li>
      <li className="">
        <Link href="/faq" onClick={() => setMobileToggle(false)}>
          Faq
        </Link>
      </li>

      <li className="">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
