import { createSignal } from "solid-js";
import { useNavigate, useSubmission } from "@solidjs/router";
import { loginAction } from "~/lib/user";
import Layout from "~/components/Layout";
import { WhiteBox } from "~/components/WhiteBox";
import { BlueButton } from "~/components/BlueButton";
import { Connexion } from "~/components/Connexion";

export default function Login() {
  const submission = useSubmission(loginAction)
  return (
    <Layout>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Connexion
        </h1>

        <WhiteBox>
          <form method="post" action={loginAction} class="space-y-6">
            {submission.error && (
              <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{submission.error.message}</p>
              </div>
            )}

            <Connexion></Connexion>

            <div class="text-sm text-gray-600 mt-4">
              <p>
                Not a member yet ?{" "}
                <a href="/NewAccount" class="text-sky-600 hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </WhiteBox>
      </main>
    </Layout>
  );
}
