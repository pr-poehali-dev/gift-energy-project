import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface CatalogFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedEmotion: string;
  setSelectedEmotion: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  filteredGiftsCount: number;
  totalGiftsCount: number;
}

const CatalogFilters = ({
  searchQuery,
  setSearchQuery,
  selectedEmotion,
  setSelectedEmotion,
  priceRange,
  setPriceRange,
  filteredGiftsCount,
  totalGiftsCount
}: CatalogFiltersProps) => {
  const emotions = [
    { value: 'all', label: 'Все эмоции' },
    { value: 'Радость', label: 'Радость' },
    { value: 'Благодарность', label: 'Благодарность' },
    { value: 'Ностальгия', label: 'Ностальгия' },
    { value: 'Вдохновение', label: 'Вдохновение' },
    { value: 'Умиротворение', label: 'Умиротворение' }
  ];

  const resetFilters = () => {
    setSelectedEmotion('all');
    setPriceRange('all');
    setSearchQuery('');
  };

  return (
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
              className="w-full transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-md"
              onClick={resetFilters}
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
          Найдено {filteredGiftsCount} из {totalGiftsCount} подарков
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
    </div>
  );
};

export default CatalogFilters;