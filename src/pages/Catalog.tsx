import { useState } from 'react';
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
    },
    {
      id: 9,
      title: 'Фотокнига "Воспоминания"',
      price: 5000,
      originalPrice: 7000,
      priceRange: '3000–7000 ₽',
      emotion: 'Ностальгия',
      category: 'Персональные',
      image: '/img/883bba54-825c-48ae-966b-2b97cfbf5b42.jpg',
      description: 'Профессионально оформленная книга с вашими самыми дорогими воспоминаниями',
      rating: 4.9,
      reviews: 234,
      isPopular: true
    },
    {
      id: 10,
      title: 'Аудиосообщение "Голос близких"',
      price: 2250,
      priceRange: '1500–3000 ₽',
      emotion: 'Благодарность',
      category: 'Персональные',
      image: '/img/06265700-108b-435a-b55e-be8e991d25c4.jpg',
      description: 'Записанные голосовые послания от дорогих людей в красивом оформлении',
      rating: 4.8,
      reviews: 156,
      isNew: true
    },
    {
      id: 11,
      title: 'Коробка эмоций "Моменты счастья"',
      price: 3750,
      priceRange: '2500–5000 ₽',
      emotion: 'Радость',
      category: 'Наборы',
      image: '/img/6b508cef-b359-4493-8212-ef827478f742.jpg',
      description: 'Тематическая коробка с предметами, вызывающими яркие положительные эмоции',
      rating: 4.7,
      reviews: 189,
      isPopular: true
    },
    {
      id: 12,
      title: 'Романтический вечер',
      price: 20000,
      priceRange: '10 000–30 000 ₽',
      emotion: 'Благодарность',
      category: 'Впечатления',
      image: '/img/73579fc7-937f-4951-9016-e6224ef2201e.jpg',
      description: 'Незабываемый романтический вечер с индивидуальным сценарием',
      rating: 4.9,
      reviews: 95,
      isPremium: true
    },
    {
      id: 13,
      title: 'Мастер-класс',
      price: 5500,
      priceRange: '3000–8000 ₽',
      emotion: 'Вдохновение',
      category: 'Впечатления',
      image: '/img/4237b146-51de-4703-8740-7522326d9217.jpg',
      description: 'Творческий или профессиональный мастер-класс по вашему выбору',
      rating: 4.8,
      reviews: 267,
      isPopular: true
    },
    {
      id: 14,
      title: 'Путешествие-воспоминание',
      price: 32500,
      priceRange: '15 000–50 000 ₽',
      emotion: 'Ностальгия',
      category: 'Впечатления',
      image: '/img/8a52bf37-180e-490b-a463-2bfcfb9467df.jpg',
      description: 'Поездка в места, связанные с важными воспоминаниями',
      rating: 4.9,
      reviews: 78,
      isPremium: true
    },
    {
      id: 15,
      title: 'Сладкий набор "Вкус счастья"',
      price: 3500,
      priceRange: '2000–5000 ₽',
      emotion: 'Радость',
      category: 'Сладости',
      image: '/img/9ef72194-12c1-496a-9804-b3c457c55a29.jpg',
      description: 'Премиальные сладости, подобранные для создания радостных моментов',
      rating: 4.6,
      reviews: 198
    },
    {
      id: 16,
      title: 'Ароматный чай или кофе "Воспоминания"',
      price: 2250,
      priceRange: '1500–3000 ₽',
      emotion: 'Умиротворение',
      category: 'Напитки',
      image: '/img/2d5a79ec-80d7-422c-99ae-0c610fc4a5a3.jpg',
      description: 'Коллекция редких сортов чая и кофе с ароматами, пробуждающими воспоминания',
      rating: 4.7,
      reviews: 145
    },
    {
      id: 17,
      title: 'Сертификат "Создай свою эмоцию"',
      price: 5000,
      priceRange: 'от 5000 ₽',
      emotion: 'Вдохновение',
      category: 'Сертификаты',
      image: '/img/263f26c4-673c-44cc-bf7e-372867030b47.jpg',
      description: 'Универсальный сертификат на создание персонального подарка под любую эмоцию',
      rating: 4.8,
      reviews: 156,
      isPremium: true
    }
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
            {/* Gift Grid */}
            {filteredGifts.length > 0 ? (
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