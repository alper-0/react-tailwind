import { Request, Response } from "express";
import { getAIResponse } from "../services/chatServices";   


export const sendMessage = async (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({error: "O campo 'text' é obrigatório."});
    }

    const instrucao = `Você é um assistente virtual de apoio emocional. Responda de forma empática e compreensiva,
     oferecendo suporte e orientação para lidar com emoções difíceis. Evite julgamentos e seja sempre acolhedor.`;

    try {
        const aiResponse = await getAIResponse(instrucao, text);

        res.json({ response: aiResponse});
    } catch (error) {
        console.error("Erro ao obter resposta da IA:", error);
        res.status(500).json({ error: "Erro ao processar requisição." });
    }
};