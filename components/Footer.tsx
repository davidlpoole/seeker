import LinkButton from "./LinkButton.tsx";
export default function Footer() {
  return (
    <div class="pt-8 mx-auto max-w-screen-md flex flex-col items-center justify-center">
      <div>
        <LinkButton
          href="https://davidpoole.deno.dev"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-copyright inline-block mr-1 pb-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
          </svg>
          David Poole
        </LinkButton>
        <LinkButton
          href="https://github.com/davidlpoole/seeker/"
          target="_blank"
        >
          <img
            class="inline-block mr-1 pb-1"
            src="/brand-github.svg"
            width="20"
            height="20"
            alt="the GitHub logo: OctoCat"
          />
          View on GitHub
        </LinkButton>
      </div>
      <div class="text-xs italic mt-2">
        This tool is not connected with, or approved by SEEK Limited.
      </div>
    </div>
  );
}
