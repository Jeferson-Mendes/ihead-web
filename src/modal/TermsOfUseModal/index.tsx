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
                    Lorem ipsum dolor sit amet. Et deserunt officiis aut ducimus placeat id quas facere? Ut doloremque ducimus eum corporis doloribus ex temporibus galisum sit reiciendis iusto eos omnis laborum ab nostrum optio. Et ducimus illo a labore molestias ut consequuntur odio sit consequatur iure id vitae animi. Non impedit doloremque eos voluptatem accusantium quo dolorum sint At delectus dolore At officia modi sit voluptatem vitae? Qui impedit amet aut consequuntur omnis 33 aliquid earum ut quia earum eum quidem dolor. Ex eveniet magnam eos quia inventore ea atque vero  maiores omnis ab unde delectus. Sit voluptas expedita eum temporibus possimus est commodi porro eum corporis itaque et fugit corrupti. Est unde quam qui facilis eligendi et sunt modi sit omnis possimus est nulla dolores quo  harum? </p><p>Cum enim reprehenderit ex velit enim et quas quos ex asperiores saepe? Qui temporibus pariatur non molestiae deserunt id nihil unde ut autem commodi non autem voluptas. In internos provident et voluptate dicta non magnam sint a quia quisquam! Hic magni quia ut porro quia 33 inventore molestiae  quis autem rem dicta tempora id error accusantium eos dolorem commodi. Est voluptatem veniam ad voluptatum quod sit galisum enim vel perferendis corporis in earum eius ut repudiandae necessitatibus. Est iure fuga est repudiandae omnis aut soluta aspernatur qui minima molestias eos explicabo veniam. Qui iure facere ab commodi molestias ad rerum placeat. Et architecto quaerat est doloribus cumque sit voluptas deserunt et expedita dolores qui consequatur eaque. Id repellat molestiae qui libero dolor ea aperiam voluptates aut quibusdam obcaecati. Ut animi odio vel quia quia sed quas voluptatem.
                </p>
            </ModalContentStyled>
        </TermsOfServiceModalContainerStyled>
    )
}

export default TermsOfUseModal;