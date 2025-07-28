import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface SurveyData {
  // Основная информация о получателе
  recipientName: string;
  recipientAge: string;
  relationship: string;
  occasion: string;
  
  // Личностные характеристики
  personality: string[];
  hobbies: string[];
  lifestyle: string;
  
  // Предпочтения
  favoriteColors: string[];
  preferredStyle: string;
  budget: string;
  
  // Эмоциональные характеристики
  desiredEmotion: string;
  emotionalContext: string;
  
  // Дополнительная информация
  specialRequests: string;
  deliveryDate: string;
}

const PersonalizationSurvey = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  const [surveyData, setSurveyData] = useState<SurveyData>({
    recipientName: '',
    recipientAge: '',
    relationship: '',
    occasion: '',
    personality: [],
    hobbies: [],
    lifestyle: '',
    favoriteColors: [],
    preferredStyle: '',
    budget: '',
    desiredEmotion: '',
    emotionalContext: '',
    specialRequests: '',
    deliveryDate: ''
  });

  const emotions = [
    { value: 'joy', label: 'Радость', description: 'Веселье, счастье, позитив' },
    { value: 'gratitude', label: 'Благодарность', description: 'Признательность, теплые чувства' },
    { value: 'nostalgia', label: 'Ностальгия', description: 'Воспоминания, ностальгические моменты' },
    { value: 'inspiration', label: 'Вдохновение', description: 'Мотивация, творческий порыв' },
    { value: 'peace', label: 'Умиротворение', description: 'Спокойствие, релакс, гармония' }
  ];

  const personalityTraits = [
    'Творческий', 'Активный', 'Спокойный', 'Общительный', 'Домашний',
    'Мечтательный', 'Практичный', 'Романтичный', 'Амбициозный', 'Заботливый'
  ];

  const hobbiesOptions = [
    'Чтение', 'Спорт', 'Кулинария', 'Путешествия', 'Фотография',
    'Музыка', 'Садоводство', 'Рукоделие', 'Игры', 'Кино'
  ];

  const colorOptions = [
    'Красный', 'Синий', 'Зеленый', 'Желтый', 'Фиолетовый',
    'Розовый', 'Оранжевый', 'Серый', 'Черный', 'Белый'
  ];

  const handleArrayToggle = (array: string[], value: string, field: keyof SurveyData) => {
    const newArray = array.includes(value) 
      ? array.filter(item => item !== value)
      : [...array, value];
    setSurveyData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Здесь будет логика отправки данных
    toast({
      title: "Анкета отправлена!",
      description: "Мы подберем идеальный подарок в течение 24 часов",
    });
    navigate('/catalog');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="recipientName">Имя получателя</Label>
              <Input
                id="recipientName"
                value={surveyData.recipientName}
                onChange={(e) => setSurveyData(prev => ({ ...prev, recipientName: e.target.value }))}
                placeholder="Введите имя"
              />
            </div>
            <div>
              <Label htmlFor="recipientAge">Возраст получателя</Label>
              <Select value={surveyData.recipientAge} onValueChange={(value) => setSurveyData(prev => ({ ...prev, recipientAge: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите возраст" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-12">0-12 лет</SelectItem>
                  <SelectItem value="13-17">13-17 лет</SelectItem>
                  <SelectItem value="18-25">18-25 лет</SelectItem>
                  <SelectItem value="26-35">26-35 лет</SelectItem>
                  <SelectItem value="36-50">36-50 лет</SelectItem>
                  <SelectItem value="50+">50+ лет</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="relationship">Ваши отношения</Label>
              <Select value={surveyData.relationship} onValueChange={(value) => setSurveyData(prev => ({ ...prev, relationship: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите отношения" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family">Семья</SelectItem>
                  <SelectItem value="partner">Партнер/супруг</SelectItem>
                  <SelectItem value="friend">Друг</SelectItem>
                  <SelectItem value="colleague">Коллега</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="occasion">Повод для подарка</Label>
              <Select value={surveyData.occasion} onValueChange={(value) => setSurveyData(prev => ({ ...prev, occasion: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите повод" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="birthday">День рождения</SelectItem>
                  <SelectItem value="anniversary">Годовщина</SelectItem>
                  <SelectItem value="holiday">Праздник</SelectItem>
                  <SelectItem value="thanks">Благодарность</SelectItem>
                  <SelectItem value="apology">Извинение</SelectItem>
                  <SelectItem value="just-because">Просто так</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Личностные черты получателя</Label>
              <p className="text-sm text-gray-600 mb-3">Выберите несколько подходящих вариантов</p>
              <div className="grid grid-cols-2 gap-3">
                {personalityTraits.map((trait) => (
                  <div key={trait} className="flex items-center space-x-2">
                    <Checkbox
                      id={trait}
                      checked={surveyData.personality.includes(trait)}
                      onCheckedChange={() => handleArrayToggle(surveyData.personality, trait, 'personality')}
                    />
                    <Label htmlFor={trait} className="text-sm">{trait}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>Увлечения и хобби</Label>
              <p className="text-sm text-gray-600 mb-3">Что интересует получателя?</p>
              <div className="grid grid-cols-2 gap-3">
                {hobbiesOptions.map((hobby) => (
                  <div key={hobby} className="flex items-center space-x-2">
                    <Checkbox
                      id={hobby}
                      checked={surveyData.hobbies.includes(hobby)}
                      onCheckedChange={() => handleArrayToggle(surveyData.hobbies, hobby, 'hobbies')}
                    />
                    <Label htmlFor={hobby} className="text-sm">{hobby}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="lifestyle">Образ жизни</Label>
              <Select value={surveyData.lifestyle} onValueChange={(value) => setSurveyData(prev => ({ ...prev, lifestyle: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите образ жизни" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Активный</SelectItem>
                  <SelectItem value="home">Домашний</SelectItem>
                  <SelectItem value="social">Социальный</SelectItem>
                  <SelectItem value="professional">Деловой</SelectItem>
                  <SelectItem value="creative">Творческий</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Любимые цвета</Label>
              <p className="text-sm text-gray-600 mb-3">Выберите несколько цветов</p>
              <div className="grid grid-cols-3 gap-3">
                {colorOptions.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={color}
                      checked={surveyData.favoriteColors.includes(color)}
                      onCheckedChange={() => handleArrayToggle(surveyData.favoriteColors, color, 'favoriteColors')}
                    />
                    <Label htmlFor={color} className="text-sm">{color}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="preferredStyle">Предпочитаемый стиль</Label>
              <Select value={surveyData.preferredStyle} onValueChange={(value) => setSurveyData(prev => ({ ...prev, preferredStyle: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите стиль" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classic">Классический</SelectItem>
                  <SelectItem value="modern">Современный</SelectItem>
                  <SelectItem value="vintage">Винтажный</SelectItem>
                  <SelectItem value="minimalist">Минималистичный</SelectItem>
                  <SelectItem value="eccentric">Эксцентричный</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Бюджет подарка</Label>
              <Select value={surveyData.budget} onValueChange={(value) => setSurveyData(prev => ({ ...prev, budget: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите бюджет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000-3000">1 000 - 3 000 ₽</SelectItem>
                  <SelectItem value="3000-7000">3 000 - 7 000 ₽</SelectItem>
                  <SelectItem value="7000-15000">7 000 - 15 000 ₽</SelectItem>
                  <SelectItem value="15000-30000">15 000 - 30 000 ₽</SelectItem>
                  <SelectItem value="30000+">30 000+ ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label>Желаемая эмоция от подарка</Label>
              <p className="text-sm text-gray-600 mb-4">Какую эмоцию должен вызвать подарок?</p>
              <div className="grid grid-cols-1 gap-3">
                {emotions.map((emotion) => (
                  <Card 
                    key={emotion.value} 
                    className={`cursor-pointer transition-all ${
                      surveyData.desiredEmotion === emotion.value 
                        ? 'ring-2 ring-emotion-joy bg-emotion-joy/5' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSurveyData(prev => ({ ...prev, desiredEmotion: emotion.value }))}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{emotion.label}</h4>
                          <p className="text-sm text-gray-600">{emotion.description}</p>
                        </div>
                        {surveyData.desiredEmotion === emotion.value && (
                          <Icon name="Check" size={20} className="text-emotion-joy" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="emotionalContext">Эмоциональный контекст</Label>
              <Textarea
                id="emotionalContext"
                value={surveyData.emotionalContext}
                onChange={(e) => setSurveyData(prev => ({ ...prev, emotionalContext: e.target.value }))}
                placeholder="Расскажите о ситуации, отношениях, важных моментах..."
                rows={4}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="specialRequests">Особые пожелания</Label>
              <Textarea
                id="specialRequests"
                value={surveyData.specialRequests}
                onChange={(e) => setSurveyData(prev => ({ ...prev, specialRequests: e.target.value }))}
                placeholder="Любые дополнительные пожелания, ограничения или идеи..."
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="deliveryDate">Желаемая дата доставки</Label>
              <Input
                id="deliveryDate"
                type="date"
                value={surveyData.deliveryDate}
                onChange={(e) => setSurveyData(prev => ({ ...prev, deliveryDate: e.target.value }))}
              />
            </div>
            
            {/* Сводка */}
            <Card className="bg-emotion-joy/5">
              <CardHeader>
                <CardTitle className="text-lg">Сводка анкеты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div><strong>Получатель:</strong> {surveyData.recipientName || 'Не указано'}</div>
                <div><strong>Возраст:</strong> {surveyData.recipientAge || 'Не указано'}</div>
                <div><strong>Отношения:</strong> {surveyData.relationship || 'Не указано'}</div>
                <div><strong>Повод:</strong> {surveyData.occasion || 'Не указано'}</div>
                <div><strong>Бюджет:</strong> {surveyData.budget || 'Не указано'}</div>
                <div><strong>Желаемая эмоция:</strong> {emotions.find(e => e.value === surveyData.desiredEmotion)?.label || 'Не указано'}</div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

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
                <Button variant="ghost" className="p-2 transition-all duration-200 hover:scale-110 active:scale-95" onClick={() => navigate('/')}>
                  <Icon name="ArrowLeft" size={20} />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emotion-joy rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <h1 className="text-2xl font-heading font-bold text-gray-900">Анкета персонализации</h1>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Шаг {currentStep} из {totalSteps}
              </div>
            </div>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="bg-white/50 py-4">
          <div className="container mx-auto px-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-emotion-joy h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Survey Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1 && 'Основная информация'}
                  {currentStep === 2 && 'Личность получателя'}
                  {currentStep === 3 && 'Предпочтения и стиль'}
                  {currentStep === 4 && 'Эмоциональная составляющая'}
                  {currentStep === 5 && 'Финальные детали'}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && 'Расскажите базовую информацию о получателе подарка'}
                  {currentStep === 2 && 'Помогите нам понять характер и интересы человека'}
                  {currentStep === 3 && 'Укажите стилевые предпочтения и бюджет'}
                  {currentStep === 4 && 'Какую эмоцию должен вызвать подарок?'}
                  {currentStep === 5 && 'Последние штрихи для идеального подарка'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderStep()}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Icon name="ChevronLeft" size={16} className="mr-2" />
                Назад
              </Button>
              
              {currentStep < totalSteps ? (
                <Button 
                  onClick={handleNext}
                  className="bg-emotion-joy hover:bg-emotion-joy/90 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Далее
                  <Icon name="ChevronRight" size={16} className="ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  className="bg-emotion-gratitude hover:bg-emotion-gratitude/90 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить анкету
                </Button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalizationSurvey;