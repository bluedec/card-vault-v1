import { createSignal } from "solid-js";
import { Portal } from "solid-js/web";

export default function TestCard() {
  const [expanded, setExpanded] = createSignal(false);

  return (
    <>
      <div
        style="width:200px; background:red; padding:20px; cursor:pointer;"
        onClick={() => {
          console.log("click!", expanded());
          setExpanded(true);
        }}
      >
        Clickeame — expanded: {expanded() ? "true" : "false"}
      </div>

      {expanded() && (
        <Portal mount={document.body}>
          <div
            style="position:fixed; inset:0; background:rgba(0,0,0,0.7); z-index:9999; display:flex; align-items:center; justify-content:center;"
            onClick={() => setExpanded(false)}
          >
            <div
              style="background:white; padding:40px; border-radius:12px;"
              onClick={(e) => e.stopPropagation()}
            >
              <p>Modal funcionando ✓</p>
              <button onClick={() => setExpanded(false)}>Cerrar</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
