# Lab Programs App

A comprehensive web application for managing and explaining lab programs with AI-powered assistance.

## Features

- 📚 Comprehensive Lab Programs
- 🎯 Interactive Learning
- 🤖 AI-Powered Program Explanations
- 📱 Mobile-First Responsive Design

## AI Explanation Feature Setup

The application includes an AI-powered explanation feature using Google's Gemini Pro model. To use this feature:

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a `.env` file in the root directory of the project
3. Add your API key to the `.env` file:
   ```
   VITE_GOOGLE_AI_API_KEY=your_api_key_here
   ```

### How the AI Explanation Works

- Each program has an "Explain" tab that provides AI-generated explanations
- Explanations are cached in localStorage to minimize API calls
- Users can ask follow-up questions about specific programs
- All responses are stored locally for better performance

## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file with the following variables:

```
VITE_GOOGLE_AI_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


