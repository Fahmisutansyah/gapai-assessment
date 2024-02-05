import { Chip, Avatar } from "@mui/material";
import Person3Icon from "@mui/icons-material/Person3";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export default function Header(props) {
  return (
    <div className="flex flex-column">
      <div className="mb3-ns">
        <Chip variant="filled" color="primary" label={props.data.chipLabel} />
      </div>
      <span className="t-title lh-title mb3-ns fw5">{props.data.title}</span>
      <div className="flex mb4-ns">
        <div className="w-50-ns flex flex-row">
          <div className="mr2-ns">
            <Avatar
              alt={props.data.author}
              src={props.data.avatar ? props.data.avatar : null}
            >
              {!props.data.avatar && <Person3Icon />}
            </Avatar>
          </div>
          <div className="pt2-ns mr4-ns">
            <span className="home-author f7-ns">{props.data.author}</span>
          </div>
          <div className="pt2-ns">
            <span className="home-author f7-ns">{props.data.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
