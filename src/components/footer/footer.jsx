import { Link } from "react-router-dom";
import { Footerr, Logo } from "./footerStyle";
import { PiCopyrightThin } from "react-icons/pi";
export default function Footer() {
  return (
    <Footerr>
      <Link to={"/"}>
      <Logo src="../images/logo-no-background.svg" />
      </Link>
      <p>CopyRight<PiCopyrightThin className="icon"/>2024 | All Rights Reserved</p>
    </Footerr>
  )
}
