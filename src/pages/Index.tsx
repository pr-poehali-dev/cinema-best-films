import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Матрица: Воскрешения",
      year: 2021,
      rating: 8.1,
      genre: "Фантастика",
      description:
        "Нео живет обычной жизнью в Сан-Франциско, где его терапевт прописывает ему синие таблетки. Но он не может понять, что реально, а что нет...",
      poster: "/img/cb0b3643-1ef1-4a1b-bdcb-72ecdf428e6c.jpg",
      reviews: 2847,
    },
    {
      id: 2,
      title: "Дюна: Часть вторая",
      year: 2024,
      rating: 8.7,
      genre: "Фантастика",
      description:
        "Пол Атрейдес объединяется с Чани и фрименами, чтобы отомстить заговорщикам, которые разрушили его семью...",
      poster: "/img/dafc55e3-d9d5-439e-a603-8a0cd998431b.jpg",
      reviews: 4521,
    },
    {
      id: 3,
      title: "Оппенгеймер",
      year: 2023,
      rating: 8.9,
      genre: "Драма",
      description:
        "История американского физика Роберта Оппенгеймера и его роли в разработке атомной бомбы...",
      poster: "/img/5136b758-82fe-4293-a497-9dab7aece92b.jpg",
      reviews: 3652,
    },
  ];

  const topRatedMovies = [
    { title: "Крестный отец", rating: 9.2, year: 1972 },
    { title: "Побег из Шоушенка", rating: 9.3, year: 1994 },
    { title: "Список Шиндлера", rating: 9.0, year: 1993 },
    { title: "Криминальное чтиво", rating: 8.9, year: 1994 },
    { title: "Тёмный рыцарь", rating: 9.0, year: 2008 },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={i}
          name="Star"
          className="w-4 h-4 fill-cinema-gold text-cinema-gold"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Icon
          key="half"
          name="Star"
          className="w-4 h-4 fill-cinema-gold/50 text-cinema-gold"
        />,
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          name="Star"
          className="w-4 h-4 text-gray-600"
        />,
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-cinema-black text-white">
      {/* Header */}
      <header className="border-b border-cinema-gray bg-cinema-darkgray/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Film" className="w-8 h-8 text-cinema-gold" />
              <h1 className="text-2xl font-cinzel font-bold text-cinema-gold">
                CINEMA COLLECTION
              </h1>
            </div>
            <nav className="flex space-x-6">
              <Button
                variant="ghost"
                className="text-white hover:text-cinema-gold"
              >
                <Icon name="Home" className="w-4 h-4 mr-2" />
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-cinema-gold"
              >
                <Icon name="Sparkles" className="w-4 h-4 mr-2" />
                Новинки
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-cinema-gold"
              >
                <Icon name="Trophy" className="w-4 h-4 mr-2" />
                Топ
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-cinema-gold"
              >
                <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                Отзывы
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-cinema-gold"
              >
                <Icon name="Heart" className="w-4 h-4 mr-2" />
                Избранное
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-cinema-darkgray to-cinema-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-cinzel font-bold mb-6 text-cinema-gold">
            Лучшие фильмы современности
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-open-sans">
            Откройте для себя кинематографические шедевры, которые определяют
            наше время. Рейтинги, обзоры и рекомендации от киноманов.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-cinema-gold text-black hover:bg-cinema-gold/80 px-8 py-3 text-lg font-semibold">
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              className="border-cinema-gold text-cinema-gold hover:bg-cinema-gold hover:text-black px-8 py-3 text-lg"
            >
              Топ рейтинг
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-cinzel font-bold text-cinema-gold mb-8 text-center">
            Рекомендуемые фильмы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-cinema-darkgray border-cinema-gray hover:border-cinema-gold transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cinema-gold text-black font-semibold">
                      {movie.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-cinema-gold font-cinzel">
                    {movie.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {movie.year} • {movie.genre}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm font-open-sans">
                    {movie.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {renderStars(movie.rating)}
                      <span className="text-sm text-gray-400 ml-2">
                        {movie.reviews} отзывов
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-cinema-gold text-black hover:bg-cinema-gold/80"
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-cinema-darkgray/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="top" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-cinema-darkgray border-cinema-gray">
              <TabsTrigger
                value="top"
                className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black text-white"
              >
                <Icon name="Trophy" className="w-4 h-4 mr-2" />
                Топ рейтинг
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black text-white"
              >
                <Icon name="Sparkles" className="w-4 h-4 mr-2" />
                Новинки
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black text-white"
              >
                <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                Отзывы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="top" className="mt-8">
              <div className="space-y-4">
                {topRatedMovies.map((movie, index) => (
                  <Card
                    key={index}
                    className="bg-cinema-darkgray border-cinema-gray"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-cinema-gold text-black rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-cinzel text-cinema-gold font-semibold">
                              {movie.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {movie.year}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {renderStars(movie.rating)}
                          </div>
                          <span className="text-cinema-gold font-semibold">
                            {movie.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {featuredMovies.slice(0, 2).map((movie) => (
                  <Card
                    key={movie.id}
                    className="bg-cinema-darkgray border-cinema-gray"
                  >
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="w-20 h-28 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-cinzel text-cinema-gold font-semibold mb-1">
                            {movie.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-2">
                            {movie.year} • {movie.genre}
                          </p>
                          <p className="text-gray-300 text-xs mb-3">
                            {movie.description.substring(0, 100)}...
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {renderStars(movie.rating)}
                            </div>
                            <Badge className="bg-cinema-gold text-black">
                              Новинка
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {[
                  {
                    user: "Алексей К.",
                    movie: "Дюна: Часть вторая",
                    rating: 9,
                    review:
                      "Визуально потрясающий фильм! Денис Вильнёв создал настоящий шедевр научной фантастики.",
                  },
                  {
                    user: "Мария С.",
                    movie: "Оппенгеймер",
                    rating: 8,
                    review:
                      "Кристофер Нолан в лучшем виде. Фильм заставляет задуматься о цене научного прогресса.",
                  },
                  {
                    user: "Дмитрий В.",
                    movie: "Матрица: Воскрешения",
                    rating: 7,
                    review:
                      "Неплохое продолжение классики, но не хватает оригинальности первых частей.",
                  },
                ].map((review, index) => (
                  <Card
                    key={index}
                    className="bg-cinema-darkgray border-cinema-gray"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-cinzel text-cinema-gold font-semibold">
                            {review.user}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {review.movie}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-300 font-open-sans italic">
                        "{review.review}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cinema-darkgray border-t border-cinema-gray py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Film" className="w-6 h-6 text-cinema-gold" />
            <h3 className="text-xl font-cinzel font-bold text-cinema-gold">
              CINEMA COLLECTION
            </h3>
          </div>
          <p className="text-gray-400 font-open-sans">
            Ваш путеводитель в мире кино • Лучшие фильмы • Честные отзывы
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
