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

          {/* Розділ I - Основні принципи */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ I. Основні принципи</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 1. Суверенітет Республіки",
                  content: ["Республіка Вейву є незалежною культурною державою", "Влада належить народу фестивалю", "Територія Республіки священна і недоторканна"]
                },
                {
                  title: "Стаття 2. Основні цінності",
                  content: ["Свобода творчого самовираження", "Рівність усіх жанрів та напрямів", "Повага до культурного розмаїття", "Єдність у різноманітті"]
                },
                {
                  title: "Стаття 3. Державні символи",
                  content: ["Герб, прапор та гімн Республіки", "Офіційні кольори: жовтий та блакитний", "Символ - музична нота у формі серця"]
                },
                {
                  title: "Стаття 4. Офіційна мова",
                  content: ["Офіційна мова - українська", "Мова музики - універсальна", "Підтримуються всі форми мистецького вираження"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ II - Права і свободи */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ II. Права і свободи громадян</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 5. Основні права",
                  content: ["Право на культурний відпочинок", "Право на музичне самовираження", "Право на творче спілкування", "Право на фестивальне громадянство"]
                },
                {
                  title: "Стаття 6. Політичні права",
                  content: ["Право обирати найкращих виконавців", "Право брати участь в культурному житті", "Право на мирні зібрання", "Право на подачу петицій"]
                },
                {
                  title: "Стаття 7. Соціальні права",
                  content: ["Право на якісне харчування", "Право на безпечне перебування", "Право на медичну допомогу", "Право на комфортне розміщення"]
                },
                {
                  title: "Стаття 8. Культурні права",
                  content: ["Право на доступ до всіх сцен", "Право на участь у майстер-класах", "Право на вільне пересування", "Право на культурну освіту"]
                },
                {
                  title: "Стаття 9. Економічні права",
                  content: ["Право на справедливі ціни", "Право на пільги громадян", "Право на повернення коштів", "Право на якісний сервіс"]
                },
                {
                  title: "Стаття 10. Екологічні права",
                  content: ["Право на чисте довкілля", "Право на збереження природи", "Право на екологічну освіту", "Право на сталий розвиток"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ III - Обов'язки */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ III. Обов'язки громадян</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 11. Громадські обов'язки",
                  content: ["Повага до інших учасників", "Збереження фестивальної атмосфери", "Підтримка чистоти території", "Дотримання правил безпеки"]
                },
                {
                  title: "Стаття 12. Культурні обов'язки",
                  content: ["Повага до виконавців", "Підтримка молодих талантів", "Збереження культурної спадщини", "Популяризація мистецтва"]
                },
                {
                  title: "Стаття 13. Екологічні обов'язки",
                  content: ["Сортування відходів", "Економне використання ресурсів", "Збереження природи", "Екологічна відповідальність"]
                },
                {
                  title: "Стаття 14. Соціальні обов'язки",
                  content: ["Взаємодопомога", "Толерантність", "Мирне співіснування", "Підтримка спільноти"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ IV - Державний устрій */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ IV. Державний устрій</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 15. Форма правління",
                  content: ["Республіка з демократичним устроєм", "Розподіл влади на міністерства", "Колегіальне прийняття рішень", "Народовладдя через голосування"]
                },
                {
                  title: "Стаття 16. Міністерства",
                  content: ["Міністерство Музики", "Міністерство Культури", "Міністерство Гастрономії", "Міністерство Комфорту"]
                },
                {
                  title: "Стаття 17. Додаткові міністерства",
                  content: ["Міністерство Безпеки", "Міністерство Екології", "Міністерство Технологій", "Міністерство Зв'язків"]
                },
                {
                  title: "Стаття 18. Рада Республіки",
                  content: ["Вищий орган влади", "Складається з представників міністерств", "Приймає стратегічні рішення", "Координує діяльність"]
                },
                {
                  title: "Стаття 19. Президент Республіки",
                  content: ["Обирається на 1 рік", "Представляє Республіку", "Координує роботу міністерств", "Символічна роль"]
                },
                {
                  title: "Стаття 20. Судова система",
                  content: ["Суд фестивальної честі", "Вирішення конфліктів", "Арбітраж у спорах", "Захист прав громадян"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ V - Територія */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ V. Територія та інфраструктура</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 21. Основні зони",
                  content: ["Сцени та концертні майданчики", "Зони відпочинку та кемпінги", "Культурні та освітні простори", "Гастрономічні зони"]
                },
                {
                  title: "Стаття 22. Музичні сцени",
                  content: ["Головна сцена", "Електронна сцена", "Фолк-сцена", "Експериментальна сцена"]
                },
                {
                  title: "Стаття 23. Житлові зони",
                  content: ["Кемпінгові майданчики", "VIP зони", "Зони для сімей", "Тихі зони"]
                },
                {
                  title: "Стаття 24. Сервісні зони",
                  content: ["Медичні пункти", "Інформаційні центри", "Пункти харчування", "Санітарні зони"]
                },
                {
                  title: "Стаття 25. Культурні простори",
                  content: ["Виставкові зали", "Майстерні", "Лекторії", "Дитячі зони"]
                },
                {
                  title: "Стаття 26. Транспорт",
                  content: ["Внутрішній транспорт", "Парковки", "Велодоріжки", "Пішохідні зони"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ VI - Економіка */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ VI. Економічні відносини</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 27. Валюта",
                  content: ["Офіційна валюта - українська гривня", "Фестивальні жетони для внутрішнього обігу", "Безготівкові розрахунки", "Системи лояльності"]
                },
                {
                  title: "Стаття 28. Торгівля",
                  content: ["Вільна торгівля на території", "Ліцензування торговців", "Контроль якості товарів", "Підтримка місцевих виробників"]
                },
                {
                  title: "Стаття 29. Ціноутворення",
                  content: ["Справедливе ціноутворення", "Контроль за цінами", "Пільги для громадян", "Прозорість у розрахунках"]
                },
                {
                  title: "Стаття 30. Спонсорство",
                  content: ["Партнерські відносини", "Етичне спонсорство", "Підтримка культури", "Соціальна відповідальність"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ VII - Безпека */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ VII. Безпека та порядок</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 31. Загальна безпека",
                  content: ["Охорона громадського порядку", "Протипожежна безпека", "Медична допомога", "Евакуаційні заходи"]
                },
                {
                  title: "Стаття 32. Служби безпеки",
                  content: ["Фестивальна поліція", "Служба охорони", "Медичні служби", "Технічна безпека"]
                },
                {
                  title: "Стаття 33. Правопорушення",
                  content: ["Порушення громадського порядку", "Пошкодження майна", "Неповага до учасників", "Екологічні порушення"]
                },
                {
                  title: "Стаття 34. Покарання",
                  content: ["Попередження", "Видалення з території", "Позбавлення пільг", "Заборона на відвідування"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ VIII - Культура та освіта */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ VIII. Культура та освіта</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 35. Культурна політика",
                  content: ["Підтримка всіх видів мистецтва", "Розвиток молодих талантів", "Збереження традицій", "Інновації в культурі"]
                },
                {
                  title: "Стаття 36. Освітні програми",
                  content: ["Майстер-класи", "Лекції та семінари", "Воркшопи", "Культурні дискусії"]
                },
                {
                  title: "Стаття 37. Мистецькі конкурси",
                  content: ["Відкриті мікрофони", "Конкурси талантів", "Виставки робіт", "Фестивальні премії"]
                },
                {
                  title: "Стаття 38. Культурний обмін",
                  content: ["Міжнародне співробітництво", "Обмін досвідом", "Культурна дипломатія", "Творчі резиденції"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ IX - Екологія */}
          <div className="bg-festival-yellow/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ IX. Екологічна політика</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 39. Екологічні принципи",
                  content: ["Сталий розвиток", "Мінімізація впливу", "Відновлювані ресурси", "Циркулярна економіка"]
                },
                {
                  title: "Стаття 40. Поводження з відходами",
                  content: ["Роздільний збір", "Переробка матеріалів", "Компостування", "Зменшення відходів"]
                },
                {
                  title: "Стаття 41. Енергетика",
                  content: ["Відновлювані джерела", "Енергоефективність", "Сонячні панелі", "Енергозбереження"]
                },
                {
                  title: "Стаття 42. Транспорт",
                  content: ["Екологічний транспорт", "Велосипедний рух", "Пішохідні зони", "Громадський транспорт"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Розділ X - Заключні положення */}
          <div className="bg-festival-blue/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">Розділ X. Заключні положення</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Стаття 43. Зміни до Конституції",
                  content: ["Пропозиції від громадян", "Розгляд Радою Республіки", "Голосування", "Затвердження змін"]
                },
                {
                  title: "Стаття 44. Дія Конституції",
                  content: ["Діє на території фестивалю", "Період проведення заходу", "Поширюється на всіх учасників", "Має найвищу силу"]
                },
                {
                  title: "Стаття 45. Міжнародні відносини",
                  content: ["Дружні відносини з іншими фестивалями", "Культурний обмін", "Спільні проекти", "Мирне співіснування"]
                },
                {
                  title: "Стаття 46. Спадкоємність",
                  content: ["Передача традицій", "Збереження досвіду", "Розвиток ідей", "Еволюція фестивалю"]
                },
                {
                  title: "Стаття 47. Інтелектуальна власність",
                  content: ["Захист авторських прав", "Використання творів", "Ліцензування", "Справедлива компенсація"]
                },
                {
                  title: "Стаття 48. Інновації",
                  content: ["Технологічний розвиток", "Цифрові рішення", "Інноваційні формати", "Експериментальні проекти"]
                },
                {
                  title: "Стаття 49. Майбутнє Республіки",
                  content: ["Розвиток традицій", "Нові горизонти", "Культурна еволюція", "Вічність мистецтва"]
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-festival-blue/20">
                  <h4 className="text-lg font-bold text-festival-blue mb-3">{article.title}</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {article.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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