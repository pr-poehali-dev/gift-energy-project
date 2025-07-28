import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';

const CatalogHeader = () => {
  const { totalItems } = useCart();

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="p-2 transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100" onClick={() => window.history.back()}>
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
            <a href="/" className="text-gray-700 hover:text-emotion-joy transition-all duration-200 hover:scale-105 active:scale-95">Главная</a>
            <a href="/cart" className="text-gray-700 hover:text-emotion-joy transition-all duration-200 hover:scale-105 active:scale-95">Корзина</a>
          </nav>
          <a href="/cart">
            <Button className="bg-emotion-joy hover:bg-emotion-joy/90 text-white relative transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
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
  );
};

export default CatalogHeader;