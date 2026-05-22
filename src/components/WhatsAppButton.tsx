import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5518936180780?text=Ola!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20um%20servico."
      target="_blank"
      rel="noopener noreferrer"
      animate={{ scale: [1, 1.07, 1], boxShadow: ["0 10px 20px rgba(0,0,0,0.25)", "0 0 0 8px rgba(34,197,94,0.12)", "0 10px 20px rgba(0,0,0,0.25)"] }}
      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-16 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600"
      aria-label="Contato via WhatsApp"
      title="Agende agora pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};

export default WhatsAppButton;
