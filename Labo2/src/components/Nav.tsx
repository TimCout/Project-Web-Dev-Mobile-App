import { useLocation } from "@solidjs/router";
import { JSXElement } from "solid-js";

export default function Nav() {
  
  return (
    <nav class="bg-sky-800">
      <ul class="container flex justify-between items-center p-3 text-gray-200">
        <div class="flex flex-row">
          {/* <NavLink href="/">Home</NavLink> */}
          {/* <NavLink href="/about">About</NavLink> */}
          <NavLink href="/login">Connexion</NavLink>
          <NavLink href="/football">Football</NavLink>
          <NavLink href="/createMatch">Create a match</NavLink>
        </div>

        <div>
          <NavLink href="/logout">Log out</NavLink>
        </div>
      </ul>
    </nav>
  );
}

type NavLinkProps = {
  href: string
  children: JSXElement
}

function NavLink(props: NavLinkProps){
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return(
    <li class={`border-b-2 ${active(props.href)} mx-1.5 sm:mx-6`}>
          <a href={props.href}>{props.children}</a>
        </li>
  )
}