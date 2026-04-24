# Playwright API Automation – Shopping Flow

## 📌 Overview
This project is an API automation framework built using Playwright with JavaScript.  
It validates an end-to-end **shopping flow**, including authentication, product retrieval, and cart operations.

The framework is designed with reusable utilities, externalized test data, and clean structure for scalability.

---

## 🛠 Tech Stack
- Playwright (API Testing)
- JavaScript (Node.js)
- GitHub Actions (CI/CD ready)
- dotenv (Environment management)

---

## 📂 Project Structure
- `tests/` → End-to-end API test scenarios  
- `utility/` → Reusable helper classes (API calls, file reader, db reader)  
- `testdata/` → External JSON test data  
- `playwright.config.js` → Playwright configuration  
- `.env.example` → Sample environment variables  

---

## 🔄 Test Scenario Covered

### ✅ Complete Shopping Flow
1. Login and generate authentication token  
2. Fetch user profile  
3. Fetch all products  
4. Fetch single product  
5. Add product to cart  
6. Update cart  
7. Delete cart  

---

## ⚙️ Key Features
- Token-based authentication handling  
- API abstraction using helper class (`ApiHelper`)  
- Externalized test data using JSON files  
- Reusable utility functions  
- Clean separation of test logic and API logic  
- End-to-end scenario validation  

---

## ⚠️ Note on API Behavior
The project uses DummyJSON APIs, which have certain limitations:
- Cart creation does not persist  
- Hardcoded cart IDs are used for update scenarios  

These are handled within test logic to ensure stability.

---

## 🚀 Setup & Execution

### Install dependencies
```bash
npm install

## Run Tests
npx playwright test

##Environment Configuration
Create a .env file based on .env.example:
BASE_URL_API_SECOND=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME_API_SECOND=

##CI/CD
Tests are integrated with GitHub Actions to run automatically on code push.

##Author
Manorama Sahoo
