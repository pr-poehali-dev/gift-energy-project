import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';

const Index = () => {
  const { totalItems } = useCart();
  const emotions = [
    {
      name: 'Радость',
      color: 'bg-emotion-joy',
      icon: 'Smile',
      description: 'Подарки, которые вызывают улыбку и счастье'
    },
    {
      name: 'Благодарность',
      color: 'bg-emotion-gratitude',
      icon: 'Heart',
      description: 'Выражение признательности и теплых чувств'
    },
    {
      name: 'Ностальгия',
      color: 'bg-emotion-nostalgia',
      icon: 'Clock',
      description: 'Воспоминания о дорогих моментах'
    },
    {
      name: 'Вдохновение',
      color: 'bg-emotion-inspiration',
      icon: 'Zap',
      description: 'Мотивация к новым достижениям'
    },
    {
      name: 'Умиротворение',
      color: 'bg-emotion-peace',
      icon: 'Leaf',
      description: 'Спокойствие и гармония'
    }
  ];

  const giftCategories = [
    {
      title: 'Эмоциональные коробки-сюрпризы',
      price: 'от 1 000 ₽',
      image: '/img/fbc14a06-f8f3-452e-b8f8-d851d2604a53.jpg',
      emotion: 'Радость',
      description: 'Готовые тематические наборы с мини-играми, записками и подарками внутри',
      rating: 4.8,
      isPopular: true
    },
    {
      title: 'Подарки-объятия',
      price: 'от 1 500 ₽',
      image: '/img/3615ba2b-01a3-45db-821a-800ebdb03f85.jpg',
      emotion: 'Благодарность',
      description: 'Мягкие одеяла или подушки с вышивками, создающие ощущение тепла и заботы',
      rating: 4.9,
      isPopular: true
    },
    {
      title: 'Эмоциональные растения',
      price: 'от 900 ₽',
      image: '/img/ba03c6d6-5535-482e-8e01-f9b842816b1c.jpg',
      emotion: 'Умиротворение',
      description: 'Маленькие комнатные растения с мотивационными надписями',
      rating: 4.9,
      isPopular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emotion-joy/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emotion-gratitude/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emotion-nostalgia/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emotion-inspiration/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-emotion-peace/10 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emotion-joy rounded-full flex items-center justify-center">
                <Icon name="Gift" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-gray-900">Эмоции</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/catalog" className="text-sm text-gray-700 hover:text-emotion-joy transition-colors">Каталог</a>
              <a href="#emotions" className="text-sm text-gray-700 hover:text-emotion-joy transition-colors">Эмоции</a>
              <a href="#personalization" className="text-sm text-gray-700 hover:text-emotion-joy transition-colors">Персонализация</a>
              <a href="#delivery" className="text-sm text-gray-700 hover:text-emotion-joy transition-colors">Доставка</a>
              <a href="#contacts" className="text-sm text-gray-700 hover:text-emotion-joy transition-colors">Контакты</a>
              <a href="/support" className="text-sm text-gray-700 hover:text-emotion-joy transition-colors">Поддержка</a>
            </nav>
            <a href="/cart">
              <Button className="bg-emotion-joy hover:bg-emotion-joy/90 text-white relative">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-heading font-bold text-gray-900 mb-6">
              Подарки, которые <span className="text-emotion-joy">дарят эмоции</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-body">
              Мы создаем <span className="font-semibold text-emotion-gratitude">персонализированные подарки и услуги</span>, 
              индивидуально подобранные под каждого получателя. Каждый подарок изготавливается 
              <span className="font-semibold text-emotion-inspiration"> специально для вас</span> и предназначен для создания 
              определенных эмоций и воспоминаний.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/catalog">
                <Button size="lg" className="bg-emotion-joy hover:bg-emotion-joy/90 text-white px-8">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Подобрать подарок
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-emotion-gratitude text-emotion-gratitude hover:bg-emotion-gratitude hover:text-white">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emotions Section */}
      <section id="emotions" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Выберите эмоцию для подарка
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {emotions.map((emotion, index) => (
              <a 
                key={emotion.name} 
                href={`/catalog?emotion=${encodeURIComponent(emotion.name)}`}
                className="block"
              >
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${emotion.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon name={emotion.icon as any} size={24} className="text-white" />
                    </div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-2">{emotion.name}</h4>
                    <p className="text-sm text-gray-600 font-body">{emotion.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Популярные категории подарков
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCategories.map((category, index) => (
              <Card key={category.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-heading font-semibold text-gray-900">{category.title}</h4>
                    <div className="flex items-center space-x-2">
                      {category.isPopular && (
                        <Badge className="bg-red-500 text-white text-xs">
                          Популярное
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-emotion-nostalgia/20 text-emotion-nostalgia border-0">
                        {category.emotion}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{category.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{category.rating}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-emotion-joy mb-4">{category.price}</p>
                  <a href="/catalog">
                    <Button className="w-full bg-emotion-gratitude hover:bg-emotion-gratitude/90 text-white">
                      Смотреть в каталоге
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Certificates Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Подарочные сертификаты
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Не знаете что выбрать? Подарите свободу выбора с нашими сертификатами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-dashed border-purple-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Gift" size={24} className="text-white" />
                </div>
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">Базовый</h4>
                <p className="text-3xl font-bold text-purple-600 mb-4">от 2 000₽</p>
                <p className="text-gray-600 mb-6">
                  Идеально для небольших приятных сюрпризов. Подходит для большинства подарков из каталога.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Купить сертификат
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-solid border-purple-300 bg-gradient-to-br from-white to-purple-50">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Популярный
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">Премиум</h4>
                <p className="text-3xl font-bold text-purple-600 mb-4">от 5 000₽</p>
                <p className="text-gray-600 mb-6">
                  Включает персональную консультацию и помощь в подборе идеального подарка.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Купить сертификат
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-solid border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  VIP
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Crown" size={24} className="text-white" />
                </div>
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">Эксклюзив</h4>
                <p className="text-3xl font-bold text-purple-600 mb-4">от 10 000₽</p>
                <p className="text-gray-600 mb-6">
                  Безграничные возможности персонализации и эксклюзивные подарки.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-800 hover:to-pink-800 text-white">
                  Купить сертификат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Наша команда креатива
          </h3>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 font-body mb-8">
              За каждым идеальным подарком стоит команда профессионалов, которые понимают психологию эмоций и искусство дарения.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emotion-joy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Brain" size={24} className="text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Психологи</h4>
                  <p className="text-gray-600 font-body">Изучают эмоциональные потребности и подбирают подарки, которые затронут душу</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emotion-gratitude rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Palette" size={24} className="text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Дизайнеры</h4>
                  <p className="text-gray-600 font-body">Создают уникальное оформление и персонализированные элементы для каждого подарка</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emotion-inspiration rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lightbulb" size={24} className="text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Креативщики</h4>
                  <p className="text-gray-600 font-body">Придумывают неожиданные решения и находят самые необычные идеи для подарков</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section id="personalization" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              Персонализация подарков
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emotion-inspiration rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">Анкета получателя</h4>
                      <p className="text-gray-600 font-body">Расскажите о человеке, его интересах и предпочтениях</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emotion-gratitude rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">Выбор эмоции</h4>
                      <p className="text-gray-600 font-body">Какую эмоцию должен вызвать подарок</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emotion-peace rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Sparkles" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">Индивидуальное решение</h4>
                      <p className="text-gray-600 font-body">Наши эксперты подберут идеальный подарок</p>
                    </div>
                  </div>
                </div>
                <a href="/personalization">
                  <Button className="mt-8 bg-emotion-joy hover:bg-emotion-joy/90 text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Начать персонализацию
                  </Button>
                </a>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-emotion-nostalgia/20 to-emotion-peace/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Heart" size={80} className="text-emotion-joy/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Условия доставки
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emotion-inspiration rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Быстрая доставка</h4>
                <p className="text-gray-600 font-body">По Москве — в день заказа, по России — 1-3 дня</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emotion-gratitude rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Бережная упаковка</h4>
                <p className="text-gray-600 font-body">Каждый подарок упакован с особой заботой</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emotion-peace rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Точно в срок</h4>
                <p className="text-gray-600 font-body">Гарантируем доставку к указанной дате</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Свяжитесь с нами
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-emotion-joy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Телефон</h4>
                  <p className="text-gray-600 font-body">+7 (980) 187-20-23</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-emotion-gratitude rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 font-body">Clorrty@yandex.ru</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-emotion-joy hover:bg-emotion-joy/90 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать консультанту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emotion-joy rounded-full flex items-center justify-center">
                <Icon name="Gift" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold">Эмоции</h1>
            </div>
            <p className="text-gray-400 font-body mb-6">Подарки, которые дарят настоящие эмоции</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" size={24} className="text-gray-400 hover:text-emotion-joy cursor-pointer" />
              <Icon name="Facebook" size={24} className="text-gray-400 hover:text-emotion-joy cursor-pointer" />
              <Icon name="MessageCircle" size={24} className="text-gray-400 hover:text-emotion-joy cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;