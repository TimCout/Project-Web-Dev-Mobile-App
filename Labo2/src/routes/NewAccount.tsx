import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { registerAction } from "~/lib/user";
import Layout from "~/components/Layout";

export default function NewAccount() {
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [error, setError] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  
  const navigate = useNavigate();
  
  return (
    <Layout>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Create an account</h1>
        
        <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <form method="post" action={registerAction}>
            {error() && (
              <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
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
                placeholder="Choose a username"
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
                placeholder="Create a password (min. 8 characters)"
                required
                minLength={8}
              />
            </div>
            
            <div class="text-left">
              <label for="confirmPassword" class="block text-sky-700 font-medium mb-2">
                Confirm password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={confirmPassword()}
                onInput={(e) => setConfirmPassword(e.target.value)}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loading()}
                class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading() ? "Creating..." : "Create my account"}
              </button>
            </div>
            
            <div class="text-sm text-gray-600 mt-4">
              <p>
                Already have an account?{" "}
                <a href="/login" class="text-sky-600 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}