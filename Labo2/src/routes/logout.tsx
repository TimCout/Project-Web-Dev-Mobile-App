import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { logoutAction } from "~/lib/user";
import Layout from "~/components/Layout";
import { WhiteBox } from "~/components/WhiteBox";

export default function Login() {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  const navigate = useNavigate();
  
  return (
    <Layout>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Are you sure to logout ?
        </h1>

        <WhiteBox>
          <form method="post" action={logoutAction} class="space-y-6">
            {error() && (
              <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{error()}</p>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading()}
                class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading() ? "Deconnexion..." : "Log out"}
              </button>
            </div>
          </form>
        </WhiteBox>
      </main>
    </Layout>
  );
}
