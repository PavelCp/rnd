# Step 1: Use Node.js as a base image
FROM node:18.20.3-alpine

# Step 2: Set the working directory inside the container
WORKDIR /docs

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm run build-storybook

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Expose the port that Storybook will run on
EXPOSE 6006

# Step 7: Run Storybook when the container starts
CMD ["npm", "run", "storybook"]
