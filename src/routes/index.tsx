import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Accordian } from "~/components/accordian";
import { Dialog } from "~/components/dialog";

export default component$(() => {
  return (
    <div>
      <Dialog />
      <hr />
      <Accordian />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
