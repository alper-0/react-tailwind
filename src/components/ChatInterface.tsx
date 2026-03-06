import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowLeft, Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";

interface ChatInterfaceProps {
    onEnd: () => void;
}


export const ChatInterface = ({ onEnd }: ChatInterfaceProps) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { text: "Olá! Como posso te ajudar?", isAi: true },
    ]);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { text: input, isAi: false };

    // Adiciona mensagem do usuário na tela
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
        const response = await fetch("http://localhost:3000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: input }),
        });

        const data = await response.json();

        const aiMessage = {
            text: data.response, // depende do que seu backend retorna
            isAi: true,
        };

        setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
    }
};

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center p-4 border-b bg-white">
                <Button variant="ghost" size="icon" onClick={onEnd}>
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h2 className="ml-4 text-xl font-semibold">Conversa de Apoio</h2>
            </div>

            {/* Area da Mensagem */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <ChatMessage key={idx} message={msg.text} isAi={msg.isAi} />
                ))}
            </div>

            {/* Area do Input */}
            <div className="p-4 border-t bg-white/50">
                <form className="flex gap-2" onSubmit={handleSubmit}>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1"
                    />
                    <Button type="submit" size="icon">
                        <Send className="w-5 h-5" />
                    </Button>
                </form>
            </div>
        </div>
    );
};