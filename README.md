# cypress-ui-demo

This repository contains a Cypress-based UI test demo for automating login and registration scenarios on the Amazon website. The project is a demonstration of my proficiency in using Cypress to create reliable and maintainable end-to-end UI tests.

## Purpose
The primary goal of this project is to showcase my ability to:

- Automate UI testing for critical user flows such as login and registration.
- Use Cypress as a robust tool for end-to-end testing.
- Implement best practices for structuring test cases and suites.

## Test Scenarios
This demo covers the following test scenarios for the Amazon website:

- **Login Tests**:

  - Invalid login attempt with incorrect credentials.
  - Validation for missing or empty fields during login.

- **Registration Tests**:

  - Registration with missing or invalid fields.
  - Validation for existing email during registration.
 
## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v20 or higher)
- **Cypress** (v13 or higher)
  
### Installation

1. Clone this repository:

```git clone https://github.com/ivan75bgd/cypress-ui-demo.git```

2. Navigate to the project directory:

```cd cypress-amazon-demo```

3. Install the dependencies:

```npm install```


### Running the Tests
1. Interactive Mode:

```npx cypress open```

2. Headless Mode:

```npx cypress run```
