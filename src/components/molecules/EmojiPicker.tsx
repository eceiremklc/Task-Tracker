const EMOJIS = ["🚀", "🎨", "💡", "☕", "🥑", "🐶", "🌱", "✨"];

export const EmojiPicker = ({
  selectedEmoji,
  onSelect,
}: {
  selectedEmoji: string;
  onSelect: (e: string) => void;
}) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-3">
      Bir avatar seç!
    </label>
    <div className="grid grid-cols-4 gap-3">
      {EMOJIS.map((emoji) => (
        <button
          key={emoji}
          type="button"
          onClick={() => onSelect(emoji)}
          className={`flex items-center justify-center p-3 rounded-full text-2xl bg-cyan-50 transition-all border-2 
            ${selectedEmoji === emoji ? "border-cyan-400 bg-cyan-100" : "border-transparent bg-cyan-50 hover:bg-cyan-100"}`}
        >
          {emoji}
        </button>
      ))}
    </div>
  </div>
);
