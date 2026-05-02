# 🚀 Playwright API Second Assessment

A scalable API automation framework built using Playwright API Testing to validate an end-to-end shopping workflow using DummyJSON APIs.

This framework demonstrates reusable API utilities, authentication handling, data-driven testing, database integration, and CI/CD execution.

---

## 📌 Project Overview

This framework automates a complete shopping workflow using APIs:

✅ User Login and token generation  
✅ Fetch user profile details  
✅ Fetch all products  
✅ Fetch single product details  
✅ Add products to cart  
✅ Update cart details  
✅ Delete cart validation  

The framework supports:

✅ Data-driven testing using JSON  
✅ Data-driven testing using MySQL Database  
✅ Reusable API utility methods  
✅ Environment variable management using `.env`  
✅ GitHub Actions CI execution  
✅ HTML report generation  

---

# 🏗️ Framework Architecture

```bash
PlaywrightApiSecondAssessment/
│
├── testdata/
│   └── userdata.json

├── tests/
│   ├── e2eDummyJsonFlowJsonData.spec.js
│   └── e2eDummyJsonFlowDbData.spec.js

├── utility/
│   ├── apihelper.js
│   ├── dbhelper.js
│   └── filereader.js

├── .github/workflows/
│   └── playwright.yml

├── .env
├── .env.example
├── playwright.config.js
├── package.json
└── README.md

🔥 Key Features

✅ Authentication Handling
* Login API executed in beforeAll()
* Generates authentication token once
* Token reused across all subsequent API requests

✅ JSON Data Driven Testing
* Test data stored in userdata.json
* Keeps test logic separate from test data
* Easy to maintain multiple test scenarios

✅ Database Driven Testing
* Fetches test data dynamically from MySQL database
* Uses reusable dbhelper.js
* Simulates real-world enterprise data validation

✅ Reusable API Utilities
apihelper.js contains reusable methods for:
* Login API
* Get user profile API
* Get products API
* Get single product API
* Add cart API
* Update cart API
* Delete cart API

This avoids duplicate API request code inside test files.

✅ Utility Layer
filereader.js
* Reads external JSON test data
dbhelper.js
* Creates DB connection
* Fetches test data dynamically

✅ CI/CD Integration
Framework is integrated with GitHub Actions:
* Installs dependencies
* Installs Playwright browsers
* Creates MySQL service container
* Seeds database with test data
* Executes automation suite
* Uploads Playwright reports as artifacts

⚙️ Installation & Setup

Clone repository
git clone https://github.com/Organisationn/PlaywrightApiSecondAssessment.git
Install dependencies
npm install
Install Playwright browsers
npx playwright install

▶️ Running Tests
Run all tests
npx playwright test
Run JSON test
npx playwright test tests/e2eDummyJsonFlowJsonData.spec.js
Run DB test
npx playwright test tests/e2eDummyJsonFlowDbData.spec.js

📊 Reporting
Framework uses Playwright HTML reports:
* API execution logs
* Request validations
* Assertion results
* Failure debugging support

Reports are uploaded automatically in GitHub Actions.

🧠 Design Principles
* Reusability
* Scalability
* Separation of concerns
* Maintainability
* Clean API design

💼 Resume Highlights
* Built Playwright API automation framework for end-to-end shopping workflow validation
* Implemented token-based authentication handling using Playwright hooks
* Designed reusable API utility layer for request handling
* Implemented JSON and database-driven testing
* Integrated framework with GitHub Actions CI pipeline
* Automated database seeding and report artifact uploads

🚀 Future Enhancements
* Support for additional API scenarios and negative test cases
* External test data management using Excel/CSV sources
* Environment-based execution (QA/Staging/Production)

🤝 Conclusion

This project demonstrates real-world API automation framework design using Playwright with reusable utilities, authentication handling, CI/CD integration, and scalable test architecture.

⭐ If you like this project, consider giving it a star.