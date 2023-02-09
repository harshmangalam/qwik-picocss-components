import { component$, useSignal } from "@builder.io/qwik";

export const Accordian = component$(() => {
  const open = useSignal(false);
  return (
    <div>
      <button onClick$={() => (open.value = !open.value)}>
        {open.value ? "Close" : "Open"} second accordian
      </button>
      <details>
        <summary>What is Qwik ?</summary>
        <p>
          Qwik is a new kind of web framework that can deliver instant loading
          web applications at any size or complexity. Your sites and apps can
          boot with about 1kb of JS (regardless of application complexity), and
          achieve consistent performance at scale.
        </p>
      </details>
      <details open={open.value}>
        <summary>Why is called Qwik?</summary>
        <p>
          Originally it was called qoot, but we thought it would be too hard to
          search for. One friend of ours, @patrickjs__ came up with Qwik and
          after an internal poll at builder.io, we changed it!
        </p>
      </details>
      <details>
        <summary>How is Qwik different from other frameworks?</summary>
        <p>
          Qwik is the first framework that has similar DX (Developer Experience)
          as React, Vue or Svelte in how you author components, while delivering
          Live HTML that is instantly interactive. Qwik achieves this property,
          but removing completely the need for hydration, instead, Qwik
          applications immediate execute the event handlers on user interaction,
          without having to bootstrap all the app state. This technique is
          called Resumability.
        </p>
        <p>
          The outcome is that developers write extremely performant application
          by default, without even having worry about it. Applications built
          with Qwik are fast regardless of the amount of components or
          complexity, they are O(1) (constant time) in terms of JS payload.
        </p>
      </details>
    </div>
  );
});
