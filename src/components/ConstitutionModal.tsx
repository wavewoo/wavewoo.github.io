import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ConstitutionModalProps {
  children: React.ReactNode;
}

const ConstitutionModal = ({ children }: ConstitutionModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-festival-blue text-center">
            Конституція Республіки Вейву
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Основний закон культурної держави фестивалю
            </p>
          </div>

          <div className="bg-festival-blue text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Преамбула</h3>
            <p className="leading-relaxed text-center">
              Ми, громадяни Республіки Вейву, об'єднані любов'ю до музики, мистецтва та культури, 
              проголошуємо цю Конституцію як основу нашої спільної творчої держави.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-xl font-bold text-festival-blue mb-4">Стаття 1. Основні принципи</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Свобода творчого самовираження</li>
                <li>• Рівність усіх жанрів та напрямів</li>
                <li>• Повага до культурного розмаїття</li>
                <li>• Єдність у різноманітті</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-xl font-bold text-festival-blue mb-4">Стаття 2. Права громадян</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Право на культурний відпочинок</li>
                <li>• Право на музичне самовираження</li>
                <li>• Право на творче спілкування</li>
                <li>• Право на фестивальне громадянство</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-xl font-bold text-festival-blue mb-4">Стаття 3. Обов'язки громадян</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Повага до інших учасників</li>
                <li>• Збереження фестивальної атмосфери</li>
                <li>• Підтримка чистоти території</li>
                <li>• Дотримання правил безпеки</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-xl font-bold text-festival-blue mb-4">Стаття 4. Територія</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Сцени та концертні майданчики</li>
                <li>• Зони відпочинку та кемпінги</li>
                <li>• Культурні та освітні простори</li>
                <li>• Гастрономічні зони</li>
              </ul>
            </div>
          </div>

          <div className="bg-festival-yellow text-festival-blue p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-4">Девіз Республіки</h4>
            <p className="text-2xl font-bold">
              "Музика об'єднує серця, культура збагачує душі"
            </p>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Прийнято Радою Республіки Вейву 15 червня 2015 року</p>
            <p>Останні зміни внесено 10 травня 2024 року</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConstitutionModal;