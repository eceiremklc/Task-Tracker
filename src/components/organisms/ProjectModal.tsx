import { useState, useEffect } from "react";
import { ModalOverlay } from "../atoms/ModalOverlay";
import { FormField } from "../molecules/FormField";
import { type Project } from "../../interfaces/types";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Partial<Project>) => void;
  initialData?: Project | null;
}

export const ProjectModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: ProjectModalProps) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    description: "",
    category: "Engineering",
    dueDate: "",
  });

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        const { ...rest } = initialData;
        Promise.resolve().then(() => setFormData({ ...rest }));
      } else {
        Promise.resolve().then(() =>
          setFormData({
            title: "",
            description: "",
            category: "Engineering",
            dueDate: "",
          }),
        );
      }
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, progress: 0 });
    onClose();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {initialData ? "Projeyi Düzenle" : "Yeni Proje Oluştur"}
        </h2>

        <div className="space-y-5">
          <FormField
            label="Proje Başlığı"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Örn: E-ticaret API Entegrasyonu"
            required
          />

          <FormField
            label="Açıklama"
            isTextArea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Proje detaylarını buraya yazın..."
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Kategori
              </label>
              <select
                className="w-full px-4 py-2.5 rounded-custom border border-slate-200 focus:ring-2 focus:ring-teal-600 outline-none transition-all"
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value as Project["category"],
                  })
                }
              >
                <option value="Web Development">Web Geliştirme</option>
                <option value="Design">Tasarım</option>
                <option value="Mobile Development">Mobil Geliştirme</option>
                <option value="AI">Yapay Zeka</option>
                <option value="Data Science">Veri Bilimi</option>
                <option value="Finance">Finans</option>
                <option value="Other">Diğer</option>
              </select>
            </div>
            <div>
              <FormField
                id="dueDate"
                label="Bitiş Tarihi"
                type="date"
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-custom font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            İptal
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-3 rounded-custom font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-100 transition-all"
          >
            {initialData ? "Güncelle" : "Kaydet"}
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
};
