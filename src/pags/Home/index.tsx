import Card from "../../components/Card";
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
          <strong>Html</strong>, <strong>Css</strong>,{" "}
          <strong>Javascript</strong>, <strong>Typescript</strong>,{" "}
          <strong>React</strong>, etc...
        </p>
      </Card>
      <br />
      <SectionAnimated direction="left">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nihil,
        corporis officiis vel ad deleniti quam excepturi quo corrupti accusamus,
        facilis quae libero at, pariatur fugit magni maiores ab magnam.lorem
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
