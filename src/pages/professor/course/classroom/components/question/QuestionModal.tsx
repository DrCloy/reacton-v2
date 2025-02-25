import usePagination from '@/hooks/usePagination';
import S from './QuestionModal.module.css';
import CloseSvg from '@/assets/icons/close.svg?react';
import PrevIcon from '@/assets/icons/back-vector.svg?react';
import NextIcon from '@/assets/icons/next-vector.svg?react';
import { ProfessorQuestion } from '@/core/model';
import { useEffect, useRef } from 'react';

type QuestionModalProps = {
  questions: ProfessorQuestion[];
  handleResolveClick: (id: ProfessorQuestion['id']) => void;
  closeModal: () => void;
  initialPage?: number;
};

const QuestionModal = ({
  questions,
  handleResolveClick,
  closeModal,
  initialPage,
}: QuestionModalProps) => {
  const { setPage, prevPage, nextPage, PaginationDiv, page, totalPages } =
    usePagination();
  const questionRef = useRef(questions[initialPage || 0].id);

  useEffect(() => {
    if (initialPage) setPage(initialPage);
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;
    const index = questions.findIndex(
      (question) => question.id === questionRef.current
    );
    if (index === -1) {
      questionRef.current = questions[page].id;
    } else {
      setPage(index);
    }
  }, [questions]);

  return (
    <div className={S.modalContainer} onClick={(e) => e.stopPropagation()}>
      <button className={S.closeButton} onClick={closeModal}>
        <CloseSvg className={S.closeSvg} />
      </button>
      {questions.length === 0 ? (
        <div className={S.noQuestion}>더이상 질문이 없습니다!</div>
      ) : (
        <div className={S.pageController}>
          <button
            className={S.buttonContainer}
            onClick={() => {
              questionRef.current = questions[Math.max(page - 1, 0)].id;
              prevPage();
            }}
            disabled={page === 0}
          >
            <PrevIcon className={S.icon} />
          </button>

          <div className={S.page}>
            <span className={S.currentPage}>{page + 1}</span> /{' '}
            {Math.max(totalPages, 1)}
          </div>
          <button
            className={S.buttonContainer}
            onClick={() => {
              questionRef.current =
                questions[Math.min(page + 1, totalPages - 1)].id;
              nextPage();
            }}
            disabled={page >= totalPages - 1}
          >
            <NextIcon className={S.icon} />
          </button>
        </div>
      )}

      {questions.length > 0 && (
        <PaginationDiv>
          {questions.map((question) => (
            <div key={question.id}>
              <div className={S.questionContent}>{question.content}</div>
              <button
                className={S.resolveButton}
                onClick={() => {
                  handleResolveClick(question.id);
                }}
              >
                질문이 해결되었어요
              </button>
            </div>
          ))}
        </PaginationDiv>
      )}
    </div>
  );
};

export default QuestionModal;
