import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Запрос отправлен!",
      description: "Мы свяжемся с вами в течение 1 рабочего дня.",
    });

    // Очистка формы
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      priority: 'medium'
    });

    setIsSubmitting(false);
  };

  const supportContacts = [
    {
      type: 'Телефон',
      value: '+7 (495) 123-45-67',
      icon: 'Phone',
      description: 'Звонки принимаются с 9:00 до 21:00',
      action: 'tel:+74951234567'
    },
    {
      type: 'WhatsApp',
      value: '+7 (915) 555-77-88',
      icon: 'MessageCircle',
      description: 'Быстрые ответы в мессенджере',
      action: 'https://wa.me/79155557788'
    },
    {
      type: 'Email',
      value: 'support@emotions.ru',
      icon: 'Mail',
      description: 'Письменные запросы и документы',
      action: 'mailto:support@emotions.ru'
    },
    {
      type: 'Telegram',
      value: '@emotions_support',
      icon: 'Send',
      description: 'Онлайн-консультации',
      action: 'https://t.me/emotions_support'
    }
  ];

  const faqItems = [
    {
      question: 'Как долго изготавливается персональный подарок?',
      answer: 'Время изготовления зависит от сложности заказа: от 2-3 дней для простых подарков до 1-2 недель для эксклюзивных решений.'
    },
    {
      question: 'Можно ли изменить заказ после оплаты?',
      answer: 'Да, изменения возможны в течение 24 часов после оплаты, если работа над заказом еще не началась.'
    },
    {
      question: 'Какие гарантии качества вы предоставляете?',
      answer: 'Мы гарантируем 100% возврат средств, если подарок не соответствует заявленным характеристикам или не вызвал ожидаемых эмоций.'
    },
    {
      question: 'Доставляете ли вы в другие города?',
      answer: 'Да, мы доставляем по всей России. Стоимость и сроки доставки рассчитываются индивидуально.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
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
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-emotion-joy transition-colors">Главная</a>
              <a href="/catalog" className="text-gray-700 hover:text-emotion-joy transition-colors">Каталог</a>
              <a href="/support" className="text-emotion-joy font-medium">Поддержка</a>
            </nav>
            <a href="/cart">
              <Button className="bg-emotion-joy hover:bg-emotion-joy/90 text-white">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Служба поддержки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы готовы помочь вам с любыми вопросами о наших персональных подарках и услугах
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="MessageSquare" size={24} className="text-emotion-joy" />
                <span>Отправить запрос</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Тема обращения *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Кратко опишите проблему"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Приоритет
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emotion-joy"
                    >
                      <option value="low">Низкий</option>
                      <option value="medium">Средний</option>
                      <option value="high">Высокий</option>
                      <option value="urgent">Срочный</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Подробно опишите вашу ситуацию или вопрос..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emotion-joy hover:bg-emotion-joy/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить запрос
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Phone" size={24} className="text-emotion-gratitude" />
                  <span>Связаться с нами</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportContacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Icon name={contact.icon as any} size={20} className="text-emotion-joy" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-900">{contact.type}</span>
                        {contact.type === 'Телефон' && (
                          <Badge className="bg-green-100 text-green-700 text-xs">
                            Прямая линия
                          </Badge>
                        )}
                      </div>
                      <p className="text-emotion-joy font-medium">{contact.value}</p>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                    </div>
                    <a
                      href={contact.action}
                      target={contact.action.startsWith('http') ? '_blank' : undefined}
                      rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <Button variant="outline" size="sm">
                        <Icon name="ExternalLink" size={14} className="mr-1" />
                        Связаться
                      </Button>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Clock" size={24} className="text-emotion-nostalgia" />
                  <span>Часы работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Понедельник - Пятница</span>
                    <span className="font-medium text-gray-900">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Суббота</span>
                    <span className="font-medium text-gray-900">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Воскресенье</span>
                    <span className="font-medium text-gray-900">12:00 - 16:00</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <Icon name="Info" size={16} className="inline mr-1" />
                      Экстренные вопросы обрабатываются круглосуточно через WhatsApp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="HelpCircle" size={24} className="text-emotion-inspiration" />
              <span>Часто задаваемые вопросы</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="p-4 bg-gray-50 rounded-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer hover:text-emotion-joy">
                    {item.question}
                  </summary>
                  <div className="mt-3 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;