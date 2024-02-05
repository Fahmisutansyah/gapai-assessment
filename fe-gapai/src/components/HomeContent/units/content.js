import Person3Icon from "@mui/icons-material/Person3";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export default function Content(props) {
  return (
    <div className="ph3-ns ">
      <div className="mb4-ns">
        <img src={props.data.imgUrl} className="w-100-ns" />
      </div>
      <div>
        {
          <div
            className="lh-copy"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data.content),
            }}
          />
        }
      </div>
    </div>
  );
}
