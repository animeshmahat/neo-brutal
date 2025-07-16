import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Welcome to BrutalApp</h1>
      <p>This is a production-level React starter template.</p>
      <Button variant="accent">Primary Action</Button>
    </div>
  );
}
