"use client";

import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "about page",
// };

function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque
        repellendus architecto deserunt error consectetur, ex laborum?
        Necessitatibus exercitationem alias fugit perferendis! Officiis
        molestiae accusamus assumenda dicta quae ducimus harum est sint illo,
        dolorum fugiat error vel minus quis esse consequuntur ratione aliquam
        sapiente! Distinctio at deleniti tempore officiis quam est, maiores
        nihil aspernatur eos sint voluptatibus velit excepturi vitae
        consequuntur delectus hic. Quia, deleniti quo. Autem odit repellat quo
        ipsa itaque reprehenderit molestias incidunt quis odio voluptates
        dolores alias officia, minima sunt voluptas adipisci, fugit corrupti!
        Libero deserunt, omnis officiis corrupti inventore, quas ea consequatur
        velit cum saepe amet.
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("executing code");
          router.push("/");
        }}
      >
        Click me
      </button>
    </section>
  );
}

export default AboutPage;
