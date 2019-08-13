import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-center">



        <button class="text-5xl bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"><a href="/quarter1">Intro Unit</a>

        </button>

        <button class="text-5xl bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"><a href="/quarter1">Unit 1</a>

        </button>



      </section>
    </Layout>
  );
}

export default IndexPage;
