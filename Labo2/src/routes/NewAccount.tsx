import Layout from "~/components/Layout";
import { WhiteBox } from "~/components/WhiteBox";
import { Connexion } from "~/components/Connexion";

export default function NewAccount() {
  return (
    <Layout>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Create an account
        </h1>
        <WhiteBox>
          <Connexion register />
        </WhiteBox>
      </main>
    </Layout>
  );
}
