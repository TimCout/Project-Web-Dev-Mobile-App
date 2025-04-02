import { createSignal } from "solid-js";
import { useNavigate, useSubmission } from "@solidjs/router";
import { registerAction } from "~/lib/user";
import Layout from "~/components/Layout";
import { WhiteBox } from "~/components/WhiteBox";
import { BlueButton } from "~/components/BlueButton";
import { Connexion } from "~/components/Connexion";

export default function NewAccount() {
  const submission = useSubmission(registerAction);
  return (
    <Layout>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Create an account
        </h1>

        <WhiteBox>
          <form method="post" action={registerAction}>
            {submission.error && (
              <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{submission.error.message}</p>
              </div>
            )}

            <Connexion register></Connexion>

            <div class="text-sm text-gray-600 mt-4">
              <p>
                Already have an account?{" "}
                <a href="/login" class="text-sky-600 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </WhiteBox>
      </main>
    </Layout>
  );
}
