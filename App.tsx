import React, { useState } from 'react';
import Timer from './components/Timer';
import { CircleCheckIcon, FireIcon } from './components/Icons';
import ChatBubble from './components/ChatBubble';
import OfferSection from './components/OfferSection';

function App() {
  const [isOfferExpired, setIsOfferExpired] = useState(false);

  const handleTimerEnd = () => {
    setIsOfferExpired(true);
  };

  const INITIAL_TIME_IN_SECONDS = 5 * 60 + 54; // 5 minutes and 54 seconds

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Top Confirmation */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-green-500 font-semibold text-lg">
            <CircleCheckIcon className="w-8 h-8" />
            <span>Compra confirmada</span>
          </div>
        </div>

        {/* Main Title and Intro */}
        <div className="text-center mb-6">
          <h1 className="font-macroma text-3xl md:text-5xl font-black tracking-tight mb-4">
            Bem-vindo ao Lucrando Agora 👋
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
            O teu acesso está ativo. Antes de entrar, tens acesso a uma <span className="font-bold text-white">OFERTA ÚNICA</span> para desbloquear ganhos reais. Sem isto, a maioria fica presa em 'ganhos de centavos'.
          </p>
        </div>

        {/* Chat Bubble */}
        <ChatBubble />

        {/* Urgency Timer Bar */}
        <div className={`text-center p-3 my-8 rounded-lg transition-colors duration-500 ${isOfferExpired ? 'bg-gray-800' : 'bg-red-600'}`}>
          <div className="flex items-center justify-center gap-2">
            {!isOfferExpired && <FireIcon className="w-6 h-6 animate-pulse" />}
            <p className="text-base md:text-lg">
              {isOfferExpired ? (
                <span className="font-bold">Esta oferta já não está disponível.</span>
              ) : (
                <>
                  Oferta disponível por <Timer initialSeconds={INITIAL_TIME_IN_SECONDS} onTimerEnd={handleTimerEnd} />. Depois, volta ao preço normal e os bónus saem do ar.
                </>
              )}
            </p>
          </div>
        </div>
        
        {/* Offer Section */}
        <OfferSection isOfferExpired={isOfferExpired} />
      </main>
    </div>
  );
}

export default App;