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



        <button class="text-5xl bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"><a href="/quarter1">Quarter 1</a>

        </button>
        <button class="text-5xl bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
        Quarter 2
        </button>
        <button class="text-5xl bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
        Quarter 3
        </button>
        <button class="text-5xl bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
        Quarter 4
        </button>

      </section>
    </Layout>
  );
}

export default IndexPage;
