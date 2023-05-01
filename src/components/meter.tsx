import { component$ } from "@builder.io/qwik";

export const Meter = component$(() => {
  return (
    <div>
      <label for="fuel">Fuel level:</label>

      <meter
        id="fuel"
        min="0"
        max="100"
        low={33}
        high={66}
        optimum={80}
        value={70}
      >
        at 70/100
      </meter>
    </div>
  );
});
