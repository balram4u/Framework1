///<reference types="cypress"/> 
class LoginPage{
navigate(path)
{
    cy.fixture("config.json").then((data)=>
    {
        cy.visit(data.baseUrl+path);
    })
}
}
export default LoginPage;