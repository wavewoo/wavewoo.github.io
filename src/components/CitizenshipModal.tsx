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
              Статус громадянина дає великі привілегії, але й великі зобов'язання. Якщо процес видається вам заскладним,
              значить воно вам і не потрібно.
            </p>
          </div>

          {/* Порядок отримання громадянства */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Порядок отримання громадянства</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-festival-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-festival-blue">Отримання попереднього запрошення</h4>
                  <p className="text-muted-foreground text-sm">Республіка Вейву є закритою державною з ретельним добором жителів.
                    Ви не можете просто так взяти і в'їхати у Республіку. Якщо ви ніколи раніше не були у Вейву, вам необхідно отримати попереднє запрошення від одного з громадян.<br/>
                    Громадянин, що вас запрошує, повинен підтвердити свою участь у фестивалі, на який запрошують вас. Зверніть увагу, що один
                    громадянин може запросити лише одного нового жителя.<br/>
                    Станом на 2025-ий рік обов'язкове попереднє анкетування нових жителів Республіки НЕ проводиться.<br/>
                    До отримання громадянства Верховна Ліга Джекесу або Вейвівська Рада Старійшин мають право відмовити вам у в'їзді в будь-який 
                    момент без пояснення причин.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-festival-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-festival-blue">Відвідування першого Фестивалю</h4>
                  <p className="text-muted-foreground text-sm">Після отримання запрошення і затвердження ВЛД або ВРС ви можете відвідати ваш перший фестиваль.
                    Відвідування першого фестивалю НЕ надає вам громадянство, однак ви отримуєте посвідку на тимчасове проживання
                    та можете брати участь у виборах.<br/>
                    Власники посвідки на тимчасове проживання НЕ можуть запрошувати інших осіб у Респібліку, бути міністрами чи Президентом Республіки.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-festival-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-festival-blue">Проходження стажування</h4>
                  <p className="text-muted-foreground text-sm">Для отримання громадянства вам необхідно пройти стажування у одному
                    з міністерств чи управлінь Республіки Вейву. Перелік міністерств можна знайти на сайті Республіки.<br/>
                    Оберіть те міністерство, яке вам найбільше до вподоби, і зверніться до відповідного міністра.
                    На час проходження стажування ви будете вписані у паспорт вашого поручителя (відповідного міністра).<br/>
                    Проходження стажування передбачає працю на благо Республіки і виконання доручень поручителя. Для отримання
                    громадянства поручитель повинен підтвердити ваше успішне проходження стажування.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-festival-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-festival-blue">Відсутність заперечень</h4>
                  <p className="text-muted-foreground text-sm">Для отримання громадянства важливим є відсутність заперечень з боку
                    діючих громадян Республіки після відвідування вами першого фестивалю. У випадку наявності заперечень,
                    процедура ускладнюється і для отримання громадянства потрібен спеціальний дозвіл ВЛД або ВРС.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-festival-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-festival-blue">Відвідування другого Фестивалю</h4>
                  <p className="text-muted-foreground text-sm">У випадку успішного виконання попередніх умов, ви маєте право на 
                    відвідування другого фестивалю. Під час цього фестивалю ви можете отримати громадянство Республіки Вейву.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-festival-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                <div>
                  <h4 className="font-bold text-festival-blue">Отримання і валідація паспорта</h4>
                  <p className="text-muted-foreground text-sm">Перед відвідуванням вами другого фестивалю ви повинні надати
                    інформацію про себе задля отримання паспорта, а також ваше фото. При в'їзді на другий фестиваль представник
                    міністерства юстиції видасть вам ваш паспорт громадянина Республіки Вейву.<br/>
                    У вашому паспорті буде відмітка про проходження стажування, яку має завірити підписом ваш поручитель.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Документи громадянина */}
          <div className="bg-white border-2 border-festival-blue/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-4 text-center">Ваш паспорт</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-festival-blue mb-3">Права громадян</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Вільний в'їзд у Республіку</li>
                  <li>✓ Право належати до міністерств</li>
                  <li>✓ Право стати міністром або обиратися на посаду Президента</li>
                  <li>✓ Право запрошувати інших осіб у Республіку</li>
                  <li>✓ Право укладати шлюб з іншими громадянами</li>
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
            <h3 className="text-2xl font-bold text-festival-blue mb-4 text-center">Як бути хорошим жителем</h3>
            <div className="bg-white p-6 rounded-lg border border-festival-blue/30">
              <p className="text-center italic leading-relaxed text-muted-foreground">
                • Підтримуйте атмосферу та вайб Республіки<br/>
                • Поважайте всіх учасників фестивалю<br/>
                • Працюйте на благо Республіки, коли у цьому буде потреба<br/>
                • Вносьте креатив та нові ідеї у функціонування Республіки<br/>
                • Дотримуйтеся Конституції та іншого законодавства Республіки<br/><br/>
                Хай живе Республіка Вейву!
              </p>
            </div>
          </div>

          {/* Як отримати */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-4 text-center">Короткий рекап</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl mb-3">🎫</div>
                <h4 className="font-bold text-festival-blue mb-2">Крок 1</h4>
                <p className="text-muted-foreground text-sm">Отримайте запрошення та відвідайте перший фестиваль</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📝</div>
                <h4 className="font-bold text-festival-blue mb-2">Крок 2</h4>
                <p className="text-muted-foreground text-sm">Пройдіть державне стажування</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h4 className="font-bold text-festival-blue mb-2">Крок 3</h4>
                <p className="text-muted-foreground text-sm">Відвідайте другий фестиваль</p>
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitizenshipModal;