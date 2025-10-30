import React from 'react';
import { CheckmarkIcon } from './Icons';

interface OfferSectionProps {
    isOfferExpired: boolean;
}

const OfferSection: React.FC<OfferSectionProps> = ({ isOfferExpired }) => {
    const benefits = [
        "Recebe os horários que mais pagam.",
        "Proteção Anti-Bloqueio (necessário para ganhos).",
        "Rotina simples de \"dinheiro todo dia\".",
        "Suporte Básico.",
    ];

    const handleCTAClick = () => {
        if (!isOfferExpired) {
            window.location.href = "https://www.clickpayon.com/checkout/322b92ac-10f9-4db2-8519-2c3ce9e3495c";
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/50 rounded-xl p-6 md:p-8 text-center shadow-2xl shadow-red-500/20">
                <h2 className="font-macroma text-2xl md:text-3xl font-bold uppercase tracking-wider text-white mb-4">Desbloqueio Essencial</h2>
                <div className="my-6">
                    <p className="text-gray-400 text-lg line-through">5.000 kz</p>
                    <p className="font-macroma text-5xl md:text-6xl font-black text-white my-2">3.500 Kz</p>
                </div>
                <ul className="text-left space-y-3 my-8 max-w-md mx-auto">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                            <CheckmarkIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleCTAClick}
                    disabled={isOfferExpired}
                    className={`font-macroma w-full text-white font-bold text-lg md:text-xl py-4 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                        isOfferExpired
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/50 animate-pulse'
                    }`}
                >
                    {isOfferExpired ? 'OFERTA EXPIRADA' : 'SIM! Quero Desbloquear por Apenas 3.500 Kz'}
                </button>
            </div>
            <div className="text-center mt-8">
                <a href="#final-thank-you" className="text-gray-500 text-sm hover:underline">
                    Não, prefiro continuar sem o desbloqueio (aceito ganhos mais lentos)
                </a>
            </div>
        </div>
    );
};

export default OfferSection;