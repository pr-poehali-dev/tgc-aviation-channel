import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [subscribersCount, setSubscribersCount] = useState(47234);
  const [viewsCount, setViewsCount] = useState(1250000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubscribersCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const channelStats = [
    { label: 'Подписчиков', value: subscribersCount.toLocaleString('ru-RU'), icon: 'Users' },
    { label: 'Просмотров', value: viewsCount.toLocaleString('ru-RU'), icon: 'Eye' },
    { label: 'Постов в месяц', value: '45+', icon: 'Calendar' },
    { label: 'Рейтинг', value: '4.8/5', icon: 'Star' }
  ];

  const contentTypes = [
    { title: 'Новости авиации', description: 'Свежие новости из мира авиации', count: 150 },
    { title: 'Обзоры самолетов', description: 'Детальные обзоры авиатехники', count: 85 },
    { title: 'История авиации', description: 'Интересные факты и истории', count: 120 },
    { title: 'Технологии', description: 'Современные авиационные технологии', count: 95 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-sky-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/88092bbb-450a-40c3-8ddc-bc9e0498d089.jpg" 
            alt="Aviation background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-6">
            <Icon name="Plane" size={48} className="text-sky-200" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">МИР АВИАЦИИ</h1>
              <p className="text-sky-200 text-lg">Telegram канал о мире авиации</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button 
              size="lg" 
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3"
              onClick={() => window.open('https://t.me/World_Aviation_Life', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Подписаться на канал
            </Button>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
              <Icon name="Users" size={16} className="mr-1" />
              {subscribersCount.toLocaleString('ru-RU')} подписчиков
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* About Channel */}
        <section>
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Info" size={24} className="text-sky-600" />
                О канале
              </CardTitle>
              <CardDescription className="text-lg">
                Добро пожаловать в мир авиации! Здесь вы найдете самые интересные новости, 
                обзоры самолетов, историю авиации и современные технологии.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Наш канал объединяет любителей авиации со всего мира. Мы делимся:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-sky-600" />
                  Ежедневными новостями авиации
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-sky-600" />
                  Обзорами новых самолетов
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-sky-600" />
                  Историческими фактами
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-sky-600" />
                  Техническими новинками
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Statistics */}
        <section>
          <h2 className="text-3xl font-bold text-sky-900 mb-8 flex items-center gap-3">
            <Icon name="BarChart3" size={28} />
            Статистика канала
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channelStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={stat.icon} size={32} className="text-sky-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-sky-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Types */}
        <section>
          <h2 className="text-3xl font-bold text-sky-900 mb-8 flex items-center gap-3">
            <Icon name="FileText" size={28} />
            Наш контент
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contentTypes.map((content, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {content.title}
                    <Badge className="bg-sky-100 text-sky-800 border-sky-200">
                      {content.count}+ постов
                    </Badge>
                  </CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={(content.count / 200) * 100} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News Preview */}
        <section>
          <h2 className="text-3xl font-bold text-sky-900 mb-8 flex items-center gap-3">
            <Icon name="Newspaper" size={28} />
            Последние новости
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-red-100 text-red-800 border-red-200">Срочно</Badge>
                <CardTitle className="text-lg">Новый рекорд скорости</CardTitle>
                <CardDescription className="text-sm text-gray-500">2 часа назад</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Экспериментальный самолет установил новый рекорд скорости для гражданской авиации...
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800 border-blue-200">Технологии</Badge>
                <CardTitle className="text-lg">Электрические самолеты</CardTitle>
                <CardDescription className="text-sm text-gray-500">5 часов назад</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Крупная авиакомпания объявила о планах внедрения электрических самолетов...
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800 border-green-200">История</Badge>
                <CardTitle className="text-lg">75 лет авиации</CardTitle>
                <CardDescription className="text-sm text-gray-500">1 день назад</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Сегодня исполняется 75 лет со дня первого полета легендарного самолета...
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-sky-600 to-sky-800 text-white">
            <CardContent className="py-12">
              <Icon name="Plane" size={48} className="mx-auto mb-6 text-sky-200" />
              <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам!</h2>
              <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                Станьте частью сообщества любителей авиации. Получайте последние новости, 
                участвуйте в обсуждениях и делитесь своей страстью к полетам.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-sky-800 hover:bg-sky-50 font-semibold px-8 py-4 text-lg"
                onClick={() => window.open('https://t.me/World_Aviation_Life', '_blank')}
              >
                <Icon name="Send" size={20} className="mr-3" />
                Подписаться на канал
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-900 text-sky-100 py-8">
        <div className="container mx-auto px-4">
          <Separator className="mb-6 bg-sky-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Plane" size={24} />
              <span className="font-semibold">Мир Авиации</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-sky-200 hover:text-white hover:bg-sky-800">
                <Icon name="Mail" size={16} className="mr-2" />
                Контакты
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sky-200 hover:text-white hover:bg-sky-800"
                onClick={() => window.open('https://t.me/World_Aviation_Life', '_blank')}
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}