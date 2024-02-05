import "./styles.css";
import {
  Container,
  OutlinedInput,
  InputAdornment,
  Switch,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
const navigation = [
  {
    name: "home",
    link: "/",
    text: "Home",
  },
  {
    name: "blog",
    link: "/blog",
    text: "Blog",
  },
  {
    name: "single",
    link: "/singlepost",
    text: "Single Post",
  },
  {
    name: "pages",
    link: "/pages",
    text: "Pages",
  },
  {
    name: "contact",
    link: "/contact",
    text: "Contact",
  },
];

export default function Navbar() {
  return (
    <div>
      <Container maxWidth="l">
        <div className="navbar-body cf flex items-center">
          <div className="navbar-logo fl w-25-ns w-100">
            <img src={"https://i.imgur.com/2RFLo8C.png"} className="logo" />
          </div>
          <div className="navbar-nav fl cf w-50-ns flex justify-between">
            {navigation.map((el, ind) => (
              <div className="fl mh1-ns w-20-ns" key={ind}>
                <Link href={el.link}>
                  <span className="f6 lh-copy nav black no-underline">
                    {el.text}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="fl cf w-25-ns flex justify-around">
            <div className="navbar-action fl w-50-ns">
              <OutlinedInput
                placeholder="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </div>
            <div className="navbar-theme fl w-20-ns">
              <Switch className="switch" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
