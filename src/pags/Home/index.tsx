import Card from "../../components/Card";
import HoverPopUp from "../../components/HoverPopUp";
import SectionAnimated from "../../components/SectionAnimated";

export default function Home() {
  return (
    <>
      <Card initial>
        <h1>Desenvolvedor Web</h1>
        <br />
        <p>
          Olá meu nome é Renan, tenho 22 anos e estou empenhado em me tornar o
          melhor desenvolvimento web. Nos últimos meses, tenho me dedicado a
          aprender e praticar linguagens essenciais para a construção de
          aplicações web usando as melhores tecnologias do mercado como{" "}
          <HoverPopUp img="https://img.icons8.com/color/48/html-5--v1.png">
            Html
          </HoverPopUp>
          ,{" "}
          <HoverPopUp img="https://img.icons8.com/color/48/css3.png">
            Css
          </HoverPopUp>
          ,{" "}
          <HoverPopUp img="https://img.icons8.com/color/48/javascript--v1.png">
            Javascript
          </HoverPopUp>
          ,{" "}
          <HoverPopUp img="https://img.icons8.com/fluency/48/typescript--v1.png">
            Typescript
          </HoverPopUp>
          ,{" "}
          <HoverPopUp img="https://img.icons8.com/ultraviolet/40/react--v1.png">
            React
          </HoverPopUp>
          , etc...
        </p>
      </Card>
      <br />
      <SectionAnimated direction="left" effectScala>
        <Card>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          eos optio non quidem, maiores modi consequuntur harum ipsa hic
          corrupti nulla perferendis commodi quo, accusamus architecto ducimus
          dolorum. Deserunt, aliquam!
        </Card>
      </SectionAnimated>
      <br />
      <br />
      <SectionAnimated direction="right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nihil,
        corporis officiis vel ad deleniti quam excepturi quo corrupti accusamus,
        facilis quae libero at, pariatur fugit magni maiores ab magnam.lorem
      </SectionAnimated>
    </>
  );
}
