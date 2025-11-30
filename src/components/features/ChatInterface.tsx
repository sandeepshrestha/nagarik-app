import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { chatData, suggestionPills } from "@/data/chatData";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  actions?: { label: { en: string; np: string }; link: string }[];
}

export function ChatInterface() {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        language === "np"
          ? "नमस्ते! म नागरिक साथी, तपाईंको AI सहायक हुँ। म तपाईंलाई कसरी सहयोग गर्न सक्छु?"
          : "Namaste! I am Nagarik Sathi, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const match = chatData.find((data) =>
      data.keywords.some((keyword) => lowerQuery.includes(keyword))
    );

    if (match) {
      return {
        content: match.response[language],
        actions: match.actions,
      };
    }

    return {
      content:
        language === "np"
          ? "माफ गर्नुहोस्, मैले त्यो बुझिन। कृपया राहदानी, लाइसेन्स, वा प्यान कार्डको बारेमा सोध्नुहोस्।"
          : "I am sorry, I did not understand that. Please ask about Passport, License, or PAN card.",
      actions: [],
    };
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(text);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
        actions: response.actions,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex h-full flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex w-full gap-3",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  message.role === "user"
                    ? "bg-primary text-white"
                    : "bg-green-600 text-white"
                )}
              >
                {message.role === "user" ? (
                  <User className="h-5 w-5" />
                ) : (
                  <Bot className="h-5 w-5" />
                )}
              </div>

              <div
                className={cn(
                  "flex max-w-[80%] flex-col gap-2",
                  message.role === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm shadow-sm",
                    message.role === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                  )}
                >
                  <p className="leading-relaxed">{message.content}</p>
                </div>

                {message.actions && (
                  <div className="flex flex-wrap gap-2">
                    {message.actions.map((action, idx) => (
                      <Link
                        key={idx}
                        to={action.link}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/10"
                      >
                        {action.label[language]}
                      </Link>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-gray-400">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex w-full gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div className="rounded-2xl rounded-tl-none border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-gray-100 bg-white p-4">
        {messages.length === 1 && (
          <div className="mb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {suggestionPills.map((pill, idx) => (
              <button
                key={idx}
                onClick={() =>
                  handleSend(language === "en" ? pill.en : pill.np)
                }
                className="whitespace-nowrap rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-600 transition-colors hover:border-primary hover:text-primary"
              >
                {language === "en" ? pill.en : pill.np}
              </button>
            ))}
          </div>
        )}

        <div className="relative flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Input
            placeholder={
              language === "np" ? "सन्देश लेख्नुहोस्..." : "Type a message..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="border-0 bg-transparent p-0 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            onClick={() => handleSend()}
            size="icon"
            className={cn(
              "h-8 w-8 rounded-lg transition-all",
              input.trim()
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-400"
            )}
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-center text-[10px] text-gray-400">
          Nagarik Sathi can make mistakes. Consider checking important
          information.
        </p>
      </div>
    </div>
  );
}
