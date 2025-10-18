# -------------------------
# 🚀 Aroxima — SvelteKit + Tailwind build
# -------------------------

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Use 3100 for this project
EXPOSE 3100

# Run the preview server on port 3100
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3100"]
