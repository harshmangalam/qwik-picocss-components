import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Accordian } from "~/components/accordian";
import { Autocomplete } from "~/components/autocomplete";
import { Dialog } from "~/components/dialog";
import { Meter } from "~/components/meter";

export default component$(() => {
  return (
    <div class="container">
      <Dialog />
      <hr />
      <Accordian />
      <hr />
      <Autocomplete />
      <hr />
      <Meter />
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
