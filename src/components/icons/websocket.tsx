import Link from "next/link";

export function WebSockets() {
  return (
    <Link
      href="https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API"
      target="_blank"
    >
      <svg
        className="fill-black dark:fill-white transition-colors duration-700"
        width="80px"
        height="80px"
        viewBox="0 0 14 14"
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>WebSockets</title>
        <path d="m 10.020625,9.2762675 1.489688,0 0,-3.5768554 -1.6783598,-1.6783203 -1.0533752,1.0534179 1.242047,1.2420899 0,2.9596679 z m 1.493625,0.7470705 -5.1961876,0 -1.2420937,-1.241992 0.5267343,-0.5263672 1.0258594,1.0258789 2.1106875,0 -2.0792344,-2.0832031 0.530625,-0.5302734 2.0792343,2.0792968 0,-2.1107421 -1.0219218,-1.0219726 0.52275,-0.522461 -2.5823437,-2.5941406 -5.18835931,0 1.48575001,1.4857422 0,0.00391 3.0815624,0 1.0887656,1.0887695 -1.591875,1.5918945 -1.0887656,-1.0887695 0,-0.8447266 -1.4896874,0 0,1.462207 2.578453,2.5784179 -1.0494843,1.0495113 1.6783593,1.67832 7.306922,0 -1.48575,-1.477929 z" />
      </svg>
    </Link>
  );
}
