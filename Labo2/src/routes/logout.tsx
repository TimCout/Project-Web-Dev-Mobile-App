import { createSignal } from "solid-js";
import { useNavigate, useSubmission } from "@solidjs/router";
import { logoutAction } from "~/lib/user";
import Layout from "~/components/Layout";
import { WhiteBox } from "~/components/WhiteBox";
import { BlueButton } from "~/components/BlueButton";

export default function Login() {
  const submission = useSubmission(logoutAction)
  
  return (
    <Layout>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Are you sure to logout ?
        </h1>

        <WhiteBox>
          <form method="post" action={logoutAction} class="space-y-6">
            {submission.error && (
              <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{submission.error.message}</p>
              </div>
            )}

            <div>
              <BlueButton
                disabled={submission.pending}
              >
                {submission.pending ? "Deconnexion..." : "Log out"}
              </BlueButton>
            </div>
          </form>
        </WhiteBox>
      </main>
    </Layout>
  );
}
