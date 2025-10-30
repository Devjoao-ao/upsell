import React from 'react';

const ChatBubble: React.FC = () => {
    return (
        <div className="relative bg-gray-900 rounded-lg p-4 md:p-6 my-8 max-w-2xl mx-auto text-center shadow-lg">
            <p className="text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Fala direta:</span> Tu já tens a porta aberta. Agora precisas das ferramentas certas para o dinheiro realmente aparecer. Com este desbloqueio, recebes os horários que mais pagam, proteção anti-bloqueio e a rotina simples de 'dinheiro todo dia'.
            </p>
            <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
        </div>
    );
}

export default ChatBubble;
