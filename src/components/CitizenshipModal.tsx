import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CitizenshipModalProps {
  children: React.ReactNode;
}

const CitizenshipModal = ({ children }: CitizenshipModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-festival-blue text-center">
            Отримання громадянства Республіки Вейву
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          
          {/* Заголовок */}
          <div className="text-center">
            <div className="text-6xl mb-4">🎫</div>
            <p className="text-lg text-muted-foreground">
              Ласкаво просимо до бажаючих отримати громадянство Республіки Вейву!
            </p>
          </div>

          {/* Привітання */}
          <div className="bg-festival-blue text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Зверніть увагу!</h3>
            <p className="leading-relaxed text-center">
              Отримання громадянства Республіки Вейву - не такий вже й простий процес. 
              Статус громадянина дає великі привілегії, але й великі зобов'язання. .
            </p>
          </div>

          {/* Що входить у громадянство */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Ваші привілеї як громадянина</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Музичні привілеї</h4>
                    <p className="text-muted-foreground text-sm">Доступ до всіх сцен та виступів, пріоритетні місця для громадян</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍽️</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Гастрономічні знижки</h4>
                    <p className="text-muted-foreground text-sm">15% знижка в усіх ресторанах та фуд-траках на території</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Культурні заходи</h4>
                    <p className="text-muted-foreground text-sm">Безкоштовні майстер-класи, лекції та воркшопи</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">VIP доступ</h4>
                    <p className="text-muted-foreground text-sm">Спеціальні зони для громадян та закриті виступи</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗳️</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Право голосу</h4>
                    <p className="text-muted-foreground text-sm">Участь у виборі найкращого виконавця року</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Ексклюзивні сувеніри</h4>
                    <p className="text-muted-foreground text-sm">20% знижка на фестивальну атрибутику</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Цифрові послуги</h4>
                    <p className="text-muted-foreground text-sm">Доступ до ексклюзивного контенту в мобільному додатку</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏕️</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Кемпінг пільги</h4>
                    <p className="text-muted-foreground text-sm">Знижки на розміщення та додаткові послуги</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Документи громадянина */}
          <div className="bg-white border-2 border-festival-blue/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-4 text-center">Ваші документи громадянина</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-festival-blue mb-3">Фестивальний паспорт</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Особистий номер громадянина</li>
                  <li>✓ QR-код для швидкого доступу</li>
                  <li>✓ Фото на згадку</li>
                  <li>✓ Печатка Республіки Вейву</li>
                  <li>✓ Карта території фестивалю</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-festival-blue text-white p-4 rounded-lg transform rotate-3">
                  <div className="text-2xl mb-2">🎫</div>
                  <div className="text-sm font-bold">ПАСПОРТ ГРОМАДЯНИНА</div>
                  <div className="text-xs mt-2">Республіка Вейву</div>
                  <div className="text-xs">№ 0001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Урочиста клятва */}
          <div className="bg-festival-yellow/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-4 text-center">Клятва громадянина Республіки Вейву</h3>
            <div className="bg-white p-6 rounded-lg border border-festival-blue/30">
              <p className="text-center italic leading-relaxed text-muted-foreground">
                "Я, як громадянин Республіки Вейву, урочисто обіцяю:<br/><br/>
                • Підтримувати атмосферу музики, миру та творчості<br/>
                • Поважати всіх учасників фестивалю незалежно від їхніх музичних уподобань<br/>
                • Дбати про чистоту та красу нашої території<br/>
                • Ділитися позитивними емоціями та допомагати один одному<br/>
                • Зберігати та примножувати культурні традиції Республіки<br/><br/>
                Хай живе музика! Хай живе Республіка Вейву!"
              </p>
            </div>
          </div>

          {/* Як отримати */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-4 text-center">Як стати громадянином?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl mb-3">🎫</div>
                <h4 className="font-bold text-festival-blue mb-2">Крок 1</h4>
                <p className="text-muted-foreground text-sm">Придбайте квиток на будь-який день фестивалю</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📝</div>
                <h4 className="font-bold text-festival-blue mb-2">Крок 2</h4>
                <p className="text-muted-foreground text-sm">Зареєструйтеся на стійці громадянства</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h4 className="font-bold text-festival-blue mb-2">Крок 3</h4>
                <p className="text-muted-foreground text-sm">Отримайте паспорт та насолоджуйтесь привілеями!</p>
              </div>
            </div>
          </div>

          {/* Кнопки дій */}
          <div className="text-center space-y-4">
            <div className="space-x-4">
              <Button variant="hero" size="lg">
                Купити квиток та стати громадянином
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Стійка реєстрації громадян працює щодня з 10:00 до 22:00<br/>
              Локація: біля головного входу на фестиваль
            </p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitizenshipModal;