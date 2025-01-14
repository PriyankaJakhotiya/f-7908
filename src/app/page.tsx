import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-purple-900 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-6 text-white">Welcome</h1>
          <p className="text-purple-100 mb-6">
            This is your new application with a dark purple and white color scheme.
          </p>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}