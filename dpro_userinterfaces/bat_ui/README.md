This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Nodejs download

https://nodejs.org/en/download

## ReactDom reference

https://react.dev/reference/react-dom/components/

## ESLint Hot Reloading

https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme

## Modern UI Reference

https://www.youtube.com/watch?v=uYXtNUcAAoU

https://www.youtube.com/watch?v=B91wc5dCEBA

## Tailwind Reference

https://tailwindcss.com/docs/styling-with-utility-classes
https://kombai.com/tailwind/cheat-sheet/
https://www.youtube.com/watch?v=mr15Xzb1Ook
https://www.youtube.com/watch?v=6biMWgD6_JY&t=159s&pp=ygUbdGFpbHdpbmQgY3NzIHJlYWN0IG92ZXJ2aWV3

## React Icons

https://react-icons.github.io/react-icons/


##Errors


"Cannot access 'o' before initialization"
Object member is incorrectly defined. 

example - 

const FunctionName = () => {
    //define use state variable

    return(
        // initialize state variable
        {// call function to set state variables.}

        <div>
            button propName={stateVariable}>
        </div>
    );
}


"html elements define prop members with a function that contains a variable."

example - 

button prop={function(variable)}>
button prop={function}>


"Props are not defined."

example - 

const FunctionName = (prop) =>
const FunctionName = ({prop}) =>


"Too many re-renders. React limits the number of renders to prevent an infinite loop."

state updates in render method

example - 

const functionName = () => {

    //state update only allowed within function call

    const functionName = () => {
        setStateVariableName();
    }

    return(
        // call function with prop
        button propName={function} >
    );
}

## Browser Inspector

1. Use the inspector to preview css that is generated for html elements.
2. Verify css styling is correct.
3. Use the console to view error messages for application errors such as client-side exception messages.
4. View margin, border, padding and elements for each div.
