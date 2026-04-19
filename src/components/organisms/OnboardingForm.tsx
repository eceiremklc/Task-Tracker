import { useUserStore } from "../../store/useUserStore";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { EmojiPicker } from "../molecules/EmojiPicker";
import { useState } from "react";

export const OnboardingForm = () => {
  const storeName = useUserStore((state) => state.userProfile.name);
  const storeAvatar = useUserStore((state) => state.userProfile.avatar);
  const setProfile = useUserStore((state) => state.setProfile);

  const [name, setName] = useState(storeName);
  const [avatar, setAvatar] = useState(storeAvatar);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(name, avatar);
    alert(`${name} ${avatar} ile profilin başarıyla kaydedildi!`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Input
        label="Display Name"
        className="bg-cyan-50 border-cyan-200"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <EmojiPicker selectedEmoji={avatar} onSelect={setAvatar} />
      <Button type="submit">Haydi Başlayalım!</Button>
    </form>
  );
};
