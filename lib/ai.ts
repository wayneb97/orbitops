import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function suggestSlot(clientName: string, service: string) {
  const prompt = `Find best 1-hour slot next week for client ${clientName} booking a ${service}. Prefer weekdays, 10am–6pm.`;
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4"
  });
  return response.choices[0].message.content;
}
