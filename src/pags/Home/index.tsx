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
      <SectionAnimated direction="right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum
        perspiciatis officia nobis pariatur ducimus dignissimos, iste voluptatem
        reprehenderit sequi fuga consequatur facere odit illo! Adipisci amet
        autem fuga eos. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Quibusdam at voluptatibus vel enim vitae odit repellat quae
        tenetur earum. Sit voluptatibus placeat veritatis adipisci incidunt
        magni odio nemo eaque ab?
      </SectionAnimated>
    </>
  );
}
