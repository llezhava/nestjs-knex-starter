export type User = {
 firstName: string;
 lastName: string;
 id: number;
 email: string;
 phone: string;
 password?: string;
 salt?: string;
 created_at: string;
 updated_at: string;
}

export type UserDb = Omit<User, 'firstName' | 'lastName'> & {
 first_name: string;
 last_name: string;
 password: string;
 salt: string;
}