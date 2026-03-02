const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');
// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Helper: read messages from file
function readMessages() {
    if (!fs.existsSync(MESSAGES_FILE)) {
        fs.writeFileSync(MESSAGES_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    return JSON.parse(data);
}

// Helper: write messages to file
function writeMessages(messages) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

// Routes

// GET /api/health - health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Nensi Portfolio API is running 🚀' });
});

// POST /api/contact - save contact form message
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email address.' });
    }

    const newMessage = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
    };

    const messages = readMessages();
    messages.push(newMessage);
    writeMessages(messages);

    console.log(`📬 New message from ${newMessage.name} (${newMessage.email})`);

    res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received. I will get back to you soon!',
        data: newMessage,
    });
});

// GET /api/messages - view all messages (admin)
app.get('/api/messages', (req, res) => {
    const messages = readMessages();
    res.json({ success: true, count: messages.length, data: messages });
});

// DELETE /api/messages/:id - delete a message
app.delete('/api/messages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let messages = readMessages();
    const index = messages.findIndex((m) => m.id === id);
    if (index === -1) {
        return res.status(404).json({ success: false, error: 'Message not found.' });
    }
    messages.splice(index, 1);
    writeMessages(messages);
    res.json({ success: true, message: 'Message deleted.' });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}`);
    console.log(`📊 API Endpoints:`);
    console.log(`   GET  /api/health`);
    console.log(`   POST /api/contact`);
    console.log(`   GET  /api/messages`);
    console.log(`   DELETE /api/messages/:id\n`);
});
