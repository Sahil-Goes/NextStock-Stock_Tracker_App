'use client';

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const router = useRouter();
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    }, );

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="form-title">Welcome Back</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Form INPUTS*/}

                 <InputField
                    name="email"
                    label="Email"
                    placeholder="john@example.com"
                    register={register}
                    error={errors.email}
                    validation={{ 
                       required: 'Email is required', 
                        pattern: { 
                           value: /^\w+@\w+\.\w+$/, 
                            message: 'Valid email address is required' 
                        } 
                    }}
                 />

                 <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ 
                        required: 'Password is required', 
                        minLength: { 
                            value: 8, 
                            message: 'Password must be at least 8 characters' 
                        } 
                    }}
                 />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing into your Account...' : 'Sign In'}
                </Button>

                <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
            </form>
        </>
    )
}

export default SignIn;