import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Gift {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  priceRange?: string;
  emotion: string;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  isPopular?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
}

interface GiftCardProps {
  gift: Gift;
  onAddToCart: (gift: Gift) => void;
}

const GiftCard = ({ gift, onAddToCart }: GiftCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
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
          <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0 transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-red-100 hover:text-red-500">
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
        <Button 
          className="w-full bg-emotion-gratitude hover:bg-emotion-gratitude/90 text-white text-sm transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg transform-gpu"
          onClick={() => onAddToCart(gift)}
        >
          <Icon name="ShoppingCart" size={14} className="mr-2" />
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default GiftCard;