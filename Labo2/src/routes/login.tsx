import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { loginAction } from "~/lib/user";
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
          Connexion
        </h1>

        <WhiteBox>
          <form method="post" action={loginAction} class="space-y-6">
            {error() && (
              <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{error()}</p>
              </div>
            )}

            <div class="text-left">
              <label for="username" class="block text-sky-700 font-medium mb-2">
                Username
              </label>
              <input
                name="username"
                type="text"
                value={username()}
                onInput={(e) => setUsername(e.target.value)}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div class="text-left">
              <label for="password" class="block text-sky-700 font-medium mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading()}
                class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading() ? "Connexion..." : "Log in"}
              </button>
            </div>

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
