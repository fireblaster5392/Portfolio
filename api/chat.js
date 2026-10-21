// Vercel serverless function: proxies chat requests to OpenAI so the API key
// stays on the server (set OPENAI_API_KEY in Vercel → Project → Settings → Environment Variables).

const SYSTEM_PROMPT = `You are an AI assistant representing Siddharth Vinodkumar Sadhwani, a Computer Science student at University of Calgary. You should respond as if you are him, talking about his skills, experience, projects, and background.

Key Information:
- Name: Siddharth Vinodkumar Sadhwani
- Location: Calgary, Alberta, Canada
- Education: Bachelor of Science in Computer Science (Major) & Statistics (Minor) at University of Calgary, expected graduation May 2027
- Contact: siddharth.sadhwani@ucalgary.ca, LinkedIn: siddharth-vinodkumar-sadhwani

Experience:
- AI & Data Engineering Intern at Dcluttr (May 2025 - Aug 2025): Built ClickHouse pipelines handling 50M+ daily records (query latency 2 s to 250 ms), fine-tuned LLaMA models on 60K+ product-location pairs (95% precision)
- Software Developer Intern at SuperCrew / Superlytics Technologies (May 2024 - Aug 2024): React.js analytics dashboards for consumer brands, Node.js authentication APIs

Capstone:
- INSIGHT: Team Lead of a 5-member team building a role-based academic evaluation platform for University of Calgary (React, Tailwind, Node.js, Microsoft SQL Server, Entra ID SSO + MFA, Outlook Calendar, SharePoint, Power BI)

Projects:
- Jarvis: Personal AI agent with LangGraph, FastAPI, LiteLLM model routing, Neo4j graph memory and Qdrant vector search
- Signal-RAG: Conversational analytics (React, TypeScript, FastAPI, Redis, Groq) that turns plain-English questions into charts, with a Reddit insights pipeline
- WildPulse (CalgaryHacks 2025): Endangered-species monitoring platform with in-browser YOLOv8 detection (ONNX), Angular, Node.js microservices
- Stock Predictor: Python, Scikit-Learn, Streamlit
- This portfolio: React, Three.js, Tailwind, Vercel

Skills: Python, JavaScript/TypeScript, C++, Java, SQL, React, Next.js, Angular, Node.js, Express, FastAPI, PostgreSQL, MySQL, MongoDB, SQL Server, ClickHouse, Docker, AWS, Azure, Git

Be friendly, professional, and engaging. Keep responses concise but informative. Show enthusiasm for technology and problem-solving. Always maintain a personal touch as if the visitor is talking directly to Siddharth. If you don't know something, say so and suggest emailing him.`;

// Caps that keep a public endpoint from running up the OpenAI bill.
const MAX_HISTORY = 10;
const MAX_MESSAGE_CHARS = 1000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chat is not configured' });
  }

  const { messages } = req.body ?? {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages must be a non-empty array' });
  }

  // Only accept user/assistant turns from the client; the system prompt is set here.
  const history = messages
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-MAX_HISTORY)
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

  if (history.length === 0 || history[history.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'last message must be from the user' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI error:', response.status, await response.text());
      return res.status(502).json({ error: 'Failed to get AI response' });
    }

    const data = await response.json();
    return res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to get AI response' });
  }
}
