import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Catalog = () => {
  const [selectedEmotion, setSelectedEmotion] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allGifts = [
    {
      id: 1,
      title: 'Персональный фотоальбом "Наши моменты"',
      price: 2500,
      originalPrice: 3000,
      emotion: 'Ностальгия',
      category: 'Персональные',
      image: '/img/6b36ba7b-b4ca-4f1f-8c23-e4079611676b.jpg',
      description: 'Альбом с вашими фотографиями и памятными моментами',
      rating: 4.9,
      reviews: 127,
      isPopular: true
    },
    {
      id: 2,
      title: 'Подарочный набор "Радость дня"',
      price: 1800,
      emotion: 'Радость',
      category: 'Наборы',
      image: '/img/ba3d5729-226b-4d23-a7d8-88367adec625.jpg',
      description: 'Коробка счастья с любимыми сладостями и приятными мелочами',
      rating: 4.7,
      reviews: 89,
      isNew: true
    },
    {
      id: 3,
      title: 'Впечатление "Мастер-класс с вдохновением"',
      price: 3200,
      emotion: 'Вдохновение',
      category: 'Впечатления',
      image: '/img/599a6424-41df-4501-b75f-dbebb2c10105.jpg',
      description: 'Творческий мастер-класс для развития новых навыков',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 4,
      title: 'Ювелирное украшение с гравировкой',
      price: 4500,
      emotion: 'Благодарность',
      category: 'Украшения',
      image: '/img/dac3de79-6fa4-4761-b6e6-7dea3a65efd8.jpg',
      description: 'Элегантное украшение с персональной гравировкой',
      rating: 4.9,
      reviews: 203,
      isPremium: true
    },
    {
      id: 5,
      title: 'СПА-набор "Релакс и умиротворение"',
      price: 2200,
      emotion: 'Умиротворение',
      category: 'Релакс',
      image: '/img/e57d8745-f5ab-49f3-bafe-a1e505e2b83f.jpg',
      description: 'Набор для домашнего СПА и полного расслабления',
      rating: 4.6,
      reviews: 94
    },
    {
      id: 6,
      title: 'Приключение "Активный отдых"',
      price: 5500,
      emotion: 'Вдохновение',
      category: 'Впечатления',
      image: '/img/f7d21a53-0874-4ee7-b9c5-9e3e604f59a3.jpg',
      description: 'Активные приключения на природе для заряда энергии',
      rating: 4.8,
      reviews: 178,
      isPopular: true
    },
    {
      id: 7,
      title: 'Коллекция премиальных шоколадов',
      price: 1600,
      emotion: 'Радость',
      category: 'Сладости',
      image: '/img/38f5b364-fc84-47e4-aefb-99307f5759b9.jpg',
      description: 'Изысканные шоколадные конфеты ручной работы',
      rating: 4.7,
      reviews: 112
    },
    {
      id: 8,
      title: 'Звёздная карта "Наша особенная дата"',
      price: 2800,
      emotion: 'Ностальгия',
      category: 'Персональные',
      image: '/img/5c7249d9-aca0-4b3c-bd14-03276944ef23.jpg',
      description: 'Карта звёздного неба на важную для вас дату',
      rating: 4.9,
      reviews: 87,
      isNew: true
    }
  ];

  const emotions = [
    { value: 'all', label: 'Все эмоции' },
    { value: 'Радость', label: 'Радость' },
    { value: 'Благодарность', label: 'Благодарность' },
    { value: 'Ностальгия', label: 'Ностальгия' },
    { value: 'Вдохновение', label: 'Вдохновение' },
    { value: 'Умиротворение', label: 'Умиротворение' }
  ];

  const filteredGifts = allGifts.filter(gift => {
    const matchesEmotion = selectedEmotion === 'all' || gift.emotion === selectedEmotion;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under2000' && gift.price < 2000) ||
      (priceRange === '2000to4000' && gift.price >= 2000 && gift.price <= 4000) ||
      (priceRange === 'over4000' && gift.price > 4000);
    const matchesSearch = gift.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gift.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesEmotion && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emotion-joy/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emotion-gratitude/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emotion-nostalgia/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emotion-inspiration/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="p-2" onClick={() => window.history.back()}>
                  <Icon name="ArrowLeft" size={20} />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emotion-joy rounded-full flex items-center justify-center">
                    <Icon name="Gift" size={20} className="text-white" />
                  </div>
                  <h1 className="text-2xl font-heading font-bold text-gray-900">Эмоции</h1>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-emotion-joy transition-colors">Главная</a>
                <a href="/cart" className="text-gray-700 hover:text-emotion-joy transition-colors">Корзина</a>
              </nav>
              <Button className="bg-emotion-joy hover:bg-emotion-joy/90 text-white">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </header>

        {/* Catalog Header */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Каталог подарков
              </h2>
              <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
                Найдите идеальный подарок для любой эмоции. Каждый товар тщательно отобран нашими экспертами.
              </p>
            </div>

            {/* Filters */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="Найти подарок..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Эмоция</label>
                  <Select value={selectedEmotion} onValueChange={setSelectedEmotion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {emotions.map((emotion) => (
                        <SelectItem key={emotion.value} value={emotion.value}>
                          {emotion.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Цена</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Любая цена</SelectItem>
                      <SelectItem value="under2000">до 2 000 ₽</SelectItem>
                      <SelectItem value="2000to4000">2 000 - 4 000 ₽</SelectItem>
                      <SelectItem value="over4000">от 4 000 ₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedEmotion('all');
                      setPriceRange('all');
                      setSearchQuery('');
                    }}
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Сбросить
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 font-body">
                Найдено {filteredGifts.length} из {allGifts.length} подарков
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Сортировка:</span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-low">Цена ↑</SelectItem>
                    <SelectItem value="price-high">Цена ↓</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Gift Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGifts.map((gift) => (
                <Card key={gift.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={gift.image} 
                      alt={gift.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {gift.isNew && (
                        <Badge className="bg-green-500 text-white">Новинка</Badge>
                      )}
                      {gift.isPopular && (
                        <Badge className="bg-orange-500 text-white">Хит</Badge>
                      )}
                      {gift.isPremium && (
                        <Badge className="bg-purple-500 text-white">Premium</Badge>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0">
                        <Icon name="Heart" size={14} />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge variant="secondary" className="bg-emotion-nostalgia/20 text-emotion-nostalgia border-0 text-xs">
                        {gift.emotion}
                      </Badge>
                    </div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-2 line-clamp-2">
                      {gift.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-body mb-3 line-clamp-2">
                      {gift.description}
                    </p>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{gift.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">({gift.reviews} отзывов)</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-emotion-joy">{gift.price} ₽</span>
                        {gift.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            {gift.originalPrice} ₽
                          </span>
                        )}
                      </div>
                    </div>
                    <Button className="w-full bg-emotion-gratitude hover:bg-emotion-gratitude/90 text-white text-sm">
                      <Icon name="ShoppingCart" size={14} className="mr-2" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredGifts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Подарки не найдены
                </h3>
                <p className="text-gray-600 font-body mb-6">
                  Попробуйте изменить параметры поиска или сбросить фильтры
                </p>
                <Button 
                  onClick={() => {
                    setSelectedEmotion('all');
                    setPriceRange('all');
                    setSearchQuery('');
                  }}
                  className="bg-emotion-joy hover:bg-emotion-joy/90 text-white"
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalog;