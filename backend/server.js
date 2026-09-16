require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const quotesFilePath = path.join(__dirname, 'data', 'quotes.json');

app.use(cors());
app.use(express.json());

function ensureQuotesFile() {
  const dirPath = path.dirname(quotesFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(quotesFilePath)) {
    fs.writeFileSync(quotesFilePath, '[]', 'utf8');
  }
}

function readQuotes() {
  ensureQuotesFile();
  const raw = fs.readFileSync(quotesFilePath, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function saveQuotes(quotes) {
  ensureQuotesFile();
  fs.writeFileSync(quotesFilePath, JSON.stringify(quotes, null, 2), 'utf8');
}

const companyInfo = {
  name: 'SteelCore Industries',
  tagline: 'Strength engineered for tomorrow.',
  email: 'sales@steelcore.com',
  phone: '+1 (800) 555-0123',
  location: 'Dubai, United Arab Emirates',
  years: '24+'
};

const steelProducts = [
  { name: 'Structural Steel', description: 'High-strength beams, columns, and framing designed for commercial and industrial projects in Dubai and the wider region.' },
  { name: 'Reinforcing Bar', description: 'Durable rebar solutions for concrete reinforcement and infrastructure development.' },
  { name: 'Stainless Steel', description: 'Corrosion-resistant materials for food processing, medical, and marine applications.' },
  { name: 'Sheet Metal', description: 'Precision-cut steel sheets for fabrication, roofing, cladding, and custom manufacturing.' }
];

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Steel company backend is running.'
  });
});

app.get('/api/company-info', (req, res) => {
  res.json(companyInfo);
});

app.get('/api/steel-products', (req, res) => {
  res.json(steelProducts);
});

app.get('/api/contact-submissions', (req, res) => {
  const quotes = readQuotes();
  res.json(quotes);
});

app.post('/api/contact', (req, res) => {
  const { name, company, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const newQuote = {
    id: Date.now(),
    name,
    company: company || 'Not provided',
    email,
    message,
    createdAt: new Date().toISOString()
  };

  const quotes = readQuotes();
  quotes.unshift(newQuote);
  saveQuotes(quotes);

  res.status(201).json({
    message: 'Thank you. Our sales team will contact you shortly.',
    submitted: newQuote
  });
});

ensureQuotesFile();

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
