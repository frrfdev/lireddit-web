export const RegisterMutation = `mutation Register($username: String!, $password: String!) {
  register(options: {
    username: $username
    password: $password
  }) {
    user {
      id
      username
      createdAt
      updatedAt
    }
    errors {
      field
      message
    }
  }
}`;

export default RegisterMutation;
