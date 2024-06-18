import Link from "next/link";

export function Sqlite() {
  return (
    <Link href="https://sqlite.org/" target="_blank">
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="white-mode"
            x1="-118.318"
            y1="45.638"
            x2="-116.751"
            y2="45.638"
            gradientTransform="matrix(0, 11.486, 11.486, 0, -510.889, 1363.307)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#97d9f6" />
            <stop offset="0.92" stopColor="#0f80cc" />
            <stop offset="1" stopColor="#0f80cc" />
          </linearGradient>
          <linearGradient
            id="dark-mode"
            x1="-118.318"
            y1="45.638"
            x2="-116.751"
            y2="45.638"
            gradientTransform="matrix(0, 11.486, 11.486, 0, -510.889, 1363.307)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#CED4DA" />
            <stop offset="0.92" stopColor="#495057" />
            <stop offset="1" stopColor="#495057" />
          </linearGradient>
        </defs>
        <title>Sqlite</title>
        <path
          d="M23.192,3.242H5.623A2.147,2.147,0,0,0,3.482,5.383V24.759A2.147,2.147,0,0,0,5.623,26.9H17.195C17.063,21.142,19.03,9.968,23.192,3.242Z"
          className="fill-[#0f80cc] dark:fill-[#495057] transition-colors duration-700"
        />
        <path
          d="M22.554,3.867H5.623A1.518,1.518,0,0,0,4.107,5.383V23.345a42.01,42.01,0,0,1,13.569-2.684A123.555,123.555,0,0,1,22.554,3.867Z"
          className="fill-[url(#white-mode)] dark:fill-[url(#dark-mode)]"
        />
        <path
          d="M27.29,2.608c-1.2-1.073-2.66-.642-4.1.634-.213.19-.426.4-.638.625A25.4,25.4,0,0,0,17.1,15a10.178,10.178,0,0,1,.634,1.822c.036.14.069.272.1.384.062.265.1.437.1.437s-.022-.083-.113-.346l-.059-.17c-.01-.027-.023-.059-.038-.094-.16-.373-.6-1.16-.8-1.5-.167.493-.315.954-.438,1.371a12.131,12.131,0,0,1,.908,2.8s-.03-.115-.171-.515a19.037,19.037,0,0,0-.9-1.708,4.037,4.037,0,0,0-.264,1.724,6.009,6.009,0,0,1,.493,1.383c.334,1.283.566,2.846.566,2.846s.008.1.02.263a26.145,26.145,0,0,0,.065,3.205,11.362,11.362,0,0,0,.584,3.1l.18-.1a13.859,13.859,0,0,1-.478-4.628,35.269,35.269,0,0,1,1.938-9.688c2.01-5.308,4.8-9.568,7.35-11.6-2.326,2.1-5.474,8.9-6.417,11.418a45.656,45.656,0,0,0-2.254,8A6.211,6.211,0,0,1,21.39,20s1.233-1.521,2.674-3.693a26.206,26.206,0,0,0-2.755.733c-.7.294-.889.394-.889.394a23.939,23.939,0,0,1,4.215-2.007c2.676-4.215,5.592-10.2,2.656-12.824"
          className="fill-[#003b57] dark:fill-white transition-colors duration-700"
        />
      </svg>
    </Link>
  );
}
