import "./styles.css";
import { Container } from "@mui/material";
import Header from "./units/header";
import Content from "./units/content";

import copy from "@/src/text/home/index.json";
export default function HomeContent() {
  return (
    <Container maxWidth="md">
      <div className="home-con mv6-ns">
        <Header data={copy.home} />
        <Content data={copy.home} />
      </div>
    </Container>
  );
}
