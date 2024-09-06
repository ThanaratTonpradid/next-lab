import React from "react";

type Props = {};

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const About = async (_props: Props) => {
  const res = await fetch(
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs"
  );

  const data = await res.json();

  await delay(1000);

  return (
    <div>
      About
      <ul>
        {data.youtubes.map((el: { id: string; title: string }) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
