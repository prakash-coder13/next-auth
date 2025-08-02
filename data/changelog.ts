interface Change{
    title:string;
    date:string;
    description:string;
}
const changelog: Change[] = [
    {
        title:"Created starter Next.js project",
        date: "01/08/2025",
        description: "Created a sample project in Next.js that I will be using to demo the integration between Next.js and the next-auth  library.  Its basically for self learning."
    },
    {
        title:"Components for ChangeLog and Code",
        date: "01/08/2025",
        description:"Added two components for Change Log and for Code , these components have been created outside the app folder in  a folder called components."
    }
];

export default changelog;