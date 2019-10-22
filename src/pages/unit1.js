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


        <div  class=" h-auto w-auto bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white py-2 px-4 hover:border-transparent rounded">
            <div class="text-5xl font-semibold py-2 px-4">
                <h1> Quiz 1 (Answers)  </h1>
            </div>
            <div class=" md:flex md:content-start sm:flex-row sm:text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oohDV3aT-5Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                  <p class="p-2">
                  Use this video to review what you missed on the Unit 1 Quiz 1 in case you want to retake it.
                  </p>
              </div>
            </div>
        </div>

        <div  class=" h-auto w-auto bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white py-2 px-4 hover:border-transparent rounded">
            <div class="text-5xl font-semibold py-2 px-4">
                <h1>Quiz 2 "The Parts of the Atom" (Answers)  </h1>
            </div>
            <div class=" md:flex md:content-start sm:flex-row sm:text-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/mRGtn_6aU4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <div>
                  <p class="p-2">
                  Please watch to check your answers before retaking.
                  </p>
              </div>
            </div>
        </div>











      </section>
    </Layout>
  );
}

export default IndexPage;
