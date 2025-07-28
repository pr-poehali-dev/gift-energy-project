import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import GiftCard from '@/components/catalog/GiftCard';
import EmptyResults from '@/components/catalog/EmptyResults';

const Catalog = () => {
  const [selectedEmotion, setSelectedEmotion] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();

  // Проверяем URL параметры при загрузке компонента
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emotionParam = urlParams.get('emotion');
    if (emotionParam) {
      setSelectedEmotion(emotionParam);
    }
  }, []);

  // Группировка товаров по эмоциям
  const giftsByEmotion = {
    'Радость': [
      {
        id: 1,
        title: 'Эмоциональные коробки-сюрпризы',
        price: 1000,
        emotion: 'Радость',
        category: 'Коробки-сюрпризы',
        image: '/img/fbc14a06-f8f3-452e-b8f8-d851d2604a53.jpg',
        description: 'Готовые тематические наборы ("Утро счастья", "Вечер уюта") с мини-играми, записками и подарками внутри',
        rating: 4.8,
        reviews: 145,
        isPopular: true
      },
      {
        id: 11,
        title: 'Сертификат "Базовый"',
        price: 2000,
        emotion: 'Радость',
        category: 'Сертификаты',
        image: '/img/89e1c169-b237-41c5-bf18-80ce801d18e9.jpg',
        description: 'Подарочный сертификат на любой товар из каталога до 2000₽',
        rating: 4.9,
        reviews: 189,
        isPopular: true
      }
    ],
    'Благодарность': [
      {
        id: 4,
        title: 'Подарки-объятия',
        price: 1500,
        emotion: 'Благодарность',
        category: 'Текстиль',
        image: '/img/3615ba2b-01a3-45db-821a-800ebdb03f85.jpg',
        description: 'Мягкие одеяла или подушки с вышивками, создающие ощущение тепла и заботы',
        rating: 4.9,
        reviews: 203,
        isPopular: true
      },
      {
        id: 12,
        title: 'Сертификат "Премиум"',
        price: 5000,
        emotion: 'Благодарность',
        category: 'Сертификаты',
        image: '/img/4833b102-2b10-4324-a08f-8ed250710f5a.jpg',
        description: 'Премиум сертификат с персональной консультацией и подбором подарка',
        rating: 4.9,
        reviews: 95,
        isPremium: true
      }
    ],
    'Ностальгия': [
      {
        id: 6,
        title: 'Фотокарточки с анимацией',
        price: 250,
        emotion: 'Ностальгия',
        category: 'Мультимедиа',
        image: '/img/8858ddee-f9c0-4175-b16f-30ea04590287.jpg',
        description: 'Карточки с трогательными историями и QR-кодами на видео или аудио',
        rating: 4.8,
        reviews: 178,
        isNew: true
      },
      {
        id: 9,
        title: 'Ароматные рукописные послания',
        price: 350,
        emotion: 'Ностальгия',
        category: 'Письма',
        image: '/img/0180a24e-89e6-4096-8236-8277281a4d80.jpg',
        description: 'Письма с ароматическими маслами или специями',
        rating: 4.8,
        reviews: 234
      }
    ],
    'Вдохновение': [
      {
        id: 2,
        title: 'Письма из будущего',
        price: 300,
        emotion: 'Вдохновение',
        category: 'Персональные письма',
        image: '/img/2c0d9b80-f719-4f0f-a53c-9527dd9e5492.jpg',
        description: 'Персонализированные письма от "будущего" или "вас самих", вызывающие улыбку и удивление',
        rating: 4.9,
        reviews: 89,
        isNew: true
      },
      {
        id: 7,
        title: 'Подарки-головоломки',
        price: 700,
        emotion: 'Вдохновение',
        category: 'Игры',
        image: '/img/3a103e62-e4a5-4a90-b89f-89ea1d2d7a1b.jpg',
        description: 'Мини-игры или квесты, раскрывающие подарок',
        rating: 4.7,
        reviews: 112
      },
      {
        id: 10,
        title: 'Подарочные квесты',
        price: 1200,
        emotion: 'Вдохновение',
        category: 'Квесты',
        image: '/img/29017e1a-d7a1-4502-b9e2-08b1c8a5dd2f.jpg',
        description: 'Комплекты для проведения небольших ритуалов или квестов',
        rating: 4.8,
        reviews: 156,
        isNew: true
      },
      {
        id: 13,
        title: 'VIP Сертификат "Эксклюзив"',
        price: 10000,
        emotion: 'Вдохновение',
        category: 'Сертификаты',
        image: '/img/57e3c4a8-56ef-42c4-97ed-970cba3b6584.jpg',
        description: 'Эксклюзивный VIP сертификат с безграничными возможностями персонализации',
        rating: 5.0,
        reviews: 67,
        isPremium: true
      }
    ],
    'Умиротворение': [
      {
        id: 3,
        title: 'Настроение в банке',
        price: 800,
        emotion: 'Умиротворение',
        category: 'Декор',
        image: '/img/d50b738d-6ef0-412f-85b3-96acbde39504.jpg',
        description: 'Стеклянные банки с маленькими предметами и записками для нужного настроения',
        rating: 4.7,
        reviews: 126
      },
      {
        id: 5,
        title: 'Эмоциональные коктейли',
        price: 500,
        emotion: 'Умиротворение',
        category: 'Ароматы',
        image: '/img/3c37f6a8-2ce9-4cff-bd4a-82ad7f22b1fe.jpg',
        description: 'Набор мини-ароматов или масел для вызова определённого настроения',
        rating: 4.6,
        reviews: 94
      },
      {
        id: 8,
        title: 'Эмоциональные растения',
        price: 900,
        emotion: 'Умиротворение',
        category: 'Растения',
        image: '/img/ba03c6d6-5535-482e-8e01-f9b842816b1c.jpg',
        description: 'Маленькие комнатные растения с мотивационными надписями',
        rating: 4.9,
        reviews: 87,
        isPopular: true
      }
    ]
  };

  // Создаем плоский массив для обратной совместимости с фильтрами
  const allGifts = Object.values(giftsByEmotion).flat();

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

  const handleAddToCart = (gift: any) => {
    addItem({
      id: gift.id,
      title: gift.title,
      price: gift.price,
      emotion: gift.emotion,
      image: gift.image,
      personalization: `Подарок из категории "${gift.category}"`
    });
    
    toast({
      title: "Товар добавлен в корзину!",
      description: `${gift.title} добавлен в корзину`,
    });
  };

  const resetFilters = () => {
    setSelectedEmotion('all');
    setPriceRange('all');
    setSearchQuery('');
  };

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
        <CatalogHeader />

        {/* Catalog Content */}
        <section className="py-12 px-4">
          <CatalogFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedEmotion={selectedEmotion}
            setSelectedEmotion={setSelectedEmotion}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            filteredGiftsCount={filteredGifts.length}
            totalGiftsCount={allGifts.length}
          />

          <div className="container mx-auto">
            {/* Gift Grid - показываем либо отфильтрованные товары, либо по эмоциям */}
            {filteredGifts.length > 0 && selectedEmotion !== 'all' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGifts.map((gift) => (
                  <GiftCard 
                    key={gift.id} 
                    gift={gift} 
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : selectedEmotion === 'all' && searchQuery === '' && priceRange === 'all' ? (
              // Показываем каталог по эмоциям
              <div className="space-y-12">
                {Object.entries(giftsByEmotion).map(([emotion, gifts]) => (
                  <div key={emotion}>
                    <div className="flex items-center mb-6">
                      <div className={`w-4 h-4 rounded-full mr-3 ${
                        emotion === 'Радость' ? 'bg-emotion-joy' :
                        emotion === 'Благодарность' ? 'bg-emotion-gratitude' :
                        emotion === 'Ностальгия' ? 'bg-emotion-nostalgia' :
                        emotion === 'Вдохновение' ? 'bg-emotion-inspiration' :
                        'bg-emotion-peace'
                      }`}></div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900">{emotion}</h3>
                      <div className="flex-1 h-px bg-gray-200 ml-4"></div>
                      <span className="text-sm text-gray-500 ml-4">{gifts.length} товаров</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {gifts.map((gift) => (
                        <GiftCard 
                          key={gift.id} 
                          gift={gift} 
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredGifts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGifts.map((gift) => (
                  <GiftCard 
                    key={gift.id} 
                    gift={gift} 
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <EmptyResults onResetFilters={resetFilters} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalog;