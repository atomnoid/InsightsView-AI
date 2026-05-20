type PromptBoxProps = {
  prompt: string;
  setPrompt: (value: string) => void;
};

export default function PromptBox({
  prompt,
  setPrompt,
}: PromptBoxProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">
        AI Prompt
      </h2>

      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-white transition-all"
      />

      <p className="mt-4 text-zinc-400">
        Current Prompt: {prompt}
      </p>
    </div>
  );
}