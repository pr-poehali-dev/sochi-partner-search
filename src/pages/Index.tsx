import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Спасибо за интерес!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setName('');
      setPhone('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/83759596-0389-41f0-9ca9-1da09b681f75/files/59dc4d9d-e9df-4a96-a0a5-eca6db095c59.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-700/60 to-blue-900/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-down">
              <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                Ищем бизнес-партнера
              </span>
            </h1>
            
            <p className="text-2xl md:text-4xl font-semibold text-white/95 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              в 2 бизнеса в городе Сочи
            </p>

            <p className="text-xl md:text-2xl font-medium text-blue-200/90 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              вход 20 миллионов рублей
            </p>

            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-slate-500 mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }} />
          </div>

          <div 
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in"
            style={{ 
              animationDelay: '0.4s',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px rgba(96, 165, 250, 0.3)'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Узнать подробности
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-lg font-medium">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Введите ваше имя"
                  className="h-14 text-lg bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:bg-white/30 focus:border-blue-400 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-lg font-medium">
                  Номер телефона
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="h-14 text-lg bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:bg-white/30 focus:border-blue-400 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-slate-600 via-blue-600 to-slate-700 hover:from-slate-500 hover:via-blue-500 hover:to-slate-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
              </Button>
            </form>

            <p className="text-center text-white/70 text-sm mt-6">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>

          <div className="text-center mt-8 text-white/80 text-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p>🏖️ Сочи • Уникальная возможность для развития</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;