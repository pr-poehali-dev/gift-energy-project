import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Персональный фотоальбом "Наши моменты"',
      price: 2500,
      quantity: 1,
      emotion: 'Ностальгия',
      image: '/img/6b36ba7b-b4ca-4f1f-8c23-e4079611676b.jpg',
      personalization: 'С вашими фотографиями + гравировка имени'
    },
    {
      id: 2,
      title: 'Подарочный набор "Радость дня"',
      price: 1800,
      quantity: 2,
      emotion: 'Радость',
      image: '/img/ba3d5729-226b-4d23-a7d8-88367adec625.jpg',
      personalization: 'Любимые сладости + персональная открытка'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emotion-joy/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emotion-gratitude/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emotion-nostalgia/10 rounded-full blur-3xl"></div>
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
                <a href="/catalog" className="text-gray-700 hover:text-emotion-joy transition-colors">Каталог</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Cart Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <Icon name="ShoppingCart" size={28} className="text-emotion-joy" />
              <h2 className="text-3xl font-heading font-bold text-gray-900">Ваша корзина</h2>
              <Badge variant="secondary" className="bg-emotion-joy/20 text-emotion-joy">
                {cartItems.length} товаров
              </Badge>
            </div>

            {cartItems.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="ShoppingCart" size={64} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">Корзина пуста</h3>
                  <p className="text-gray-600 font-body mb-6">Добавьте подарки, чтобы порадовать близких!</p>
                  <Button className="bg-emotion-joy hover:bg-emotion-joy/90 text-white">
                    <Icon name="Gift" size={16} className="mr-2" />
                    Перейти к покупкам
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-heading font-semibold text-gray-900">{item.title}</h3>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, 0)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <Icon name="X" size={16} />
                              </Button>
                            </div>
                            <Badge variant="secondary" className="bg-emotion-nostalgia/20 text-emotion-nostalgia border-0 mb-2">
                              {item.emotion}
                            </Badge>
                            <p className="text-sm text-gray-600 font-body mb-3">{item.personalization}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Icon name="Minus" size={12} />
                                </Button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Icon name="Plus" size={12} />
                                </Button>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-emotion-joy">{item.price * item.quantity} ₽</p>
                                {item.quantity > 1 && (
                                  <p className="text-sm text-gray-500">{item.price} ₽ за шт.</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">Итого</h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                          <span className="font-semibold">{totalPrice} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Доставка</span>
                          <span className="font-semibold text-green-600">Бесплатно</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg">
                          <span className="font-heading font-semibold">К оплате</span>
                          <span className="font-heading font-bold text-emotion-joy">{totalPrice} ₽</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-emotion-joy hover:bg-emotion-joy/90 text-white mb-3">
                        <Icon name="CreditCard" size={16} className="mr-2" />
                        Перейти к оплате
                      </Button>
                      
                      <Button variant="outline" className="w-full border-emotion-gratitude text-emotion-gratitude hover:bg-emotion-gratitude hover:text-white">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Помощь с выбором
                      </Button>

                      <div className="mt-4 p-4 bg-emotion-peace/10 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Shield" size={16} className="text-emotion-peace" />
                          <span className="text-sm font-semibold text-gray-900">Гарантии</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Возврат в течение 14 дней</li>
                          <li>• Бесплатная доставка по Москве</li>
                          <li>• Персонализация бесплатно</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;