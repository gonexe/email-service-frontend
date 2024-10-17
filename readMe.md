# Email Service - Frontend

## Objective

The objective of this repository is to provide a user-friendly frontend interface for sending emails using different
email providers. This frontend application allows users to send emails by selecting an email provider from a list of
available options. The application ensures a seamless experience for users by handling the email sending process in the
background and displaying relevant information to the user. If one email provider is down, the backend service will
automatically switch to another provider, ensuring that emails are sent without any issues.

## Technologies Used

- **Languages**: TypeScript, JavaScript
- **Frameworks**: React
- **Package Management**: npm
- **Testing**: Jest (for unit tests)
- **Containerization**: Docker

## API Documentation

The OpenAPI documentation for the endpoints consumed can be
accessed [here](https://email-service-backend-e5cf2a6fc011.herokuapp.com/api-docs/).

## Shared Libraries

This project consumes a [shared repository](https://github.com/gonexe/email-service-shared) created by the same author
that
exposes an NPM library with TypeScript types
to ensure consistency across multiple projects. These types help maintain type safety and uniformity when handling
common data structures.

## Project Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/gonexe/email-service-frontend
    cd email-service-frontend
    ```

2. **Install dependencies**:
    ```sh
    docker-compose up --build
    ```

3. **Set up environment variables**:
   Create a `.env` file in the `frontend` directory and add the required environment variables (see the Environment
   Variables section).

4. **Run the application**:
    ```sh
    npm start
    ```

## Running Tests

To run the tests, use the following command:

```sh
npm test
```

## Environment Variables

```sh
REACT_APP_API_URL: URL for the backend API.
```

## Components

- **`EmailForm.tsx`**: Form for sending emails.
- **`ProviderList.tsx`**: Displays a list of available email providers.
- **`SwitchProvider.tsx`**: Allows switching between email providers.
- **`common folder`**: Contains common components used across the application. (e.g., `SuccessMessage.tsx`,
  `LoadingSpinner.tsx`)
- **`forms folder`**: Contains form components used across the application. (e.g., `Input.tsx`, `SubmitButton.tsx`)

## Services

- **`emailService.ts`**: Handles API calls for sending emails.
- **`providerService.ts`**: Handles API calls for provider-related operations.

## Contexts

- **`ProviderContext.tsx`**: Context for managing the selected email provider.

## Hooks

- **`useEmailForm.ts`**: Custom hook for handling email form state.
- **`useFormValidation.ts`**: Custom hook for form validation.
- **`useProviders.ts`**: Custom hook for handling provider state from context.
- **`useSwitchProvider.ts`**: Custom hook for handling provider switching.
- **`useClearMessage.ts`**: Custom hook for clearing success messages.
- **`useDebounce.ts`**: Custom hook for debouncing input changes.

## Styles

Custom styles for components.

## Test Files

- **`Components`**:
    - **`EmailForm.test.tsx`**: Tests for the `EmailForm` component.
    - **`ProviderList.test.tsx`**: Tests for the `ProviderList` component.
    - **`SwitchProvider.test.tsx`**: Tests for the `SwitchProvider` component.
- **`Services`**:
    - **`emailService.test.ts`**: Tests for the `emailService`.
    - **`providerService.test.ts`**: Tests for the `providerService`.

## Linter and Prettier

- **ESLint**: Linting tool for identifying and fixing problems in the code.
- **Prettier**: Code formatter for maintaining consistent code style.

## Author

This project was created by Gonzalo Avila.

## Disclaimer

This code should not be modified without the explicit approval of the author.