import { sayHello, sayBye } from './fn1';

if (process.env.NODE_ENV === 'production') {
    return
} else {
    sayHello();
    sayBye();
}