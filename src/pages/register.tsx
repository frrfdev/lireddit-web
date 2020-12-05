import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import RegisterMutation from '../mutations/RegisterMutation';

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
	const [, register] = useMutation(RegisterMutation);

	return (
		<Wrapper variant='small'>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(values) => {
					return register(values);
				}}>
				{({ isSubmitting }) => (
					<Form>
						<InputField
							name='username'
							label='Username'
							placeholder='your username here'
						/>
						<Box mt={4}>
							<InputField
								name='password'
								label='Password'
								placeholder='your password here'
								type='password'
							/>
						</Box>
						<Button
							mt={4}
							type='submit'
							isLoading={isSubmitting}
							colorScheme='teal'
							color='white'>
							Register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default Register;
