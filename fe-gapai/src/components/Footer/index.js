import "./styles.css";

import { OutlinedInput, InputAdornment, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import copy from "@/src/text/home/index.json";
const links = [
  {
    name: "home",
    link: "/",
    text: "Home",
  },
  {
    name: "about",
    link: "/",
    text: "About",
  },
  {
    name: "blog",
    link: "/blog",
    text: "Blog",
  },
  {
    name: "archived",
    link: "/",
    text: "Archived",
  },
  {
    name: "author",
    link: "/",
    text: "Author",
  },
  {
    name: "contact",
    link: "/contact",
    text: "Contact",
  },
];
const category = [
  {
    name: "lifestyle",
    link: "/",
    text: "Lifestyle",
  },
  {
    name: "techology",
    link: "/",
    text: "Technology",
  },
  {
    name: "travel",
    link: "/",
    text: "Travel",
  },
  {
    name: "business",
    link: "/",
    text: "Business",
  },
  {
    name: "economy",
    link: "/",
    text: "Economy",
  },
  {
    name: "sports",
    link: "/",
    text: "Sports",
  },
];

export default function Footer() {
  return (
    <div className="bg-grey pv5-ns ph4-ns flex flex-column">
      <div className="flex flex-row">
        <div className="w-33-ns flex flex-column pr4-ns">
          <span className="f4-ns mb3-ns">About</span>
          <span className="f6-ns fw3 mb3-ns">{copy.about.content}</span>
          <span className="f6-ns fw3">
            <b>Email : </b>
            {copy.about.email}
          </span>
          <span className="f6-ns fw3">
            <b>Phone : </b>
            {copy.about.phone}
          </span>
        </div>
        <div className="w-33-ns">
          <div className="flex flex-row">
            <div className="flex flex-column w-50-ns">
              {links.map((el, ind) => (
                <p className="f6-ns" key={ind}>
                  {el.text}
                </p>
              ))}
            </div>
            <div className="flex flex-column w-50-ns">
              {category.map((el, ind) => (
                <p className="f6-ns" key={ind}>
                  {el.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-33-ns h-auto">
          <div className="card-nl bg-white flex flex-column pa4-ns h-100">
            <div className="w-100-ns flex flex-column justify-between h-100">
              <div className="flex flex-column">
                <span className="f4-ns mb3-ns center b">
                  {copy.newsletter.title}
                </span>
                <span className="f6-ns fw3 mb3-ns center">
                  {copy.newsletter.desc}
                </span>
              </div>
              <div className="flex flex-column">
                <OutlinedInput
                  placeholder={copy.newsletter.formPlaceholder}
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  }
                  className="mb2-ns"
                />
                <Button variant="contained">{copy.newsletter.action}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 mt5-ns"></hr>
      <div className="flex justify-around">
        <div className="w-60-ns">
          <img src={"https://i.imgur.com/2RFLo8C.png"} className="logo" />
        </div>
        <div className="flex w-40-ns justify-around ">
          <span className="fw2">Terms of Use</span>
          <span className="mid-gray">|</span>
          <span className="fw2">Privacy Policy</span>
          <span className="mid-gray">|</span>
          <span className="fw2">Cookie Policy</span>
        </div>
      </div>
    </div>
  );
}
