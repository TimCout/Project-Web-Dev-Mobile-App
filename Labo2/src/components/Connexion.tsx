import { Show } from "solid-js";
import { loginAction, registerAction } from "~/lib/user";
import { BlueButton } from "./BlueButton";
import { useSubmission } from "@solidjs/router";

export function Connexion(props: { register?: boolean }) {
  const action = () => (props.register ? registerAction : loginAction);
  const submission = useSubmission(action());
  return (
    <form method="post" action={action()}>
      {submission.error && (
        <div
          class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{submission.error.message}</p>
        </div>
      )}
      <Field name="username" label="Username" placeholder="Choose a username" />

      <Field
        name="password"
        type="password"
        label="Password"
        placeholder="Create a password (min. 8 characters)"
      />

      <Show when={props.register}>
        <Field
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm your password"
        />
      </Show>
      <BlueButton disabled={submission.pending}>
        <Show
          when={props.register}
          fallback={submission.pending ? "Connexion..." : "Log in"}
        >
          {submission.pending ? "Creating..." : "Create my account"}
        </Show>
      </BlueButton>

      <Show
        when={props.register}
        fallback={
          <LittleTxt
            p="Not a member yet ?"
            href="/NewAccount"
            txt_link="Create an account"
          />
        }
      >
        <LittleTxt
          p="Already have an account?"
          href="/login"
          txt_link="Log in"
        />
      </Show>
    </form>
  );
}

function Field(props: {
  class?: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div class="text-left">
      <label for={props.name} class="block text-sky-700 font-medium mb-2">
        {props.label}
      </label>
      <input
        required
        {...props}
        class={
          "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" +
          props.class
        }
      />
    </div>
  );
}

function LittleTxt(props: {
  class?: string;
  p: string;
  href: string;
  txt_link: string;
}) {
  return (
    <div class="text-sm text-gray-600 mt-4">
      <p>
        {props.p}{" "}
        <a href={props.href} class="text-sky-600 hover:underline">
          {props.txt_link}
        </a>
      </p>
    </div>
  );
}
