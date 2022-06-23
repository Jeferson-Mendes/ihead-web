import React from "react";

import {
    TermsOfServiceModalContainerStyled,
    CloseModalStyled,
    ModalContentStyled,

} from './style';

interface IProps {
    modalIsOpen: boolean;
    closeModal(): void;
}

const TermsOfUseModal: React.FC<IProps> = ({ modalIsOpen, closeModal }) => {
    return (
        <TermsOfServiceModalContainerStyled modalIsOpen={modalIsOpen}>
            <ModalContentStyled>
                <CloseModalStyled onClick={closeModal}>
                    X
                </CloseModalStyled>
                <h2>Termos de Uso</h2>
                <p>
                Termos de uso
Bem-vindo ao iHead!

Estes termos de uso descrevem as regras e regulamentos para a utilização do iHead, localizado em https://ihead-web-development.herokuapp.com/.

Ao confirmar na caixa de seleção, assumimos que aceita estes termos e condições. Não continue a utilizar o iHead se não concordar em aceitar todos os termos de uso indicados nesta página.

Licença:
Todos os direitos de propriedade intelectual dos usuários cadastrados são reservados. 

Não deve fazê-lo:

•Copiar e republicar o material do iHead
•Venda, aluguer ou sub-licenciamento de material do iHead
•Reproduzir, duplicar ou copiar material do iHead
•O presente Acordo terá início na data do mesmo.

Partes deste site oferecem aos utilizadores uma oportunidade de publicar e trocar opiniões e informações em certas áreas do site. iHead não revê Comentários e Artigos antes da sua presença no site. Os comentários e artigos não refletem os pontos de vista e opiniões do iHead. Os comentários e artigos refletem os pontos de vista e opiniões da pessoa que publica os seus pontos de vista e opiniões. Na medida do permitido pela legislação aplicável, iHead não será responsável pelos Comentários, Artigos ou qualquer responsabilidade, danos, ou despesas causadas e/ou sofridas como resultado de qualquer utilização e/ou publicação e/ou aparecimento dos Comentários e Artigos neste site.

O iHead reserva-se o direito de monitorizar todos os Comentários e Artigos, para remover quaisquer Comentários e Artigos que possam ser considerados inadequados, ofensivos, ou que causem a violação destes Termos de uso.

O utilizador garante e representa isso:

•Tem o direito de publicar os Comentários e Artigos no nosso site e tem todas as licenças e consentimentos necessários para o fazer;
•Os Comentários não invadem qualquer direito de propriedade intelectual, incluindo, sem limitação, direitos de autor, patentes, ou marcas comerciais de terceiros;
•Os Comentários e Artigos não contêm qualquer material difamatório, calunioso, ofensivo, indecente, ou de outra forma ilegal, o que constitui uma invasão de privacidade.
•Os Comentários e Artigos não serão utilizados para solicitar ou promover negócios ou costume ou apresentar atividades comerciais ou atividades ilícitas.

Remoção de links do nosso site:
Se encontrar qualquer link no nosso site que seja ofensivo por qualquer razão, é livre de nos contatar e informar-nos a qualquer momento. Consideraremos pedidos de remoção de links, mas não somos obrigados a fazê-lo ou a responder diretamente ao cliente.

Desde que o site e as informações e serviços no site sejam fornecidos gratuitamente, não seremos responsáveis por qualquer perda ou dano de qualquer natureza.



                </p>
            </ModalContentStyled>
        </TermsOfServiceModalContainerStyled>
    )
}

export default TermsOfUseModal;