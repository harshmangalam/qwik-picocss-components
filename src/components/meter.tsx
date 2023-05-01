import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";

export const Meter = component$(() => {
  const value = useSignal(70);

  useClientEffect$(() => {
    const id = setInterval(() => {
      const random = Math.floor(Math.random() * 100);
      value.value = random;
    }, 2000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div>
      <label for="fuel">Meter</label>

      <meter id="fuel" min={0} max={100} value={value.value}>
        at {value.value}/100
      </meter>
    </div>
  );
});
