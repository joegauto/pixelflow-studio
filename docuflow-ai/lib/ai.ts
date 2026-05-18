import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface DocumentAnalysis {
  summary: string;
  category: string;
  tags: string[];
  language: string;
  keyEntities: string[];
  sentiment: string;
}

export async function analyzeDocument(
  text: string
): Promise<DocumentAnalysis> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a document analysis AI. Analyze the provided text and return a JSON object with:
- summary: A concise 2-3 sentence summary
- category: One of: "contract", "invoice", "report", "legal", "technical", "marketing", "hr", "financial", "correspondence", "other"
- tags: Array of 3-7 relevant tags
- language: The detected language (e.g., "en", "es", "fr")
- keyEntities: Array of key people, companies, or entities mentioned
- sentiment: One of: "positive", "negative", "neutral", "mixed"

Return ONLY valid JSON, no markdown.`,
      },
      {
        role: "user",
        content: text.slice(0, 8000), // Limit to avoid token limits
      },
    ],
    temperature: 0.1,
    response_format: { type: "json_object" },
  });

  const content = response.choices[0].message.content;
  if (!content) throw new Error("No response from AI");

  return JSON.parse(content) as DocumentAnalysis;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text.slice(0, 8000), // Limit input
    dimensions: 1536,
  });

  return response.data[0].embedding;
}

export async function askDocumentQuestion(
  documentText: string,
  question: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that answers questions about documents. Be concise and accurate. If the answer is not in the document, say so clearly.",
      },
      {
        role: "user",
        content: `Document content:\n${documentText.slice(0, 6000)}\n\nQuestion: ${question}`,
      },
    ],
    temperature: 0.2,
    max_tokens: 500,
  });

  return response.choices[0].message.content || "Unable to generate answer.";
}

export async function generateDocumentSuggestions(
  text: string
): Promise<string[]> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          'You are a document assistant. Based on the document content, suggest 5 relevant questions a user might want to ask. Return as a JSON array of strings. Return ONLY valid JSON.',
      },
      {
        role: "user",
        content: text.slice(0, 4000),
      },
    ],
    temperature: 0.5,
    response_format: { type: "json_object" },
  });

  const content = response.choices[0].message.content;
  if (!content) return [];

  const parsed = JSON.parse(content);
  return parsed.questions || parsed.suggestions || [];
}
