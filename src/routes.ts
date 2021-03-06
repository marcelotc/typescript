import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'marcelo@gmail.com',
        password: '12343',
        techs: [
            'Node',
            'react',
            'React native',
            { title: 'Javascript', experience: 100 }
         ]
    });

    return response.json({ message: 'Hello World' })
}
