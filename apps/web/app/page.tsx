import { Portal } from "../components/portal";
import { Scene } from "../components/scene";

export default function Page() {
  return (
    <main id="container" className="min-h-screen">
      <Portal>
        <Scene />
      </Portal>
    </main>
  );
}
