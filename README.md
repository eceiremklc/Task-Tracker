# 📋 Project Planner

Modern, kullanıcı dostu bir proje ve görev yönetim uygulaması.  
Projelerini oluştur, görevlerini takip et ve ilerlemeni görsel olarak yönet.

---

## 🚀 Özellikler

### 👤 Kullanıcı Onboarding
- Kullanıcı adı ve emoji avatar seçimi  
- İlk girişte onboarding akışı  
- Veriler localStorage’da saklanır  

### 📁 Proje Yönetimi
- Yeni proje oluşturma  
- Proje düzenleme ve silme  
- Kategori, açıklama ve son tarih ekleme  
- Proje bazlı ilerleme takibi (%)  

### ✅ Görev Yönetimi
- Projelere görev ekleme  
- Görevleri tamamlandı olarak işaretleme  
- Görev düzenleme ve silme  
- Proje ilerleme yüzdesi otomatik hesaplama  

### 📊 İlerleme Takibi
- Tamamlanan görevlere göre dinamik progress hesaplama  
- Görsel progress bar ile takip  

---

## 🧠 Kullanılan Teknolojiler

- React  
- TypeScript  
- Vite  
- Zustand  
- React Router  
- Tailwind CSS  
- ESLint  

---

## 🧱 Mimari Yapı

Proje **Atomic Design** prensibine göre yapılandırılmıştır:

- Atoms → Button, Input, Checkbox  
- Molecules → FormField, ProjectCard, TaskItem  
- Organisms → Navbar, TaskManager, ProjectModal  
- Templates → Sayfa layoutları  

---

## 📄 Sayfalar

- `/` → Onboarding veya Dashboard yönlendirmesi  
- `/dashboard` → Tüm projelerin listesi  
- `/project/:id` → Proje detay ve görev yönetimi  

---

## 💾 State Management

- Zustand ile merkezi state yönetimi  
- localStorage persist desteği  
- Otomatik veri senkronizasyonu  

---

## 📈 İlerleme Hesaplama

Tamamlanan görev sayısına göre proje ilerlemesi otomatik olarak hesaplanır.  
Her görev güncellemesinde progress değeri yeniden oluşturulur.

---

## 🎨 UI / UX

- Tailwind CSS ile modern tasarım  
- Responsive (mobile-first)  
- Minimal ve temiz arayüz  
- Akıcı animasyonlar  

---

## 🛠️ Kurulum

git clone https://github.com/eceiremklc/task-tracker.git  
cd project-planner  
npm install  
npm run dev  

---

## 📦 Scripts

- npm run dev → Development server  
- npm run build → Production build  
- npm run preview → Build preview  
- npm run lint → Lint kontrolü  

---

## 📁 Klasör Yapısı

src/  
├── components/  
├── pages/  
├── router/  
├── store/  
├── interfaces/  
├── templates/  
├── App.tsx  
└── main.tsx  

---


## 👩‍💻 Geliştirici

Ece İrem Kılıç  
Frontend Developer
