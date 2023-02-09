import { $, component$, useSignal } from "@builder.io/qwik";

export const Dialog = component$(() => {
  const dialogRef = useSignal<HTMLDialogElement>();
  const closeDialog = $(() => dialogRef.value?.close());
  const openDialog = $(() => dialogRef.value?.showModal());

  return (
    <div>
      <button onClick$={openDialog}>Open Dialog</button>
      <output></output>

      <dialog ref={dialogRef}>
        <article>
          <header>
            <button
              onClick$={() => dialogRef.value?.close()}
              aria-label="Close"
              class="close outline secondary"
            ></button>
            Welcome to Qwik
          </header>

          <p>
            Qwik is a new kind of web framework that can deliver instant loading
            web applications at any size or complexity. Your sites and apps can
            boot with about 1kb of JS (regardless of application complexity),
            and achieve consistent performance at scale.
          </p>

          <footer>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <a
                href="#"
                role="button"
                class="secondary outline"
                onClick$={closeDialog}
              >
                Cancel
              </a>

              <a href="#" role="button" onClick$={closeDialog}>
                Confirm
              </a>
            </div>
          </footer>
        </article>
      </dialog>
    </div>
  );
});
