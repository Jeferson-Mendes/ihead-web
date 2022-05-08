
export const checkOrganizationalEmail = (email: string): boolean => {
    const regex1 = /@aluno.ifce.edu.br$/;
    const regex2 = /@ifce.edu.br$/;

    if (regex1.test(email) || regex2.test(email)){
        return true
    }

    return false;
}